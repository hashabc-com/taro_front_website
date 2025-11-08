"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import Globe3D from "./Globe3D";
import statisticsImg from "@/app/assets/statistics.png";
import globalImg from "@/app/assets/global.png";
import gatewayImg from "@/app/assets/gateway.png";
import riskImg from "@/app/assets/risk.png";
import bookkeeping1Img from "@/app/assets/bookkeeping1.png";
import bookkeeping2Img from "@/app/assets/bookkeeping2.png";

export default function Products() {
  const t = useTranslations("Products");

  const products = [
    {
      id: "statistics",
      title: t("statistics.title"),
      subtitle: t("statistics.subtitle"),
      description: t("statistics.description"),
      image: statisticsImg,
      imageAlt: "智能的经营统计分析",
      reverse: false,
      bgColor: "bg-gray-900",
    },
    {
      id: "global",
      title: t("global.title"),
      subtitle: t("global.subtitle"),
      description: t("global.description"),
      image: globalImg,
      imageAlt: "全球支付解决方案",
      reverse: true,
      bgColor: "bg-gray-800",
    },
    {
      id: "gateway",
      title: t("gateway.title"),
      subtitle: t("gateway.subtitle"),
      description: t("gateway.description"),
      image: gatewayImg,
      imageAlt: "便捷接入支付网关",
      reverse: false,
      bgColor: "bg-gray-900",
    },
    {
      id: "riskcontrol",
      title: t("riskcontrol.title"),
      subtitle: t("riskcontrol.subtitle"),
      description: t("riskcontrol.description"),
      image: riskImg,
      imageAlt: "灵活动态的风控模块",
      reverse: true,
      bgColor: "bg-gray-800",
    },
    {
      id: "accounting",
      title: t("accounting.title"),
      subtitle: t("accounting.subtitle"),
      description: t("accounting.description"),
      images: [bookkeeping1Img, bookkeeping2Img],
      imageAlt: "记账更简易",
      reverse: false,
      bgColor: "bg-gray-900",
    },
  ];

  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <AnimatedSection
        animationType="fadeUp"
        className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden min-h-[60vh] flex items-center"
      >
        {/* 3D Globe Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full max-w-2xl">
            <Globe3D />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center animate-item">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t("hero.title")}
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300 max-w-3xl mx-auto">
              {t("hero.description")}
            </p>
            <div className="mt-10">
              <a
                href="#statistics"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              >
                {t("hero.cta")}
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Products Sections */}
      {products.map((product, index) => (
        <section
          key={product.id}
          id={product.id}
          className={`py-20 lg:py-28 ${product.bgColor}`}
        >
          <AnimatedSection
            animationType={product.reverse ? "fadeLeft" : "fadeRight"}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${product.reverse ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Text Content */}
                <div
                  className={`animate-item ${product.reverse ? "lg:order-2" : ""}`}
                >
                  <div className="space-y-6">
                    {product.subtitle && (
                      <div className="inline-block">
                        <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/20 px-4 py-2 text-sm font-semibold text-blue-400 border border-blue-500/30">
                          <svg
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {product.subtitle}
                        </span>
                      </div>
                    )}
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                      {product.title}
                    </h2>
                    <p className="text-lg leading-8 text-gray-300">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Image Content */}
                <div
                  className={`animate-item ${product.reverse ? "lg:order-1" : ""}`}
                >
                  {product.images ? (
                    // Multiple images for accounting section
                    <div className="grid grid-cols-2 gap-4">
                      {product.images.map((img, idx) => (
                        <div
                          key={idx}
                          className="relative rounded-2xl overflow-hidden transition-all duration-300"
                        >
                          <Image
                            src={img}
                            alt={`${product.imageAlt} ${idx + 1}`}
                            className="w-full h-auto"
                            priority={index === 0}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Single image
                    <div className="relative rounded-2xl overflow-hidden transition-all duration-300">
                      <Image
                        src={product.image!}
                        alt={product.imageAlt}
                        className="w-full h-auto"
                        priority={index === 0}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>
      ))}
    </div>
  );
}
