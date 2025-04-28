export default {
  plugins: {
    '@tailwindcss/postcss': {},
    'postcss-prefix-selector': {
      prefix: '.pgf-header',
      skipGlobalSelectors: true,
    },
  },
};
