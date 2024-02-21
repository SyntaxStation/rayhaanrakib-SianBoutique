/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f5f5f5',
        primaryV: '#ff6f61',
        secondary: '#1f1f1f',
        secondaryV: '#FCF1E4',
        black: '#111111',
        gray: '#525252',
        accent: '#6464DD',
      }
    },
  },
  daisyui: {
    themes: ["pastel"],
  },
  plugins: [require("daisyui")],
}

