// cSpell: disable

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "docs.arma.events",
  description: "arma.events Documentation",
  srcDir: './src', // all *.md files in a subfolder called 'src'
  cleanUrls: true, // without extension like .html
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  markdown: {
    image: {
      lazyLoading: true
    }
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    externalLinkIcon: true,
    logo: "/ae-logo.svg",
    footer: {
      message: "This website is not affiliated or authorized by Bohemia Interactive a.s. Bohemia Interactive, ARMA, DAYZ and all associated logos and designs are trademarks or registered trademarks of Bohemia Interactive a.s.",
      copyright: "Copyright © 2024-present arma.events",
    },
    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/@arma.events' },
      { icon: 'discord', link: 'https://discord.gg/b2aABzh8xJ' },
      { icon: 'x', link: 'https://x.com/arma_events' }
    ]
  },
  locales: {
    en: {
      label: 'English',
      lang: 'en', // optional, will be added  as `lang` attribute on `html` tag
      link: '/en/', // default /en/ -- shows on navbar translations menu, can be external
      themeConfig: {
        search: {
          provider: 'local',
          options: {
            locales: {
              de: {
                translations: {
                  button: {
                    buttonText: 'Search'
                  },
                  modal: {
                    noResultsText: 'No results for',
                    resetButtonTitle: 'Reset search',
                    displayDetails: 'Display detailed list',
                    footer: {
                      selectText: 'to select',
                      navigateText: 'to navigate',
                      closeText: 'to close'
                    }
                  }
                }
              }
            }
          }
        },
        darkModeSwitchTitle: 'Switch to dark theme',
        lightModeSwitchTitle: 'Switch to light theme',
        lastUpdated: {
          text: 'Updated at',
          formatOptions: {
            dateStyle: 'full',
            timeStyle: 'medium'
          }
        },
        editLink: {
          pattern: 'https://github.com/arma-events/docs/edit/main/src/:path',
          text: 'Edit this page on GitHub'
        },
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        },
        nav: [
          { text: 'FAQ', link: '/en/faq' },
          { text: 'Support', link: '/en/support' },
          { text: 'Feedback', link: '/en/feedback' },
          { text: 'Contribution', link: '/en/contribution' }
        ],
        sidebar: [
          {
            text: 'Articles',
            items: [
              { text: 'Overview', link: '/en/overview' },
              { text: 'Users', link: '/en/users' },
              { text: 'Communities', link: '/en/communities' },
              {
                text: 'Events', 
                link: '/en/events', 
                items: [
                  { text: 'Markdown', link: '/en/markdown' },
                  { text: 'Slotslist', link: '/en/slotlist' }
                ]
              }
            ]
          },
          {
            text: 'Other Stuff',
            items: [
              { text: 'Team', link: '/en/team' },
              { text: 'FAQ', link: '/en/faq' },
              { text: 'Support', link: '/en/support' },
              { text: 'Feedback', link: '/en/feedback' },
              { text: 'Contribution', link: '/en/contribution' },
              { text: 'Roadmap', link: '/en/roadmap' },
              { text: 'Changelog', link: '/en/changelog' },
              { text: 'Tech Stack', link: '/en/tech-stack' }
            ]
          }
        ]
      }
    },
    de: {
      label: 'Deutsch',
      lang: 'de', // optional, will be added  as `lang` attribute on `html` tag
      link: '/de/', // default /de/ -- shows on navbar translations menu, can be external
      themeConfig: {
        search: {
          provider: 'local',
          options: {
            locales: {
              de: {
                translations: {
                  button: {
                    buttonText: 'Suchen'
                  },
                  modal: {
                    noResultsText: 'Keine Ergebnisse für',
                    resetButtonTitle: 'Suche zurücksetzen',
                    displayDetails: 'Detaillierte Liste anzeigen',
                    footer: {
                      selectText: 'um auszuwählen',
                      navigateText: 'um zu navigieren',
                      closeText: 'zum schließen'
                    }
                  }
                }
              }
            }
          }
        },
        darkModeSwitchTitle: 'Wechsle zum Dark Theme',
        lightModeSwitchTitle: 'Wechsle zum Light Theme',
        lastUpdated: {
          text: 'Aktualisiert am',
          formatOptions: {
            dateStyle: 'full',
            timeStyle: 'medium'
          }
        },
        editLink: {
          pattern: 'https://github.com/arma-events/docs/edit/main/src/:path',
          text: 'Bearbeite diese Seite auf GitHub'
        },
        docFooter: {
          prev: 'vorherige Seite',
          next: 'nächste Seite'
        },
        nav: [
          { text: 'FAQ', link: '/de/faq' },
          { text: 'Support', link: '/de/support' },
          { text: 'Feedback', link: '/de/feedback' },
          { text: 'Mitwirkung', link: '/de/contribution' }
        ],
        sidebar: [
          {
            text: 'Artikel',
            items: [
              { text: 'Überblick', link: '/de/overview' },
              { text: 'Benutzer', link: '/de/users' },
              { text: 'Communities', link: '/de/communities' },
              {
                text: 'Events', 
                link: '/de/events', 
                items: [
                  { text: 'Markdown', link: '/de/markdown' },
                  { text: 'Slotliste', link: '/de/slotlist' }
                ]
              }
            ]
          },
          {
            text: 'Anderes Zeug',
            items: [
              { text: 'Team', link: '/de/team' },
              { text: 'FAQ', link: '/de/faq' },
              { text: 'Support', link: '/de/support' },
              { text: 'Feedback', link: '/de/feedback' },
              { text: 'Mitmachen', link: '/de/contribution' },
              { text: 'Roadmap', link: '/de/roadmap' },
              { text: 'Changelog', link: '/de/changelog' },
              { text: 'Tech Stack', link: '/de/tech-stack' }
            ]
          }
        ]
      }
    }
  }
})
