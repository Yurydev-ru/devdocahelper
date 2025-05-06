// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-06-05',
  devtools: { enabled: true },
css: [
  '~/assets/css/main.scss',
  '~/assets/css/tailwind.css'
],
modules: [
  '@nuxtjs/mdc',
  '@unocss/nuxt',
  '@nuxt/content',
  '@nuxtjs/tailwindcss',
],
vite: {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/assets/css/utils" as *;`
    },
  },
},
},
})