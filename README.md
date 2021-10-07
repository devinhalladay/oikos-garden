# Infinite Caesura — Personal Wiki

This is the personal wiki of Devin Halladay, a designer and writer based in Manhattan. The code is open source and licensed under GPL; I would only ask that, as a courtesy, you let me know if you borrow or remix any of my code.

[![GPL Logo](https://www.gnu.org/graphics/gplv3-127x51.png)](https://img.shields.io/github/license/devinhalladay/oikos-garden?label=LICENSE)


## Tech Stack
- **Gatsby** to generate the site
- **MDX** to embed JSX in Markdown files
- **Vercel** for hosting
- **Tailwind** and SCSS for styling
- [Custom MDX footnote transformer plugin](https://github.com/devinhalladay/oikos-garden/blob/main/plugins/footnotes.js)
  - Inspired by [Maggie's footnote component](https://github.com/MaggieAppleton/maggieappleton.com/blob/f4dbc08f3702725073680f25dd6ca197b27721d3/src/components/mdx/Footnote.js) and [gatsby-remark-reference-footnotes](https://github.com/signalwerk/gatsby-remark-reference-footnotes)
  - Transforms MDX footnotes[^1] into a configurable JSX element (eg. a react component)
- **[gatsby-theme-brain](https://github.com/aengusmcmillin/gatsby-theme-brain)** provides bi-directional links and other niceties
- **Roam** for taking notes and writing entries

[^1]: Like this one!

## Installation
1. You'll need to install Node and Yarn, if you haven't already.
2. Clone this repo
3. `cd` into the repo and run `yarn install` to install project dependencies
4. Run `yarn dev` to start the development server

## Production
- Run `yarrn build` to build the site for production.

## Thanks to:
- Maggie Appleton for [their exemplary digital garden](https://github.com/MaggieAppleton/maggieappleton.com) which helped me get my head around Gatsby.
- Aengus McMillin for their powerful [digital garden theme and plugins](https://github.com/aengusmcmillin/gatsby-theme-brain)
