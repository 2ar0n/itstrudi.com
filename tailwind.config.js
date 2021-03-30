module.exports = {
  purge: {
      enabled: true,
      content: [
        './_layouts/*.html',
        './index.md',
        './404.md',
        './about.md',
        './how-to-order.md',
      ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
