import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/'),
      '@components': path.resolve(__dirname, './components'),
      '@assets': path.resolve(__dirname, './assets'),
      '@pages': path.resolve(__dirname, './pages'),
      '@styles': path.resolve(__dirname, './styles'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use './assets/styles/scss/themes' as *;
        @use './assets/styles/scss/mixins' as *;
        @use './assets/styles/scss/layout' as *;
        @use './assets/styles/scss/typography' as *;`
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
