'use strict';

/**
 * Add extensions to Poi's webpack configuration.
 * @param {Array.<string>} extensions
 * @returns {function(Poi):void}
 */
const preset = (extensions = []) => (poi) => {
  poi.extendWebpack((config) => {
    extensions.forEach((extension) => {
      config.resolve.extensions.add(extension);
    });
  });
};

module.exports = preset;
