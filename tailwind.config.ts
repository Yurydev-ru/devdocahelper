import type {Config} from 'tailwindcss';

export default <Partial<Config>>{
    theme: {
      extend: {},
    },
    content: ['~/components/**/*.vue', '~/pages/**/*.vue', '~/layouts/**/*.vue', '~/content/**/*.md'],
    plugins: []
  }