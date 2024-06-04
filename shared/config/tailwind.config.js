const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/**/*.{js,ts,jsx,tsx}',
    '../../shared/react-components/**/*.{js,ts,jsx,tsx}',
    '../../shared/ui/**/*.{js,ts,jsx,tsx}',
    '../../node_modules/flowbite-react/lib/esm/theme.js'
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      grotesk: 'Grotesk',
      inter: 'Inter',
      averta: 'Averta'
    },
    extend: {
      colors: {
        pt: {
          purple: {
            50: '#00FAB2',
            100: '#00FAB2',
            200: '#FF00FF',
            300: '#FF00FF',
            400: '#38B6FF',
            500: '#FF00FF',
            600: '#000',
            700: '#000',
            800: '#000',
            900: '#000',
            DEFAULT: '#00FAB2'
          },
          teal: {
            light: '#38B6FF',
            dark: '#FF00FF',
            DEFAULT: '#38B6FF'
          },
          pink: {
            light: '#FA48E8',
            dark: '#B623A7',
            DEFAULT: '#FA48E8'
          },
          bg: {
            purple: {
              light: '#000',
              dark: '#000',
              darker: '#000',
              DEFAULT: '#000'
            }
          },
          warning: {
            light: '#FFB6B6',
            dark: '#8B0000',
            DEFAULT: '#8B0000'
          },
          gold: '#FFB636',
          transparent: '#F5F0FF1A'
        }
      }
    },
    screens: {
      'smSonner': '601px',
      ...defaultTheme.screens,
      '3xl': '1900px',
      '4xl': '2200px',
      '5xl': '2500px'
    }
  },
  plugins: [
    plugin(({ addUtilities }) => addUtilities({
      '.no-scrollbar::-webkit-scrollbar': {
        'display': 'none'
      },
      '.no-scrollbar': {
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none'
      }
    }))
  ]
}