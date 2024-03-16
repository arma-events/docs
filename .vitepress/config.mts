import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "docs.arma.events",
  description: "arma.events Documentation",
  srcDir: './src', // all *.md files in a subfolder called 'src'
  cleanUrls: true, // without extension like .html
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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
          { text: 'Explore', link: '/en/explore' },
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
          { text: 'FAQ', link: '/en/faq' },
          { text: 'Support', link: '/en/support' },
          { text: 'Feedback', link: '/en/feedback' },
          { text: 'Contribution', link: '/en/contribution' },
          { text: 'Roadmap', link: '/en/roadmap' },
          { text: 'Changelog', link: '/en/changelog' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/@arma.events' },
      { icon: 'discord', link: 'https://discord.gg/b2aABzh8xJ' },
      { icon: 'x', link: 'https://x.com/arma_events' }
    ],

    search: {
      provider: 'local'
    }
  },

  locales: {
    en: {
      label: 'English',
      lang: 'en', // optional, will be added  as `lang` attribute on `html` tag
      link: '/en' // default /en/ -- shows on navbar translations menu, can be external
    },
    de: {
      label: 'German',
      lang: 'de', // optional, will be added  as `lang` attribute on `html` tag
      link: '/de' // default /de/ -- shows on navbar translations menu, can be external

      // other locale specific properties...
    }
  }
})
