const defaultTheme = require("tailwindcss/defaultTheme");
const daisyThemes = require("daisyui/src/colors/themes");
module.exports = {
  content: [
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.{js,jsx}",
    "./app/views/**/*.{erb,haml,html,slim}"
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...daisyThemes["[data-theme=light]"],
          primary: "#BD945A"
        }
      }
    ]
  },
  theme: {
    extend: {
      colors: {
        "twine": {
          DEFAULT: "#BD945A",
          "50": "#F1E9DD",
          "100": "#ECE0CF",
          "200": "#E0CDB1",
          "300": "#D4BA94",
          "400": "#C9A777",
          "500": "#BD945A",
          "600": "#9F7840",
          "700": "#775A30",
          "800": "#4F3B20",
          "900": "#271D10"
        }
      },
      fontFamily: {
        "nunito-sans": ["\"Nunito Sans\"", "sans-serif"],
        "garamond": ["\"Cormorant Garamond\"", "serif"],
        "alex": ["\"Alex Brush\"", "cursive"],
        sans: ["Inter var", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography")
  ]
};
