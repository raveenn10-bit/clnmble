/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1D4ED8', // Digitel Royal Blue
          dark: '#1E40AF',
          light: '#3B82F6',
          50: '#EFF6FF',
        },
        digitel: {
          blue: '#1D4ED8',
          darkBlue: '#0F172A',
          green: '#10B981',
          accent: '#06B6D4',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
