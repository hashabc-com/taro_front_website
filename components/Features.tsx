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

export default function Features() {
  const t = useTranslations('Features');
  
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
    <section id="features" className="py-24 bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gray-800/50 p-8 hover:bg-gray-800 transition-all duration-300 border border-gray-700 hover:border-blue-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-500 transition-colors">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-300 leading-7 group-hover:text-gray-200 transition-colors">
                {feature.description}
              </p>
              
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}