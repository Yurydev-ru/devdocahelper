import { defineNuxtConfig } from 'nuxt/config';
import { extendViteConfig } from 'nuxt/kit';

export default defineNuxtConfig({
  ssr: true,
  vite: './vite.config',
  css: [
    '/assets/styles/tailwind.css',
    './assets/styles/main.scss'
  ],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', 'nuxt-icons'],
  colorMode: {
    classSuffix: '',
  },
  components: [
    {
      path: './components',
      pathPrefix: false,
    }
  ],
  
  devtools: { 
    enabled: true,
  },
  compatibilityDate: '2025-05-10',
});