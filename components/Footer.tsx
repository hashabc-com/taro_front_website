"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import AnimatedSection from "./AnimatedSection";

export default function Footer() {
  const t = useTranslations("Footer");

  const navigation = {
    about: [
      { name: t("links.ourServices"), href: "/about#services" },
      { name: t("links.ourAdvantages"), href: "/about#advantages" },
    ],
    products: [
      { name: t("links.statistics"), href: "/products#statistics" },
      { name: t("links.globalSolution"), href: "/products#global" },
      { name: t("links.gateway"), href: "/products#gateway" },
      { name: t("links.riskControl"), href: "/products#riskcontrol" },
      { name: t("links.accounting"), href: "/products#accounting" },
    ],
    api: [
      {
        name: t("links.apiDocs"),
        href: "https://doc.taropay.com/",
        external: true,
      },
    ],
  };

  return (
    <AnimatedSection
      animationType="fadeUp"
      className="bg-gray-900 border-t border-gray-800"
    >
      <footer aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="animate-item space-y-8">
              <div>
                <span className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                  TaroPay
                </span>
                <p className="mt-4 text-sm leading-6 text-gray-300 max-w-md">
                  {t("description")}
                </p>
              </div>
            </div>
            <div className="animate-item mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 xl:col-span-2 xl:mt-0">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  {t("about")}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.about.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  {t("products")}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.products.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  {t("api")}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.api.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                      >
                        {item.name}
                        {item.external && (
                          <svg
                            className="inline-block ml-1 h-3 w-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="animate-item mt-16 border-t border-gray-800 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs leading-5 text-gray-400 text-center">
              {t("copyright")}
            </p>
          </div>
        </div>
      </footer>
    </AnimatedSection>
  );
}
