export const locales = ['en', 'zh-CN'] as const
export type Locale = typeof locales[number]

export const defaultLocale: Locale = 'en'

export function isLocale(input: string): input is Locale {
  return locales.includes(input as Locale)
}