import defaultTheme from 'tailwindcss/defaultTheme'
import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        lime: '#D8DB2F',
        slate: {
          100: '#E4F4FD',
          300: '#9ABED5',
          500: '#6B94A8',
          700: '#4E6E7E',
          900: '#133041',
        },
      },
    },
  },
  plugins: [forms],
}
