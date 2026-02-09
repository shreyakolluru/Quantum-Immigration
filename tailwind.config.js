/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'infinite-scroll': 'infinite-scroll 40s linear infinite',
        'infinite-scroll-reverse': 'infinite-scroll-reverse 40s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-50% - var(--gap)/2))' },
        },
        'infinite-scroll-reverse': {
          from: { transform: 'translateX(calc(-50% - var(--gap)/2))' },
          to: { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}