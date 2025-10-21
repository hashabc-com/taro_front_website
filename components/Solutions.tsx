'use client';

import { 
  CreditCardIcon, 
  ChartBarIcon, 
  CurrencyDollarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';

export default function Solutions() {
  const t = useTranslations('Solutions');
  
  const solutions = [
    {
      icon: CreditCardIcon,
      title: t('account.title'),
      description: t('account.description'),
    },
    {
      icon: ChartBarIcon,
      title: t('statistics.title'),
      description: t('statistics.description'),
    },
    {
      icon: CurrencyDollarIcon,
      title: t('currency.title'),
      description: t('currency.description'),
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gray-900/80 p-8 hover:bg-gray-900 transition-all duration-300 border border-gray-600 hover:border-blue-500"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-blue-600 group-hover:bg-blue-500 transition-colors mb-6">
                <solution.icon className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {solution.title}
              </h3>
              
              <p className="text-gray-300 leading-7 mb-6 group-hover:text-gray-200 transition-colors">
                {solution.description}
              </p>
              
              <button className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group/btn">
                {t('learnmore')}
                <ArrowRightIcon className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-16 text-center">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            {t('cta.title')}
          </h3>
          <p className="mt-4 text-lg text-blue-100">
            {t('cta.description')}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 transition-colors"
            >
              {t('cta.getstarted')}
            </a>
            <a
              href="#"
              className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              {t('cta.demo')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}