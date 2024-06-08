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
        primaryPurpleLight: '#D394FA',
        darkNavy: "#313E51",
        lightNavy: "#ABC1E1",
        green: '#26D782',
        red: '#EE5454',
        cardBg: 'var(--card-background-color)',
      },
      backgroundImage: {
        ellipse: "url('/assets/ellipse.svg')"
      }
    },
  },
  plugins: [],
}

