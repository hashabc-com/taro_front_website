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
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "@/i18n/routing";

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

  useEffect(() => {
    // 确保动画立即开始，但给DOM一点时间来准备
    const startAnimation = () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      // 减慢背景gradient的旋转速度，使其更自然
      if (gradientRef.current) {
        gsap.to(gradientRef.current, {
          rotation: 360,
          duration: 40,
          repeat: -1,
          ease: "none",
        });
      }

      // 优化Hero内容动画，使用更自然的缓动
      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          {
            y: 60,
            opacity: 0,
            scale: 0.95,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.0,
            ease: "power2.out",
          },
        );
      }

      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.6",
        );
      }

      if (buttonsRef.current) {
        tl.fromTo(
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
            ease: "power2.out",
          },
          "-=0.7",
        );
      }

      if (statsRef.current) {
        tl.fromTo(
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
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6",
        );
      }

      // 注释掉视差效果，保持标题和副标题固定
      // if (heroRef.current) {
      //   ScrollTrigger.create({
      //     trigger: heroRef.current,
      //     start: 'top top',
      //     end: 'bottom top',
      //     scrub: 1,
      //     onUpdate: self => {
      //       const progress = self.progress;
      //       if (titleRef.current) {
      //         gsap.to(titleRef.current, {
      //           y: progress * 50,
      //           opacity: 1 - progress * 0.3,
      //           duration: 0.3,
      //           ease: 'none',
      //         });
      //       }
      //       if (subtitleRef.current) {
      //         gsap.to(subtitleRef.current, {
      //           y: progress * 40,
      //           opacity: 1 - progress * 0.5,
      //           duration: 0.3,
      //           ease: 'none',
      //         });
      //       }
      //     },
      //   });
      // }
    };

    // 延迟一点启动动画，确保DOM完全准备好
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

      <div className="mx-auto max-w-7xl pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="text-center">
          <h1
            ref={titleRef}
            className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent sm:text-6xl lg:text-7xl hover:from-blue-300 hover:via-purple-300 hover:to-blue-200 transition-all duration-500 cursor-default opacity-0"
          >
            {t("title")}
          </h1>

          <p
            ref={subtitleRef}
            className="mt-6 text-lg leading-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-clip-text text-transparent max-w-3xl mx-auto opacity-0"
          >
            {t("subtitle")}. {t("description")}.
          </p>

          <div
            ref={buttonsRef}
            className="mt-10 flex items-center justify-center gap-x-6 opacity-0"
          >
            <Link
              href="/products"
              className="group rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 ease-out flex items-center gap-2 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20"
            >
              {t("getstarted")}
              <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-200 ease-out" />
            </Link>
            <Link
              href="/about"
              className="group text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-all duration-200 ease-out flex items-center gap-2 hover:scale-[1.02]"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-600 group-hover:border-white transition-all duration-200 ease-out group-hover:bg-white/5 group-hover:scale-105">
                <PlayIcon className="h-4 w-4 ml-0.5" />
              </div>
              {t("learnmore")}
            </Link>
          </div>
        </div>

        {/* Features grid */}
        <div
          ref={statsRef}
          className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 opacity-0"
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
              title: "<1s",
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
