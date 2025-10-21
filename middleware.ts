import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // 匹配所有路径名，除了
  // - `/_next` (Next.js 内部)
  // - `/api` (API 路由)
  // - `/_vercel` (Vercel 内部)
  // - 所有根级文件内部 `public` (favicon.ico, robots.txt, 等)
  matcher: ['/((?!_next|_vercel|.*\\..*).*)']
};