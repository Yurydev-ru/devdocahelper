export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  compatibilityDate: '2025-05-10',
  builder: 'vite',
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/main.scss'
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
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