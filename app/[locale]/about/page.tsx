import Header from "@/components/Header";
import About from "@/components/About";
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
      ? "About TaroPay - Leading Fintech Payment Solutions Provider"
      : "关于TaroPay - 领先的金融科技支付解决方案提供商",
    description: isEnglish
      ? "Discover TaroPay's mission to revolutionize global payments. We provide secure, reliable payment solutions for 200+ countries with cutting-edge technology, exceptional service, and 99.9% uptime guarantee."
      : "了解TaroPay革新全球支付的使命。我们为200+国家地区提供安全可靠的支付解决方案，采用前沿技术和卓越服务，保证99.9%稳定运行。",
    keywords: isEnglish
      ? [
          "about TaroPay",
          "payment company",
          "fintech company",
          "global payment solutions",
          "payment technology",
          "company history",
          "payment innovation",
        ]
      : [
          "关于TaroPay",
          "支付公司",
          "金融科技公司",
          "全球支付解决方案",
          "支付技术",
          "公司历史",
          "支付创新",
        ],
    locale,
    url: `https://taropay.com/${locale}/about`,
    type: "website",
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // 验证params但不需要使用locale
  await params;

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-16">
        <About />
      </div>
      <Footer />
    </div>
  );
}
