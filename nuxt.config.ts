export default defineNuxtConfig({
  
  builder: 'vite',
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/scss/main.scss'
  ],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  colorMode: {
    preference: 'system',
    classSuffix: '',
  },
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
          additionalData: `@use "~/assets/scss/themes/light" as *;
          @use "~/assets/scss/themes/dark" as *;`
        },
      },
    },

  },
  devtools: { 
    enabled: true,
  },
  compatibilityDate: '2025-05-10',
})
