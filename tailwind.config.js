module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#50b6bd',
      'primary-dark': '#3a969c',
      border: '#dfe6ed',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
