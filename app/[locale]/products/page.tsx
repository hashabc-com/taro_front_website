import Header from "@/components/Header";
import Products from "@/components/Products";
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
      ? "TaroPay Products - Payment Gateway, Risk Control & API Solutions"
      : "TaroPay产品服务 - 支付网关、风控系统与API解决方案",
    description: isEnglish
      ? "Explore TaroPay's comprehensive payment products: smart analytics, global payment solutions, easy gateway integration, dynamic risk control, simplified accounting, and multi-language API support for businesses worldwide."
      : "探索TaroPay全面的支付产品服务：智能数据分析、全球支付解决方案、便捷网关接入、动态风控模块、简易记账系统和多语言API支持，助力企业全球业务发展。",
    keywords: isEnglish
      ? [
          "payment gateway",
          "payment products",
          "risk control",
          "payment analytics",
          "API integration",
          "payment processing",
          "merchant services",
          "fintech solutions",
        ]
      : [
          "支付网关",
          "支付产品",
          "风险控制",
          "支付分析",
          "API集成",
          "支付处理",
          "商户服务",
          "金融科技解决方案",
        ],
    locale,
    url: `https://taropay.com/${locale}/products`,
    type: "website",
  });
}

export default async function ProductsPage({
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
        <Products />
      </div>
      <Footer />
    </div>
  );
}
