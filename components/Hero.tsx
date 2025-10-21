'use client';

import { useTranslations } from 'next-intl';
import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline';
import Header from './Header';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <div className="relative isolate bg-gray-900">
      <Header />
      
      {/* Background gradient */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-purple-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {t('title')}
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto">
            {t('subtitle')}. {t('description')}.
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="group rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 flex items-center gap-2"
            >
              {t('getstarted')}
              <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#"
              className="group text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors flex items-center gap-2"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-600 group-hover:border-white transition-colors">
                <PlayIcon className="h-4 w-4 ml-0.5" />
              </div>
              {t('learnmore')}
            </a>
          </div>
        </div>

        {/* Features grid */}
        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: '200+', subtitle: t('stats.countries') },
            { title: '99.9%', subtitle: t('stats.uptime') },
            { title: '<1s', subtitle: t('stats.speed') },
            { title: '24/7', subtitle: t('stats.support') },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700">
              <div className="text-3xl font-bold text-white">{stat.title}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.subtitle}</div>
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