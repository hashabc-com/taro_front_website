import { Metadata } from "next";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  url?: string;
  locale?: string;
  type?: "website" | "article";
}

export function generateMetadata({
  title = "TaroPay - 全球支付解决方案 | 200+国家安全快速支付网关",
  description = "TaroPay提供稳定可靠的全球支付解决方案，支持200+国家和地区，99.9%在线保证，D0实时结算。专业的跨境支付网关服务，为企业提供安全、快速、便捷的国际支付体验，助力全球业务发展。",
  keywords = [
    "支付",
    "全球支付",
    "跨境支付",
    "支付网关",
    "金融科技",
    "TaroPay",
    "payment",
    "global payment",
    "fintech",
  ],
  ogImage = "/og-image.png",
  url = "https://taropay.com",
  locale = "zh-CN",
  type = "website",
}: SEOProps): Metadata {
  const siteTitle = title.includes("TaroPay") ? title : `${title} | TaroPay`;

  // 从URL中提取路径部分（去除基础域名和语言前缀）
  const baseUrl = "https://taropay.com";
  let pagePath = "";

  if (url.startsWith(baseUrl)) {
    const urlPath = url.replace(baseUrl, "");
    // 移除语言前缀 (/zh-CN 或 /en)
    pagePath = urlPath.replace(/^\/(zh-CN|en)/, "");
    // 如果pagePath为空，表示是首页
    if (!pagePath) {
      pagePath = "";
    }
  }

  // 确保canonical URL使用当前完整URL
  const canonicalUrl = url;

  return {
    title: siteTitle,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: "TaroPay" }],
    creator: "TaroPay",
    publisher: "TaroPay",

    // Open Graph
    openGraph: {
      type,
      locale,
      url,
      title: siteTitle,
      description,
      siteName: "TaroPay",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    // Twitter
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description,
      images: [ogImage],
      creator: "@TaroPay",
    },

    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    // Verification
    verification: {
      google: "your-google-verification-code",
      // yandex: "your-yandex-verification-code",
      // yahoo: "your-yahoo-verification-code",
    },

    // Category
    category: "technology",

    // Alternates for multi-language
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "zh-CN": `${baseUrl}/zh-CN${pagePath}`,
        en: `${baseUrl}/en${pagePath}`,
      },
    },

    // Additional metadata
    other: {
      "theme-color": "#1e40af",
      "color-scheme": "dark",
    },
  };
}

// Schema.org structured data
export function generateJSONLD(
  props: SEOProps & {
    companyName?: string;
    logo?: string;
    address?: string;
    phone?: string;
    email?: string;
  },
) {
  const {
    title = "TaroPay",
    description = "TaroPay 跨足全球，支付轻松无忧，致力于打造全球最稳定的支付系统，国际支付引领未来。",
    url = "https://taropay.com",
    companyName = "TaroPay",
    logo = "/logo.png",
    address,
    phone,
    email,
  } = props;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyName,
    description,
    url,
    logo,
    ...(address && { address }),
    ...(phone && { telephone: phone }),
    ...(email && { email }),
    sameAs: [
      "https://twitter.com/TaroPay",
      // Add other social media URLs
    ],
    foundingDate: "2023",
    industry: "Financial Technology",
    knowsAbout: [
      "Global Payments",
      "Cross-border Payments",
      "Payment Gateway",
      "Financial Technology",
      "Digital Payments",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: title,
    description,
    url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return [organizationSchema, websiteSchema];
}
