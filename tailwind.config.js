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
        black: '#111111',
        gray: '##525252',
        secondaryV: '#FCF1E4',
        accent: '#6464DD',
      }
    },
  },
  daisyui: {
    themes: ["pastel"],
  },
  plugins: [require("daisyui")],
}

