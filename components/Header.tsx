'use client';

import { useState, useEffect, useRef } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocaleSwitcher from './LocaleSwitcher';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLSpanElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('Nav');

  useEffect(() => {
    if (!headerRef.current) return;

    // Header entrance animation
    gsap.fromTo(headerRef.current, 
      { 
        y: -100, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1,
        ease: "power3.out"
      }
    );

    // Logo animation
    if (logoRef.current) {
      gsap.fromTo(logoRef.current,
        { scale: 0.8, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.8,
          delay: 0.3,
          ease: "back.out(1.7)"
        }
      );
    }

    // Navigation items stagger animation
    if (navRef.current) {
      const navItems = navRef.current.querySelectorAll('a');
      gsap.fromTo(navItems,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.5,
          stagger: 0.1,
          ease: "power2.out"
        }
      );
    }

    // Header scroll effect - 移除会导致间距的缩放动画
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
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const navigation = [
    { name: t('home'), href: '#' },
    { name: t('features'), href: '#features' },
    { name: t('solutions'), href: '#solutions' },
    { name: t('about'), href: '#about' },
    { name: t('contact'), href: '#contact' },
  ];

  return (
    <header 
      ref={headerRef}
      className="bg-gray-900/80 backdrop-blur-sm fixed top-0 left-0 right-0 w-full z-[9999] border-b border-gray-800 transition-all duration-300"
      style={{ margin: 0, padding: 0 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span 
              ref={logoRef}
              className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300"
            >
              TaroPay
            </span>
          </a>
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
          {navigation.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
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
        <div className="lg:hidden">
          <div className="fixed inset-0 z-[9998]" />
          <div className="fixed inset-y-0 right-0 z-[9999] w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="text-2xl font-bold text-white">TaroPay</span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-800 hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6 space-y-4">
                  <div className="flex justify-center">
                    <LocaleSwitcher />
                  </div>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-800 hover:text-white text-center"
                  >
                    {t('signin')}
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg bg-blue-600 px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-blue-500 text-center"
                  >
                    {t('getstarted')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}