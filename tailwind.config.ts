import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue'
  ],
  theme: {
    darkMode: false,
    extend: {
      // colors: {
      //   bg: 'var(--bg-color)',
      //   ui: 'var(--bg-ui)',
      //   'ui-hover': 'var(--bg-ui-hov)',
      //   border: 'var(--border-ui)',
      //   text: 'var(--text-primary)',
      //   'text-ui': 'var(--text-ui)',        
      // },
      // spacing: {
      //   'layout': 'var(--layout-padding, 1rem)',
      // },
    },
  },
  plugins: [],
}

export default config