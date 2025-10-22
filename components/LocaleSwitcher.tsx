"use client";

import { useState } from "react";
import { useRouter, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { FlagIcon, type FlagCode } from "./ui/flag-icons";

const locales = [
  { code: "en", name: "English", flag: "US" as FlagCode },
  { code: "zh-CN", name: "中文", flag: "CN" as FlagCode },
];

export default function LocaleSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const currentLocaleData =
    locales.find((loc) => loc.code === locale) || locales[0];

  const handleLocaleChange = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
      >
        <FlagIcon code={currentLocaleData.flag} className="w-5 h-3" />
        <span className="hidden sm:inline">{currentLocaleData.name}</span>
        <ChevronDownIcon
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 z-20 mt-1 w-48 rounded-md bg-gray-800 border border-gray-600 shadow-lg">
            <div className="py-1">
              {locales.map((localeItem) => (
                <button
                  key={localeItem.code}
                  onClick={() => handleLocaleChange(localeItem.code)}
                  className={`flex w-full items-center gap-3 px-4 py-2 text-sm hover:bg-gray-700 ${
                    localeItem.code === locale
                      ? "bg-gray-700 text-white"
                      : "text-gray-300"
                  }`}
                >
                  <FlagIcon code={localeItem.flag} className="w-5 h-3" />
                  <span>{localeItem.name}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
