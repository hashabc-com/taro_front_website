'use client';

import { useTranslations } from 'next-intl';
import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const t = useTranslations('Hero');
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power2.out"
      }
    });

    // 减慢背景gradient的旋转速度，使其更自然
    if (gradientRef.current) {
      gsap.to(gradientRef.current, {
        rotation: 360,
        duration: 40, // 从20秒改为40秒，更慢更自然
        repeat: -1,
        ease: "none"
      });
    }

    // 优化Hero内容动画，使用更自然的缓动
    if (titleRef.current) {
      tl.fromTo(titleRef.current,
        { 
          y: 60, // 减少移动距离
          opacity: 0, 
          scale: 0.95 // 减少缩放幅度
        },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 1.0, // 稍微减少持续时间
          ease: "power2.out" // 使用更柔和的缓动
        }
      );
    }

    if (subtitleRef.current) {
      tl.fromTo(subtitleRef.current,
        { 
          y: 30, // 减少移动距离
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1,
          duration: 0.7,
          ease: "power2.out"
        },
        "-=0.6" // 更早开始，重叠更多
      );
    }

    if (buttonsRef.current) {
      const buttons = buttonsRef.current.querySelectorAll('a');
      tl.fromTo(buttons,
        { 
          y: 20, // 减少移动距离
          opacity: 0,
          scale: 0.95 // 减少缩放幅度
        },
        { 
          y: 0, 
          opacity: 1,
          scale: 1,
          duration: 0.5, // 减少持续时间
          stagger: 0.15, // 减少交错时间
          ease: "power2.out" // 使用更柔和的缓动，而不是back.out
        },
        "-=0.4"
      );
    }

    if (statsRef.current) {
      const statCards = statsRef.current.querySelectorAll('.stat-card');
      tl.fromTo(statCards,
        { 
          y: 40, // 减少移动距离
          opacity: 0,
          scale: 0.95 // 减少缩放幅度
        },
        { 
          y: 0, 
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.08, // 减少交错时间
          ease: "power2.out"
        },
        "-=0.3"
      );
    }

    // 优化视差效果，减少移动幅度
    if (heroRef.current) {
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          if (titleRef.current) {
            gsap.to(titleRef.current, {
              y: progress * 50, // 减少视差移动幅度
              opacity: 1 - progress * 0.3, // 减少透明度变化
              duration: 0.3,
              ease: "none"
            });
          }
          if (subtitleRef.current) {
            gsap.to(subtitleRef.current, {
              y: progress * 40, // 减少视差移动幅度
              opacity: 1 - progress * 0.5, // 减少透明度变化
              duration: 0.3,
              ease: "none"
            });
          }
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
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
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="text-center">
          <h1 
            ref={titleRef}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl hover:text-blue-400 transition-colors duration-500 cursor-default"
          >
            {t('title')}
          </h1>
          
          <p 
            ref={subtitleRef}
            className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto"
          >
            {t('subtitle')}. {t('description')}.
          </p>
          
          <div ref={buttonsRef} className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="group rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 ease-out flex items-center gap-2 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20"
            >
              {t('getstarted')}
              <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-200 ease-out" />
            </a>
            <a
              href="#"
              className="group text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-all duration-200 ease-out flex items-center gap-2 hover:scale-[1.02]"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-600 group-hover:border-white transition-all duration-200 ease-out group-hover:bg-white/5 group-hover:scale-105">
                <PlayIcon className="h-4 w-4 ml-0.5" />
              </div>
              {t('learnmore')}
            </a>
          </div>
        </div>

        {/* Features grid */}
        <div ref={statsRef} className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: '200+', subtitle: t('stats.countries') },
            { title: '99.9%', subtitle: t('stats.uptime') },
            { title: '<1s', subtitle: t('stats.speed') },
            { title: '24/7', subtitle: t('stats.support') },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="stat-card text-center p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-200 ease-out hover:bg-gray-800/70 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer group"
            >
              <div className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200 ease-out">{stat.title}</div>
              <div className="text-sm text-gray-400 mt-1 group-hover:text-gray-300 transition-colors duration-200 ease-out">{stat.subtitle}</div>
            </div>
          ))}
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
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
}