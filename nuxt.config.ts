import { defineConfig } from 'vite';
import path from 'path';
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  // ssr: true,
  vite: {
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true
      },
    },
    },
  },
  css: [
    './assets/styles/tailwind.css',
    './assets/styles/main.scss'
  ],
  modules: ['@nuxtjs/color-mode', '@nuxtjs/tailwindcss', 'nuxt-icons'],
  colorMode: {
    classSuffix: '',
    fallback: 'dark',
    preference: 'system',
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