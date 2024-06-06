/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryPurple: '#A729F5',
        darkNavy: "#313E51",
        cardBg: 'var(--card-background-color)',
      },
      backgroundImage: {
        ellipse: "url('/assets/ellipse.svg')"
      }
    },
  },
  plugins: [],
}

