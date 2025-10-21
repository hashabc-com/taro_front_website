'use client';

import { useTranslations } from 'next-intl';
import AnimatedSection from './AnimatedSection';

export default function Footer() {
  const t = useTranslations('Footer');
  
  const navigation = {
    product: [
      { name: t('links.gateway'), href: '#' },
      { name: t('links.api'), href: '#' },
      { name: t('links.dashboard'), href: '#' },
    ],
    company: [
      { name: t('links.about'), href: '#' },
      { name: t('links.contact'), href: '#' },
      { name: t('links.careers'), href: '#' },
    ],
    resources: [
      { name: t('links.documentation'), href: '#' },
      { name: t('links.reference'), href: '#' },
      { name: t('links.support'), href: '#' },
    ],
  };

  return (
    <AnimatedSection animationType="fadeUp" className="bg-gray-900 border-t border-gray-800">
      <footer aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="animate-item space-y-8">
            <div>
              <span className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer">TaroPay</span>
              <p className="mt-4 text-sm leading-6 text-gray-300 max-w-md">
                {t('description')}
              </p>
            </div>
          </div>
          <div className="animate-item mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">{t('product')}</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.product.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">{t('company')}</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">{t('resources')}</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="animate-item mt-16 border-t border-gray-800 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400 text-center">
            {t('copyright')}
          </p>
        </div>
      </div>
      </footer>
    </AnimatedSection>
  );
}