/* configs/nav.ts */
import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
    { text: '🦄首页', link: '/' },
    { text: '🦊目录', link: '/notes' },
    {
        text: '更新日志',
        items: [
            { text: '更新日志', link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md' },
            { text: '贡献', link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md' },
        ],
    },
]
