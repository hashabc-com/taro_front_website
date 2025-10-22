"use client";

import { useState, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
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
          <Link href="/" className="-m-1.5 p-1.5">
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
                className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group"
              >
                {item.name}
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
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
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
              <Link href="/" className="-m-1.5 p-1.5">
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
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200"
                        style={{
                          animation: isClosing
                            ? "none"
                            : `slideInLeft 0.4s ease-out ${index * 0.1}s both`,
                        }}
                        onClick={handleMobileMenuClose}
                      >
                        {item.name}
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
                      </a>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200"
                        style={{
                          animation: isClosing
                            ? "none"
                            : `slideInLeft 0.4s ease-out ${index * 0.1}s both`,
                        }}
                        onClick={handleMobileMenuClose}
                      >
                        {item.name}
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
