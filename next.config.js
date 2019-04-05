
const withCSS = require('@zeit/next-css');

/* apiUrl = process.env.API_URL virkaði ekki hjá mér... */

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  publicRuntimeConfig: {
    apiUrl: 'http://localhost:5000',
  },
});
