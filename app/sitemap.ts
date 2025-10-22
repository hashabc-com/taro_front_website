import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://taropay.com";

  // 定义支持的语言
  const locales = ["en", "zh-CN"];

  // 定义所有页面路径
  const pages = ["", "/about", "/products"];

  // 生成所有页面的sitemap条目
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // 为每个语言和页面生成条目
  locales.forEach((locale) => {
    pages.forEach((page) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "daily" : "weekly",
        priority: page === "" ? 1.0 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${page}`,
            "zh-CN": `${baseUrl}/zh-CN${page}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}
