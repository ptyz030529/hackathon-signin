// https://github.com/michael-ciniawsky/postcss-load-config
var colors = require('./postcss/colors');
var fonts = require('./postcss/fonts');
var layout = require('./postcss/layout');
var selectors = require('./postcss/selectors');
var zIndex = require('./postcss/z-index');
module.exports = {
  "plugins": {
    // to edit target browsers: use "browserlist" field in package.json
    "postcss-utilities": {},
    "postcss-cssnext": {
      browsers: ['last 2 versions', 'IE > 10'],
      features: {
        customProperties: {
          variables: Object.assign(
            {},
            colors,
            fonts,
            layout,
            zIndex
          )
        },
        customMedia: {
          extensions: {
            v_small: "(min-width: 30em)",
            v_medium: "(min-width: 48em)",
            v_large: "(min-width: 64em)",
            v_xlarge: "(min-width: 75em)",
            v_xxlarge: "(min-width: 90em)"
          }
        },
        customSelectors: {
          extensions: selectors
        }
      }
    }
  }
}
