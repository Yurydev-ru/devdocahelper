import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  ssr: false,

  css: [
    '@/assets/styles/main.scss'
  ],
  modules: ['@nuxtjs/color-mode', '@nuxt/icon', '@nuxt/fonts'],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    storageKey: 'nuxt-theme',
    classSuffix: '',
    dataValue: 'theme',
  },
  icon: {
    provider: 'server',
    clientBundle: {
      scan: true,
      sizeLimitKb: 256,
      icons: [
        'light-theme',
        'dark-theme',
      ]
    },
    class: 'icon',
    customCollections: [
      {
        prefix: 'icons',
        dir: './assets/icons',
        normalizeIconName: false,
      }
    ],
    aliases: {
      'light-theme': 'icons:logo-light',
      'dark-theme': 'icons:logo-dark',
    },


    cssLayer: 'base',
    size: '1.5em',

  },
  components: [
    {
      path: './components',
      pathPrefix: false,
    }
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            `
          @use "@/assets/styles/themes/light" as *;                
          @use "@/assets/styles/themes/dark" as *;`
        },
      },
    },
  },

  devtools: {
    enabled: true,
  },
  compatibilityDate: '2025-05-10',
});