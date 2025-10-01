import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "NohackAnarchry",
  description: "a vitepress",
  base: '/my-site/',
  head: [
    ['link', {rel: 'icon', href: '/my-site/favicon.ico'}]
  ],

  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'ホーム', link: '/' },
      { text: 'ルール', link: '/rules' },
      { text: '参加', link: '/join'}
    ],

    sidebar: [
      {
        text: 'はじめに',
        items: [
          { text: 'ルール', link: '/rules' },
          { text: '参加方法', link: '/join' }
        ]
      },
      {
        text: '仕様',
        items: [
          { text: 'モブ', link: '/mob' },
          { text: 'ワールド', link: '/World' }
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/orasan/my-site' },
      { icon: 'discord', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Powered by <a href="https://vitepress.dev" target="_blank">VitePress</a>',
      copyright: 'Copyright © 2025 Nohackanarchy'
    }
  }
})
