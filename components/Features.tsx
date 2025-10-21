'use client';

import { 
  BoltIcon, 
  ShieldCheckIcon, 
  CurrencyDollarIcon, 
  ClockIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Features() {
  const t = useTranslations('Features');
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Section entrance animation
    if (titleRef.current && subtitleRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      tl.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      )
      .fromTo(subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      );
    }

      // Feature cards animation - 优化性能
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.feature-card');
        
        gsap.fromTo(cards,
          { 
            y: 40, // 减少移动距离
            opacity: 0,
            scale: 0.95 // 减少缩放幅度
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6, // 减少持续时间
            stagger: 0.1, // 减少交错延迟
            ease: "power2.out", // 使用更柔和的缓动
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%", // 稍微提前触发
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // 优化悬停动画
        cards.forEach((card) => {
          const icon = card.querySelector('.feature-icon');
          
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -5, // 减少移动距离
              scale: 1.02, // 减少缩放幅度
              duration: 0.2, // 更快的响应
              ease: "power2.out"
            });
            
            if (icon) {
              gsap.to(icon, {
                rotation: 180, // 减少旋转角度
                scale: 1.05, // 减少缩放幅度
                duration: 0.3,
                ease: "power2.out"
              });
            }
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              duration: 0.2,
              ease: "power2.out"
            });
            
            if (icon) {
              gsap.to(icon, {
                rotation: 0,
                scale: 1,
                duration: 0.2,
                ease: "power2.out"
              });
            }
          });
        });
      }    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  const features = [
    {
      icon: BoltIcon,
      title: t('convenience.title'),
      description: t('convenience.description'),
    },
    {
      icon: ClockIcon,
      title: t('rapidity.title'),
      description: t('rapidity.description'),
    },
    {
      icon: ShieldCheckIcon,
      title: t('security.title'),
      description: t('security.description'),
    },
    {
      icon: CurrencyDollarIcon,
      title: t('cost.title'),
      description: t('cost.description'),
    },
    {
      icon: GlobeAltIcon,
      title: t('global.title'),
      description: t('global.description'),
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: t('response.title'),
      description: t('response.description'),
    },
  ];

  return (
    <section ref={sectionRef} id="features" className="py-24 bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 ref={titleRef} className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t('title')}
          </h2>
          <p ref={subtitleRef} className="mt-6 text-lg leading-8 text-gray-300">
            {t('subtitle')}
          </p>
        </div>
        
        <div ref={gridRef} className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group relative overflow-hidden rounded-2xl bg-gray-800/50 p-8 hover:bg-gray-800/70 transition-all duration-200 ease-out border border-gray-700 hover:border-blue-500/50 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="feature-icon flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-500 transition-all duration-200 ease-out">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="feature-title text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-200 ease-out">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-300 leading-7 group-hover:text-gray-200 transition-colors duration-200 ease-out">
                {feature.description}
              </p>
              
              {/* 简化的边框效果 */}
              <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out pointer-events-none" />
              
              {/* 简化的装饰点 */}
              <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-200 ease-out"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}