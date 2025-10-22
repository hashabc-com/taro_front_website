import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // 支持的所有语言环境列表
  locales: ["en", "zh-CN"],

  // 在 `/` 上使用的默认语言环境
  defaultLocale: "zh-CN",

  // 禁用自动语言检测，避免根据浏览器语言自动切换
  localeDetection: false,
});

// 轻量级包装器围绕 Next.js 导航 API，
// 会自动处理语言环境
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
