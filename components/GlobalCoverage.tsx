'use client';

import { useTranslations } from 'next-intl';

export default function GlobalCoverage() {
  const t = useTranslations('GlobalCoverage');
  
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
    <section className="py-24 bg-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {t('description')}
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5">
          {countries.map((country, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-gray-700/50 p-6 text-center hover:bg-gray-700 transition-all duration-300 border border-gray-600 hover:border-blue-500"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {country.code}
              </div>
              <div className="text-sm font-medium text-gray-300 group-hover:text-white">
                {country.name}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-base text-gray-400">
            {t('more')}
          </p>
        </div>
      </div>
    </section>
  );
}