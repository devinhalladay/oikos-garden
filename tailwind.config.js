module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    textIndent: (theme) => theme('spacing'),
    extend: {
      fontFamily: {
        'sans': ['Alegreya Sans', 'sans-serif'],
        'serif': ['Manuale', 'serif'],
        'sans-sc': [
          'Alegreya Sans SC',
          'Alegreya Sans',
          'sans-serif',
        ],
      },
      fontSize: {
        '5xl': '2.6rem',
      },
      colors: {
        'infinite-blue': '#d0232a',
        'domain-red': '#d0232a',
      },
      minHeight: (theme) => theme('spacing'),
    },
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
