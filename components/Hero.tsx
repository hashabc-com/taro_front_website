"use client";

import { useTranslations } from "next-intl";
import {
  ArrowRightIcon,
  PlayIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  BoltIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import AdminSvg from "@/app/assets/admin.svg";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const t = useTranslations("Hero");
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const [titleText, setTitleText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  const fullTitle = t("title");
  const fullSubtitle = `${t("subtitle")}. ${t("description")}.`;

  // 页面加载时滚动到顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let titleInterval: NodeJS.Timeout;
    let restartTimeout: NodeJS.Timeout;

    const startTyping = () => {
      setIsTyping(true);
      setTitleText("");

      let titleIndex = 0;

      // 标题打字 - 加快速度到 60ms
      titleInterval = setInterval(() => {
        if (titleIndex < fullTitle.length) {
          setTitleText(fullTitle.slice(0, titleIndex + 1));
          titleIndex++;
        } else {
          clearInterval(titleInterval);
          setIsTyping(false);

          // 打完后等待 3 秒，然后重新开始
          restartTimeout = setTimeout(() => {
            startTyping();
          }, 3000);
        }
      }, 60);
    };

    // 启动打字机效果
    startTyping();

    return () => {
      clearInterval(titleInterval);
      clearTimeout(restartTimeout);
    };
  }, [fullTitle, fullSubtitle]);

  useEffect(() => {
    // 光标闪烁效果 - 只在打字时闪烁
    if (!isTyping) {
      setShowCursor(true);
      return;
    }

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [isTyping]);

  useEffect(() => {
    // 背景gradient旋转动画
    const startAnimation = () => {
      if (gradientRef.current) {
        gsap.to(gradientRef.current, {
          rotation: 360,
          duration: 40,
          repeat: -1,
          ease: "none",
        });
      }

      // 副标题动画 - 透明-平移-显示效果
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          {
            x: -30,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            delay: 0.8, // 减少延迟
            ease: "power2.out",
          },
        );
      }

      // 按钮动画
      if (buttonsRef.current) {
        gsap.fromTo(
          buttonsRef.current,
          {
            y: 30,
            opacity: 0,
            scale: 0.95,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: 1.2, // 减少延迟
            ease: "power2.out",
          },
        );
      }

      // 图片动画
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          {
            x: 100,
            opacity: 0,
            scale: 0.9,
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: 0.3, // 减少延迟，让图片更早出现
            ease: "power2.out",
          },
        );
      }

      // 统计数据动画
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current,
          {
            y: 50,
            opacity: 0,
            scale: 0.95,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: 1.5, // 减少延迟
            ease: "power2.out",
          },
        );
      }
    };

    const timeoutId = setTimeout(startAnimation, 50);

    return () => {
      clearTimeout(timeoutId);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={heroRef} className="relative isolate bg-gray-900 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          ref={gradientRef}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-purple-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-28 pb-24 sm:pb-32">
        {/* 左右布局 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左侧内容 */}
          <div className="text-left max-w-4xl">
            {/* sm:h-40 lg:h-44 */}
            <div className="h-32 overflow-hidden">
              <h1
                ref={titleRef}
                className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent sm:text-6xl lg:text-6xl"
              >
                {titleText}
                {isTyping &&
                  titleText.length > 0 &&
                  titleText.length < fullTitle.length && (
                    <span className="inline-block w-1 h-[0.8em] bg-blue-400 ml-1 animate-pulse"></span>
                  )}
              </h1>
            </div>

            <div className="h-32 mt-3 overflow-hidden">
              <p
                ref={subtitleRef}
                className="text-lg leading-8 text-gray-300 max-w-2xl opacity-0"
              >
                {fullSubtitle}
              </p>
            </div>

            <div
              ref={buttonsRef}
              className="mt-10 flex items-center gap-x-6 opacity-0"
            >
              <Link
                href="/products"
                title={t("titles.getstarted")}
                className="group rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 ease-out flex items-center gap-2 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20"
              >
                {t("getstarted")}
                <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-200 ease-out" />
              </Link>
              <Link
                href="/about"
                title={t("titles.learnmore")}
                className="group text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-all duration-200 ease-out flex items-center gap-2 hover:scale-[1.02]"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-600 group-hover:border-white transition-all duration-200 ease-out group-hover:bg-white/5 group-hover:scale-105">
                  <PlayIcon className="h-4 w-4 ml-0.5" />
                </div>
                {t("learnmore")}
              </Link>
            </div>
          </div>

          {/* 右侧产品图 */}
          <div
            ref={imageRef}
            className="relative lg:h-[600px] h-[400px] opacity-0"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative w-full h-full max-w-[600px]">
                <Image
                  src={AdminSvg}
                  alt="TaroPay Admin Dashboard"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
                {/* 光晕效果 */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 opacity-0"
        >
          {[
            {
              title: "200+",
              subtitle: t("stats.countries"),
              icon: GlobeAltIcon,
              hoverColor: "group-hover:text-blue-400",
              borderColor: "bg-blue-500",
            },
            {
              title: "99.9%",
              subtitle: t("stats.uptime"),
              icon: ShieldCheckIcon,
              hoverColor: "group-hover:text-green-400",
              borderColor: "bg-green-500",
            },
            {
              title: "<10ms",
              subtitle: t("stats.speed"),
              icon: BoltIcon,
              hoverColor: "group-hover:text-yellow-400",
              borderColor: "bg-yellow-500",
            },
            {
              title: "24/7",
              subtitle: t("stats.support"),
              icon: ChatBubbleLeftRightIcon,
              hoverColor: "group-hover:text-purple-400",
              borderColor: "bg-purple-500",
            },
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="stat-card group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600 transition-all duration-300 ease-out hover:bg-gray-800/70 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/20 cursor-pointer"
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gray-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative p-6 text-center">
                  {/* Icon */}
                  <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-gray-700/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-gray-400 group-hover:text-white transition-all duration-300" />
                  </div>

                  {/* Title */}
                  <div
                    className={`text-3xl font-bold text-white mb-2 ${stat.hoverColor} transition-all duration-300`}
                  >
                    {stat.title}
                  </div>

                  {/* Subtitle */}
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-medium">
                    {stat.subtitle}
                  </div>
                </div>

                {/* Animated border */}
                <div
                  className={`absolute bottom-0 left-0 h-1 ${stat.borderColor} w-0 group-hover:w-full transition-all duration-500 ease-out`}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-purple-600 to-blue-600 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
