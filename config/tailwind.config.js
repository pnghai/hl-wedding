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
      animation: {
        fade: 'fadeIn 1ms ease-in-out',
      },
      // that is actual animation
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      colors: {
        'hint-of-red': {
          DEFAULT: '#FAF8F7',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFFFFF',
          '400': '#FFFFFF',
          '500': '#FAF8F7',
          '600': '#E4DAD4',
          '700': '#CFBCB2',
          '800': '#B99D8F',
          '900': '#A47F6D'
        },
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
        "nunito-sans": ["\"Nunito Sans\"", "\"Noto Sans JP\"","sans-serif"],
        "garamond": ["\"Cormorant Garamond\"", "\"Noto Serif JP\"", "serif"],
        "alex": ["\"Alex Brush\"", "\"Klee One\"","cursive"],
        sans: ["Inter var", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
  ]
};
