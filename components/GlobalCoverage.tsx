"use client";

import { useTranslations } from "next-intl";
import { useRef, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

// 导入国家图片
import bangladeshImg from "@/app/assets/bangladesh.png";
import brazilImg from "@/app/assets/brazil.png";
import indiaImg from "@/app/assets/india.png";
import indonesiaImg from "@/app/assets/indonesia.png";
import kenyaImg from "@/app/assets/kenya.png";
import koreaImg from "@/app/assets/korea.png";
import mexicoImg from "@/app/assets/mexico.png";
import pakistanImg from "@/app/assets/pakistan.png";
import thailandImg from "@/app/assets/thailand.png";
import vietnamImg from "@/app/assets/vietnam.png";

export default function GlobalCoverage() {
  const t = useTranslations("GlobalCoverage");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);

  const countryImages = [
    { name: "Bangladesh", image: bangladeshImg },
    { name: "Brazil", image: brazilImg },
    { name: "India", image: indiaImg },
    { name: "Indonesia", image: indonesiaImg },
    { name: "Kenya", image: kenyaImg },
    { name: "South Korea", image: koreaImg },
    { name: "Mexico", image: mexicoImg },
    { name: "Pakistan", image: pakistanImg },
    { name: "Thailand", image: thailandImg },
    { name: "Vietnam", image: vietnamImg },
  ];

  // 复制一份用于无缝循环
  const allImages = [...countryImages, ...countryImages];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const scrollSpeed = 1.5; // 滚动速度，数值越大越快

    const scroll = () => {
      // 只有在未暂停时才滚动
      if (!isPausedRef.current) {
        scrollPosition += scrollSpeed;

        // 当滚动到一半时重置（因为我们复制了数组）
        if (scrollPosition >= container.scrollWidth / 2) {
          scrollPosition = 0;
        }

        container.scrollLeft = scrollPosition;
      }
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  return (
    <AnimatedSection animationType="fadeUp" className="py-24 bg-gray-800">
      {/* 标题区域 - 保持在容器内 */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            {t("title")}
          </h2>
          <p className="text-lg leading-8 text-gray-300">{t("description")}</p>
        </div>
      </div>

      {/* 自动滚动容器 - 全宽 */}
      <div className="relative overflow-hidden w-full">
        <div ref={scrollContainerRef} className="flex gap-8 overflow-x-hidden">
          {allImages.map((country, index) => (
            <div
              key={`${country.name}-${index}`}
              className="flex-none cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src={country.image}
                alt={country.name}
                className="w-[500px] h-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 底部文字 - 保持在容器内 */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
        <div className="text-center">
          <p className="text-base text-gray-400">{t("more")}</p>
        </div>
      </div>
    </AnimatedSection>
  );
}
