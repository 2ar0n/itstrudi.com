module.exports = {
  purge: {
      enabled: true,
      content: [
        './_layouts/*.html',
        './index.md',
        './404.md',
        './about.md',
        './order-here.md',
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
