/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './assets/*.js'],
  darkMode: 'class',
  theme: {
    container: { center: true, padding: '1rem', screens: { '2xl': '1440px' } },
    fontFamily: {
      'dm-sans': ['Dm Sans', 'sans-serif'],
      'dm-mono': ['DM Mono', 'monospace']
    },
    extend: {
      colors: {
        border: 'var(--border)'
      }
    }
  },
  plugins: []
}
