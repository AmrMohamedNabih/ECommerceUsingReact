/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        lightpink: '#efc4c3',
        darkpink: '#b0787b',
        white: '#f9f6f6',
      },
    },
  },
  plugins: [],
}

