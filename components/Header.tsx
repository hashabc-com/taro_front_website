"use client";

import { useState, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, usePathname } from "@/i18n/routing";
import LocaleSwitcher from "./LocaleSwitcher";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Navigation item type
interface NavigationItem {
  name: string;
  href: string;
  external?: boolean;
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLSpanElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const t = useTranslations("Nav");

  // Handle mobile menu close with animation
  const handleMobileMenuClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setIsClosing(false);
    }, 300); // Match animation duration
  };

  useEffect(() => {
    if (!headerRef.current) return;

    // 只保留Header滚动效果的背景模糊
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        if (headerRef.current) {
          const progress = self.progress;
          const backdrop = Math.min(progress * 2, 1); // Increase backdrop blur

          // 只保留背景模糊效果，移除缩放
          headerRef.current.style.backdropFilter = `blur(${8 + backdrop * 12}px)`;
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const navigation: NavigationItem[] = [
    { name: t("home"), href: "/" },
    { name: t("features"), href: "/products" },
    { name: t("about"), href: "/about" },
    { name: t("apidoc"), href: "https://doc.taropay.com/", external: true },
  ];

  // 检查是否为当前页面
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // 根据导航项生成title属性
  const getLinkTitle = (item: NavigationItem) => {
    if (item.external) {
      if (item.href.includes("doc.taropay.com")) {
        return t("titles.apidoc");
      }
    }

    // 内部链接的title
    switch (item.href) {
      case "/":
        return t("titles.home");
      case "/products":
        return t("titles.features");
      case "/about":
        return t("titles.about");
      default:
        return `TaroPay - ${item.name}`;
    }
  };

  return (
    <header
      ref={headerRef}
      className="bg-gray-900/80 backdrop-blur-sm fixed top-0 left-0 right-0 w-full border-b border-gray-800 transition-all duration-300"
      style={{ margin: 0, padding: 0, zIndex: 9000 }}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5" title={t("titles.logo")}>
            <span
              ref={logoRef}
              className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300"
            >
              TaroPay
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12" ref={navRef}>
          {navigation.map((item) =>
            item.external ? (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                title={getLinkTitle(item)}
                className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group px-4 py-2"
              >
                {/* 纯光照效果 - hover状态 */}
                <div className="absolute inset-0 -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {/* 主光源 - 从上方照射 */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-blue-400 rounded-full blur-xl opacity-30"></div>
                  {/* 辅助光源 - 从后方照射 */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-10 bg-purple-300 rounded-full blur-2xl opacity-20"></div>
                  {/* 近距离光晕 */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-6 bg-white rounded-full blur-lg opacity-10"></div>
                </div>

                <span className="relative z-10 drop-shadow-sm group-hover:drop-shadow-lg group-hover:text-shadow-lg transition-all duration-300">
                  {item.name}
                </span>
                <svg
                  className="inline-block ml-1 h-3 w-3 relative z-10 drop-shadow-sm group-hover:drop-shadow-lg"
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
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                title={getLinkTitle(item)}
                className={`text-sm font-semibold leading-6 transition-all duration-300 hover:scale-105 relative group px-4 py-2 ${
                  isActive(item.href)
                    ? "text-white drop-shadow-lg"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {/* 纯光照效果 - hover状态 */}
                <div className="absolute inset-0 -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {/* 主光源 - 从上方照射 */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-blue-400 rounded-full blur-xl opacity-30"></div>
                  {/* 辅助光源 - 从后方照射 */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-10 bg-purple-300 rounded-full blur-2xl opacity-20"></div>
                  {/* 近距离光晕 */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-6 bg-white rounded-full blur-lg opacity-10"></div>
                </div>

                {/* 选中状态的纯光照效果 */}
                {isActive(item.href) && (
                  <div className="absolute inset-0 -z-20">
                    {/* 持续的主光源 */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-blue-400 rounded-full blur-xl opacity-25"></div>
                    {/* 持续的辅助光源 */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-10 bg-purple-300 rounded-full blur-2xl opacity-15"></div>
                    {/* 持续的近距离光晕 */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-6 bg-white rounded-full blur-lg opacity-8"></div>
                  </div>
                )}

                <span
                  className={`relative z-10 transition-all duration-300 ${
                    isActive(item.href)
                      ? "drop-shadow-lg"
                      : "drop-shadow-sm group-hover:drop-shadow-lg"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ),
          )}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 lg:items-center">
          <LocaleSwitcher />
          {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors">
            {t('signin')}
          </a>
          <a
            href="#"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
          >
            {t('getstarted')}
          </a> */}
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0" style={{ zIndex: 9998 }}>
          {/* Background overlay with fade animation */}
          <div
            className="fixed inset-0 transition-opacity duration-300 ease-out"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              animation: isClosing
                ? "fadeOut 0.3s ease-out"
                : "fadeIn 0.3s ease-out",
            }}
            onClick={handleMobileMenuClose}
          />

          {/* Menu panel with slide animation */}
          <div
            className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-xl transition-transform duration-300 ease-out"
            style={{
              zIndex: 9999,
              maxWidth: "100vw",
              height: "100vh",
              top: 0,
              right: 0,
              animation: isClosing
                ? "slideOutRight 0.3s ease-out"
                : "slideInRight 0.3s ease-out",
            }}
          >
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" title={t("titles.logo")}>
                <span className="text-2xl font-bold text-white">TaroPay</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400 hover:text-white transition-colors duration-200"
                onClick={handleMobileMenuClose}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6">
                <div className="space-y-2 py-6">
                  {navigation.map((item, index) =>
                    item.external ? (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={getLinkTitle(item)}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:text-white transition-all duration-200 relative group"
                        style={{
                          animation: isClosing
                            ? "none"
                            : `slideInLeft 0.4s ease-out ${index * 0.1}s both`,
                        }}
                        onClick={handleMobileMenuClose}
                      >
                        {/* 移动端纯光照效果 */}
                        <div className="absolute inset-0 -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          {/* 主光源 - 从左上方照射 */}
                          <div className="absolute -top-4 -left-2 w-14 h-14 bg-blue-400 rounded-full blur-xl opacity-25"></div>
                          {/* 辅助光源 */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-8 bg-purple-300 rounded-full blur-xl opacity-15"></div>
                        </div>

                        <span className="relative z-10 drop-shadow-sm group-hover:drop-shadow-lg">
                          {item.name}
                        </span>
                        <svg
                          className="inline-block ml-1 h-3 w-3 relative z-10 drop-shadow-sm group-hover:drop-shadow-lg"
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
                      </a>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        title={getLinkTitle(item)}
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-all duration-200 relative group ${
                          isActive(item.href)
                            ? "text-white drop-shadow-lg"
                            : "text-gray-300 hover:text-white"
                        }`}
                        style={{
                          animation: isClosing
                            ? "none"
                            : `slideInLeft 0.4s ease-out ${index * 0.1}s both`,
                        }}
                        onClick={handleMobileMenuClose}
                      >
                        {/* 移动端纯光照效果 - hover状态 */}
                        <div className="absolute inset-0 -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          {/* 主光源 - 从左上方照射 */}
                          <div className="absolute -top-4 -left-2 w-14 h-14 bg-blue-400 rounded-full blur-xl opacity-25"></div>
                          {/* 辅助光源 */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-8 bg-purple-300 rounded-full blur-xl opacity-15"></div>
                        </div>

                        {/* 选中状态的纯光照效果 */}
                        {isActive(item.href) && (
                          <div className="absolute inset-0 -z-20">
                            {/* 持续的主光源 */}
                            <div className="absolute -top-4 -left-2 w-14 h-14 bg-blue-400 rounded-full blur-xl opacity-20"></div>
                            {/* 持续的辅助光源 */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-8 bg-purple-300 rounded-full blur-xl opacity-12"></div>
                          </div>
                        )}

                        <span
                          className={`relative z-10 transition-all duration-300 ${
                            isActive(item.href)
                              ? "drop-shadow-lg"
                              : "drop-shadow-sm group-hover:drop-shadow-lg"
                          }`}
                        >
                          {item.name}
                        </span>
                      </Link>
                    ),
                  )}
                </div>

                {/* LocaleSwitcher placed in the center */}
                <div className="py-6 border-t border-gray-500/10">
                  <div
                    className="flex justify-center"
                    style={{
                      animation: isClosing
                        ? "none"
                        : `slideInLeft 0.4s ease-out ${navigation.length * 0.1}s both`,
                    }}
                  >
                    <LocaleSwitcher />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
