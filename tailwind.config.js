/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        vinho: '#5C314D',
        rosa: '#8E5D79',
        rosefrio: '#C99BB2',
        bege: '#EADBE3',
        offwhite: '#F7F1F4',
        texto: '#2C1F28',
        alerta: '#A94E63',
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
