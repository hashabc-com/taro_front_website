import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { isLocale } from "@/i18n/config";
import { notFound } from "next/navigation";
import TwitterFloatingButton from "@/components/TwitterFloatingButton";
import {
  generateMetadata as generateSEOMetadata,
  generateJSONLD,
} from "@/components/SEO";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const isEnglish = locale === "en";

  return generateSEOMetadata({
    title: isEnglish
      ? "TaroPay - Global Payment Gateway for International Business"
      : "TaroPay - 国际业务全球支付网关 | 安全快速结算平台",
    description: isEnglish
      ? "TaroPay provides stable global payment solutions with 99.9% uptime, supporting 200+ countries. Experience seamless cross-border payments with D0 real-time settlement and advanced security."
      : "TaroPay提供稳定的全球支付解决方案，99.9%稳定运行，支持200+国家地区。体验无缝跨境支付，D0实时结算服务，享受先进安全保障。",
    keywords: isEnglish
      ? [
          "global payment",
          "cross-border payment",
          "payment gateway",
          "fintech",
          "TaroPay",
          "international payment",
          "payment processing",
        ]
      : [
          "支付",
          "全球支付",
          "跨境支付",
          "支付网关",
          "金融科技",
          "TaroPay",
          "国际支付",
          "支付处理",
        ],
    locale,
    url: `https://taropay.com/${locale}`,
  });
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}>) {
  const { locale } = await params;

  // 验证locale是否有效
  if (!isLocale(locale)) {
    notFound();
  }

  // 动态导入该语言的 message
  const messages = (await import(`@/messages/${locale}.json`)).default;

  // 生成JSON-LD结构化数据
  const jsonLD = generateJSONLD({
    title:
      locale === "en"
        ? "TaroPay - Global Payment Solutions"
        : "TaroPay - 全球支付解决方案",
    description:
      locale === "en"
        ? "TaroPay provides stable global payment solutions with 99.9% uptime, supporting 200+ countries and regions."
        : "TaroPay 跨足全球，支付轻松无忧，致力于打造全球最稳定的支付系统，国际支付引领未来。",
    url: `https://taropay.com/${locale}`,
    companyName: "TaroPay",
    logo: "https://taropay.com/logo.png",
  });

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        {/* Favicon 和 Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/globe.svg" type="image/svg+xml" />
        {/* <link rel="apple-touch-icon" href="/icons/icon-192x192.png" /> */}

        {/* Manifest for PWA */}
        {/* <link rel="manifest" href="/manifest.json" /> */}

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* JSON-LD 结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLD),
          }}
        />

        {/* 防止页面加载时滚动 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
              window.scrollTo(0, 0);
            `,
          }}
        />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <TwitterFloatingButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
