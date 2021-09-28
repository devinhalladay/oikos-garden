module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textIndent: (theme) => theme('spacing'),
    extend: {
      fontFamily: {
        'sans': ['Alegreya Sans', 'sans-serif'],
        'serif': ['Manuale', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-typography')({
      // all these options default to the values specified here
      ellipsis: true, // whether to generate ellipsis utilities
      hyphens: true, // whether to generate hyphenation utilities
      kerning: true, // whether to generate kerning utilities
      textUnset: true, // whether to generate utilities to unset text properties
    }),
  ],
};