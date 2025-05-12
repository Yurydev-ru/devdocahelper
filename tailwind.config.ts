import type { Config } from 'tailwindcss'


export default <Config> {
  theme: {
    darkMode: false,
    extend: {}
  },
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],
  plugins: [],
}