import type { Config } from 'tailwindcss'


export default <Config> {
  theme: {
    darkMode: false,
    extend: {}
  },
  content: [
    './pages/**/*.vue',
    './layouts/**/*.vue',
    './components/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  plugins: [],
}