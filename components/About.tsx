"use client";
import { useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import {
  CogIcon,
  ClockIcon,
  ShieldCheckIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeAltIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const advantagesRef = useRef<HTMLDivElement>(null);
  const goalsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("About");

  useEffect(() => {
    if (!sectionRef.current) return;

    // 使用CSS类来触发动画
    const timer = setTimeout(() => {
      // 触发各个部分的动画
      if (heroRef.current) {
        heroRef.current.classList.remove("opacity-0", "translate-y-5");
        heroRef.current.classList.add("opacity-100", "translate-y-0");
      }

      if (advantagesRef.current) {
        const cards = advantagesRef.current.querySelectorAll(".advantage-card");
        cards.forEach((card, index) => {
          setTimeout(() => {
            (card as HTMLElement).classList.remove(
              "opacity-0",
              "translate-y-4",
            );
            (card as HTMLElement).classList.add("opacity-100", "translate-y-0");
          }, index * 100);
        });
      }

      if (goalsRef.current) {
        const cards = goalsRef.current.querySelectorAll(".goal-card");
        cards.forEach((card, index) => {
          setTimeout(() => {
            (card as HTMLElement).classList.remove(
              "opacity-0",
              "translate-y-4",
            );
            (card as HTMLElement).classList.add("opacity-100", "translate-y-0");
          }, index * 150);
        });
      }

      if (contactRef.current) {
        contactRef.current.classList.remove("opacity-0", "translate-y-5");
        contactRef.current.classList.add("opacity-100", "translate-y-0");
      }
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const advantages = [
    {
      icon: CogIcon,
      title: t("advantages.convenient.title"),
      description: t("advantages.convenient.description"),
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: ClockIcon,
      title: t("advantages.settlement.title"),
      description: t("advantages.settlement.description"),
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: ShieldCheckIcon,
      title: t("advantages.security.title"),
      description: t("advantages.security.description"),
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: ChatBubbleBottomCenterTextIcon,
      title: t("advantages.service.title"),
      description: t("advantages.service.description"),
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const goals = [
    {
      icon: GlobeAltIcon,
      title: t("goals.global.title"),
      description: t("goals.global.description"),
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: MapPinIcon,
      title: t("goals.local.title"),
      description: t("goals.local.description"),
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 sm:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 transform-gpu"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Section */}
        <div
          id="services"
          ref={heroRef}
          className="opacity-0 translate-y-5 transition-all duration-500 ease-out mx-auto max-w-4xl text-center mb-20 scroll-mt-24"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8">
            {t("hero.title")}
          </h1>
          <p className="text-xl leading-8 text-gray-300 mb-6">
            {t("hero.description")}
          </p>
          <p className="text-lg leading-8 text-gray-400">{t("hero.content")}</p>
        </div>

        {/* Advantages Section */}
        <div id="advantages" className="mb-20 scroll-mt-24">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              {t("advantages.title")}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {t("advantages.subtitle")}
            </p>
          </div>

          <div
            ref={advantagesRef}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="advantage-card opacity-0 translate-y-4 transition-all duration-300 ease-out group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 hover:transform hover:scale-[1.02] will-change-transform"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${advantage.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div
                  className={`relative inline-flex p-3 rounded-lg bg-gradient-to-r ${advantage.gradient} shadow-lg group-hover:shadow-xl transition-shadow duration-300 mb-4`}
                >
                  <advantage.icon className="h-6 w-6 text-white" />
                </div>

                <div className="relative">
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300 mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-sm">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Goals Section */}
        <div className="mb-20">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t("goals.title")}
            </h2>
          </div>

          <div ref={goalsRef} className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {goals.map((goal, index) => (
              <div
                key={index}
                className="goal-card opacity-0 translate-y-4 transition-all duration-300 ease-out group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 hover:transform hover:scale-[1.02] will-change-transform"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${goal.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div
                  className={`relative inline-flex p-4 rounded-lg bg-gradient-to-r ${goal.gradient} shadow-lg group-hover:shadow-xl transition-shadow duration-300 mb-6`}
                >
                  <goal.icon className="h-8 w-8 text-white" />
                </div>

                <div className="relative">
                  <h3 className="text-2xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300 mb-4">
                    {goal.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {goal.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Plans Section */}
        <div className="mb-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-8">
              {t("future.title")}
            </h2>
            <p className="text-lg leading-8 text-gray-300">
              {t("future.description")}
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div
          ref={contactRef}
          className="opacity-0 translate-y-5 transition-all duration-500 ease-out"
        >
          <div className="mx-auto max-w-4xl text-center rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-12 backdrop-blur-sm border border-gray-700/50">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              {t("contact.title")}
            </h2>
            <p className="text-lg leading-8 text-gray-300 mb-8">
              {t("contact.description")}
            </p>
            <div
              onClick={() =>
                window.open(
                  "https://t.me/Young168l",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
              className="inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <span className="text-lg font-semibold">
                {t("contact.form.submit")}
              </span>
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
