/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    textIndent: (theme) => theme('spacing'),
    screens: {
      xxs: '375px',
      xs: '600px',
      sm: '768px',
      md: '900px',
      lg: '1024px',
      xl: '1200px',
      xxl: '1440px',
      xxxl: '2600px',
    },
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
        'blue': '#0084ff',
        'red': '#d0232a',
      },
      minHeight: (theme) => theme('spacing'),
      gap: {
        'narrow': '16px',
        'wide': '64px'
      }
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
