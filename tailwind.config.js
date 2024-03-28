/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        'c-primary': '#23BE0A',
        'c-secondary': '#23be0a0d',
        'c-light': '#131313bb',
        'c-dark': '#131313cc',
      },
    },
  },
  plugins: [require("daisyui")],
}

