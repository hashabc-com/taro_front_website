'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { ChevronDownIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const locales = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh-CN', name: '中文', flag: '🇨🇳' },
];

export default function LocaleSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split('/')[1];
  const currentLocaleData = locales.find(locale => locale.code === currentLocale) || locales[0];

  const handleLocaleChange = (locale: string) => {
    const newPathname = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPathname);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
      >
        <GlobeAltIcon className="h-4 w-4" />
        <span className="hidden sm:inline">{currentLocaleData.name}</span>
        <span className="sm:hidden">{currentLocaleData.flag}</span>
        <ChevronDownIcon className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 z-20 mt-1 w-48 rounded-md bg-gray-800 border border-gray-600 shadow-lg">
            <div className="py-1">
              {locales.map((locale) => (
                <button
                  key={locale.code}
                  onClick={() => handleLocaleChange(locale.code)}
                  className={`flex w-full items-center gap-3 px-4 py-2 text-sm hover:bg-gray-700 ${
                    locale.code === currentLocale 
                      ? 'bg-gray-700 text-white' 
                      : 'text-gray-300'
                  }`}
                >
                  <span className="text-lg">{locale.flag}</span>
                  <span>{locale.name}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}