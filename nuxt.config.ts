import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
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
    size: '1.5em',
    class: 'icon',
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
          additionalData: `@use "@/assets/styles/themes/light" as *;
        @use "@/assets/styles/themes/dark" as *;
        `
        },
      },
    },
  },
  
  devtools: { 
    enabled: true,
  },
  compatibilityDate: '2025-05-10',
});