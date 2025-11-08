"use client";

import { useTranslations } from "next-intl";
import {
  UserPlusIcon,
  ChartBarIcon,
  CodeBracketIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import AnimatedSection from "./AnimatedSection";
import OneStopAnimation from "./OneStopAnimation";

export default function OneStop() {
  const t = useTranslations("OneStop");

  const features = [
    {
      icon: UserPlusIcon,
      titleKey: "freeAccount.title",
      descKey: "freeAccount.description",
    },
    {
      icon: ChartBarIcon,
      titleKey: "statistics.title",
      descKey: "statistics.description",
    },
    {
      icon: CodeBracketIcon,
      titleKey: "apiIntegration.title",
      descKey: "apiIntegration.description",
    },
    {
      icon: GlobeAltIcon,
      titleKey: "globalBusiness.title",
      descKey: "globalBusiness.description",
    },
  ];

  return (
    <AnimatedSection animationType="fadeUp" className="py-24 bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* 标题 */}
        <div className="text-center mb-16 animate-item">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("title")}
          </h2>
        </div>

        {/* 左右布局 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左侧：4个功能点 */}
          <div className="space-y-12 py-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex gap-4 animate-item">
                  <div className="shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                      <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {t(feature.titleKey)}
                    </h3>
                    <p className="text-base text-gray-400">
                      {t(feature.descKey)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 右侧：动画效果 */}
          <div className="relative h-[500px] lg:h-[600px] animate-item">
            <OneStopAnimation />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
