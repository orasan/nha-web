import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/nha-web/', 
  title: "NohackAnarchy",
  description: "チート以外ありのアナーキーサーバー",
  head: [
    ['link', { rel: 'icon', href: '/my-site/favicon.ico' }]
  ],
  
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '検索',
                buttonAriaLabel: '検索'
              },
              modal: {
                noResultsText: '結果が見つかりません',
                resetButtonTitle: 'クリア',
                footer: {
                  selectText: '選択',
                  navigateText: '移動',
                  closeText: '閉じる'
                }
              }
            }
          },
          en: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search'
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear',
                footer: {
                  selectText: 'Select',
                  navigateText: 'Navigate',
                  closeText: 'Close'
                }
              }
            }
          }
        }
      }
    }
  },
  
  locales: {
    root: {
      label: '日本語',
      lang: 'ja',
      themeConfig: {
        logo: '/logo.png',

        notFound: {
          title: 'ページが見つかりません',
          quote: 'お探しのページは存在しないか、移動した可能性があります。',
          linkText: 'トップページに戻る'
        },
        
        nav: [
          { text: 'ホーム', link: '/' },
          { text: 'ルール', link: '/rules' },
          { text: '参加方法', link: '/join' },
        ],
        
        socialLinks: [
          { icon: 'discord', link: 'https://discord.gg/CzfGwv2wPM' }
        ],
        
        sidebar: [
          {
            text: 'はじめに',
            items: [
              { text: '参加方法', link: '/join' },
              { text: 'ルール', link: '/rules' },
            ]
          },
          {
            text: '仕様',
            items: [
              { text: 'モブ', link: '/mob' },
              { text: 'ワールド', link: '/World' },
            ]
          },
          {
            text: 'その他',
            items: [
              { text: 'よくある質問', link: '/qa' },
              { text: '支援', link: '/donor' },
            ]
          }
        ],
        
        footer: {
          message: 'Powered by <a href="https://vitepress.dev" target="_blank">VitePress</a>',
          copyright: 'Copyright © 2025 Nohackanarchy'
        }  
      }
    },
    
    en: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        logo: '/logo.png',

        notFound: {
          title: 'Page Not Found',
          quote: 'The page you are looking for does not exist or has been moved.',
          linkText: 'Go to Home'
        },
        
        nav: [
          { text: 'Home', link: '/en/index' },
          { text: 'Rules', link: '/en/rules' },
          { text: 'Join', link: '/en/join' },
        ],
        
        socialLinks: [
          { icon: 'discord', link: 'https://discord.gg/CzfGwv2wPM' }
        ],
        
        sidebar: [
          {
            text: 'Introduction',
            items: [
              { text: 'Join', link: '/en/join' },
              { text: 'Rules', link: '/en/rules' },
            ]
          },
          {
            text: 'Specification',
            items: [
              { text: 'Mobs', link: '/en/mob' },
              { text: 'World', link: '/en/World' },
            ]
          },
          {
            text: 'others',
            items: [
              { text: 'Q&A', link: '/en/qa' },
              { text: 'support', link: '/en/donor' },
            ]
          }

        ],
        
        footer: {
          message: 'Powered by <a href="https://vitepress.dev" target="_blank">VitePress</a>',
          copyright: 'Copyright © 2025 Nohackanarchy'
        }
      }
    }
  }
})
