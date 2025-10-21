'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedSection from './AnimatedSection';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GlobalCoverage() {
  const t = useTranslations('GlobalCoverage');
  const globeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // 优化地球旋转效果，使其更平滑
    if (globeRef.current) {
      gsap.to(globeRef.current, {
        rotation: 360,
        duration: 30, // 增加到30秒，更慢更自然
        repeat: -1,
        ease: "none"
      });
    }
  }, []);
  
  const countries = [
    { code: '🇰🇪', name: 'Kenya' },
    { code: '🇧🇩', name: 'Bangladesh' },
    { code: '🇮🇩', name: 'Indonesia' },
    { code: '🇧🇷', name: 'Brazil' },
    { code: '🇮🇳', name: 'India' },
    { code: '🇵🇰', name: 'Pakistan' },
    { code: '🇰🇷', name: 'South Korea' },
    { code: '🇹🇭', name: 'Thailand' },
    { code: '🇻🇳', name: 'Vietnam' },
    { code: '🇲🇽', name: 'Mexico' },
  ];

  return (
    <AnimatedSection 
      animationType="fadeUp" 
      className="py-24 bg-gray-800"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="animate-item">
            <div 
              ref={globeRef} 
              className="text-6xl mb-6 inline-block"
              style={{
                animation: 'float-2 4s ease-in-out infinite'
              }}
            >
              🌍
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              {t('title')}
            </h2>
            <p className="text-lg leading-8 text-gray-300">
              {t('description')}
            </p>
          </div>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5">
          {countries.map((country, index) => (
            <div 
              key={index}
              className="animate-item group relative overflow-hidden rounded-lg bg-gray-700/50 p-6 text-center hover:bg-gray-700/70 transition-all duration-200 ease-out border border-gray-600 hover:border-blue-500/50 cursor-pointer hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10"
              style={{
                // 使用CSS动画替代GSAP浮动，性能更好
                animation: `float-${(index % 3) + 1} ${3 + (index % 2)}s ease-in-out infinite`,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200 ease-out">
                {country.code}
              </div>
              <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200 ease-out">
                {country.name}
              </div>
              
              {/* 简化的渐变效果 */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="animate-item">
            <p className="text-base text-gray-400">
              {t('more')}
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}