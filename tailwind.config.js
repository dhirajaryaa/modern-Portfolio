/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Calistoga', 'serif'],
      },
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1200px',
      },
    },
  },
  plugins: [],
}

