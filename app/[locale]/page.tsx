import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import GlobalCoverage from "@/components/GlobalCoverage";
import Footer from "@/components/Footer";
import { generateMetadata as generateSEOMetadata } from "@/components/SEO";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const isEnglish = locale === "en";

  return generateSEOMetadata({
    title: isEnglish
      ? "TaroPay - Global Payment Gateway | 200+ Countries Supported"
      : "TaroPay - 全球支付网关 | 支持200+国家地区安全快速结算",
    description: isEnglish
      ? "TaroPay offers secure global payment solutions with 99.9% uptime and D0 real-time settlement. Supporting 200+ countries with reliable payment gateway for international business growth."
      : "TaroPay提供安全的全球支付解决方案，99.9%稳定运行，D0实时结算。支持200+国家地区，为国际业务增长提供可靠的支付网关服务。",
    keywords: isEnglish
      ? [
          "global payment gateway",
          "international payments",
          "cross-border payments",
          "real-time settlement",
          "payment processing",
          "fintech",
          "TaroPay",
          "secure payments",
          "multi-currency",
        ]
      : [
          "全球支付网关",
          "国际支付",
          "跨境支付",
          "实时结算",
          "支付处理",
          "金融科技",
          "TaroPay",
          "安全支付",
          "多币种",
        ],
    locale,
    url: `https://taropay.com/${locale}`,
    type: "website",
  });
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // 验证params但不需要使用locale和t
  await params;

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <GlobalCoverage />
      <Features />
      <Footer />
    </div>
  );
}
