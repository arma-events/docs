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
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
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
