// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-06-05',
  devtools: { enabled: true },
css: ['@/assets/css/tailwind.css'],
modules: [
  '@nuxtjs/tailwindcss',
  '@unocss/nuxt',
  '@nuxt/content',
  '@nuxtjs/mdc',
],
vite: {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/css/tailwind.css" as *;`
    },
  },
},
},
})