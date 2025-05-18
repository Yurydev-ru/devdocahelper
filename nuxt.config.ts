import { defineConfig } from 'vite';
import path from 'path';
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  // ssr: true,
  
  css: [
    '@/assets/styles/main.scss'
  ],
  modules: ['@nuxtjs/color-mode', 'nuxt-icons'],
  colorMode: {
    classSuffix: '',
    fallback: 'light',
    preference: 'system',
    storageKey: 'color-mode',
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