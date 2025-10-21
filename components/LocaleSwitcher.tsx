'use client'

import { usePathname } from 'next/navigation'
import { locales, Locale } from '@/i18n/config'

export function LocaleSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname()
  // pathname 形如 /en/xxx
  const segments = pathname.split('/')
  return (
    <div style={{ display: 'inline-flex', gap: 8 }}>
      {locales.map(l => {
        const newSegments = [...segments]
        newSegments[1] = l // 替换 locale 段
        const newPath = newSegments.join('/') || '/'
        return (
          <a
            key={l}
            href={newPath}
            style={{ fontWeight: l === current ? 'bold' : 'normal' }}
          >
            {l}
          </a>
        )
      })}
    </div>
  )
}