'use client';

import { useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { 
  ChartBarIcon, 
  GlobeAltIcon, 
  CreditCardIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('Products');

  useEffect(() => {
    if (!sectionRef.current) return;

    // 使用CSS类来触发动画，避免GSAP的复杂性
    const timer = setTimeout(() => {
      // 触发标题动画
      if (titleRef.current) {
        titleRef.current.classList.remove('opacity-0', 'translate-y-5');
        titleRef.current.classList.add('opacity-100', 'translate-y-0');
      }

      // 触发卡片动画
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.product-card');
        cards.forEach((card) => {
          (card as HTMLElement).classList.remove('opacity-0', 'translate-y-4');
          (card as HTMLElement).classList.add('opacity-100', 'translate-y-0');
        });
      }
    }, 100); // 短暂延迟确保DOM准备好

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const products = [
    {
      id: 'statistics',
      icon: ChartBarIcon,
      title: t('statistics.title'),
      description: t('statistics.description'),
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'global',
      icon: GlobeAltIcon,
      title: t('global.title'),
      description: t('global.description'),
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'gateway',
      icon: CreditCardIcon,
      title: t('gateway.title'),
      description: t('gateway.description'),
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'riskcontrol',
      icon: ShieldCheckIcon,
      title: t('riskcontrol.title'),
      description: t('riskcontrol.description'),
      gradient: 'from-red-500 to-orange-500'
    },
    {
      id: 'accounting',
      icon: DocumentTextIcon,
      title: t('accounting.title'),
      description: t('accounting.description'),
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      id: 'multilang',
      icon: CodeBracketIcon,
      title: t('multilang.title'),
      description: t('multilang.description'),
      gradient: 'from-yellow-500 to-amber-500'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="products" 
      className="py-24 sm:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 transform-gpu"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={titleRef} className="mx-auto max-w-2xl text-center opacity-0 translate-y-5 transition-all duration-500 ease-out">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {t('title')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {t('subtitle')}
          </p>
        </div>
        
        <div ref={cardsRef} className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">{products.map((product, index) => (
              <div
                key={index}
                id={product.id}
                className="product-card opacity-0 translate-y-4 transition-all duration-300 ease-out group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 hover:transform hover:scale-[1.01] will-change-transform scroll-mt-24"
                style={{ transitionDelay: `${index * 30}ms` }}
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`relative inline-flex p-3 rounded-lg bg-gradient-to-r ${product.gradient} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  <product.icon className="h-6 w-6 text-white" />
                </div>
                
                {/* Content */}
                <div className="relative mt-6">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="mt-4 text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {product.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 h-16 w-16 rounded-full bg-gradient-to-br from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 right-4 h-8 w-8 rounded-full bg-gradient-to-br from-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span className="text-lg font-semibold">了解更多产品详情</span>
            <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}