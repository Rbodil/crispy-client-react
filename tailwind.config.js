/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/components/Header/index.js",
    "./src/components/Search/index.js",
    "./src/components/Results/index.js",
    "./src/index.js"
  ],
  screens: {
    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
  plugins: [],
  theme: {
    colors: {
      'blue': '#0c2b62',
      'red': '#bc0b0b',
      'tertiary': '#fbe873',
      'white': '#ffffff',
      'darker': '#000000',
      'dark': '#222222',
      'error': '#f34832'
    }
  }
}
