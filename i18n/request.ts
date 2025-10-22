import { getRequestConfig } from "next-intl/server";
import { locales, isLocale } from "./config";

export default getRequestConfig(async ({ requestLocale }) => {
  // 验证请求的 locale 是否支持
  let locale = await requestLocale;

  if (!locale || !isLocale(locale)) {
    locale = "zh-CN";
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
