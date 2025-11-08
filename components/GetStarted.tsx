"use client";

import { useTranslations } from "next-intl";
import AnimatedSection from "./AnimatedSection";
import GetStartedAnimation from "@/components/GetStartedAnimation";

export default function GetStarted() {
  const t = useTranslations("GetStarted");

  const steps = [
    {
      number: 1,
      titleKey: "step1.title",
      descKey: "step1.description",
    },
    {
      number: 2,
      titleKey: "step2.title",
      descKey: "step2.description",
    },
    {
      number: 3,
      titleKey: "step3.title",
      descKey: "step3.description",
    },
    {
      number: 4,
      titleKey: "step4.title",
      descKey: "step4.description",
    },
  ];

  return (
    <AnimatedSection animationType="fadeUp" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* 标题 */}
        <div className="text-center mb-16 animate-item">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t("title")}
          </h2>
        </div>

        {/* 左右布局 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* 左侧：4个步骤 */}
          <div className="space-y-20 pt-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6 animate-item">
                {/* 步骤数字 */}
                <div className="shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                {/* 步骤内容 */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {t(step.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 右侧：流程图动画 */}
          <div className="relative h-[600px] lg:h-[700px] animate-item">
            <GetStartedAnimation />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
