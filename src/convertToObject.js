'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const input = sourceString.split(';');
  const result = {};

  input.forEach((property) => {
    const [key, value] = property.split(':');

    if (value) {
      result[key.trim()] = value.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
