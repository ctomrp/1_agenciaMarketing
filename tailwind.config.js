/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "orange-button": "#ff561e"
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1720px',
      '4xl': '1856px',
    },
    boxShadow: {
      navbar: "0px 10px 8px 0px rgba(3, 3, 4, 0.03), 0 1px 2px -1px rgba(3, 3, 4, 0.03)"
    }
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    // function ({addUtilities}) {
    //   const extendUnderline = {
    //     '.underline':{
    //       'textDecoration': 'underline',
    //       'text-decoration-color': '#ff561e',
    //     },
    //   }
    //   addUtilities(extendUnderline)
    // }
  ],
}

