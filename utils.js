/**
 * Creates nicely looking string representation of object.
 *
 * @param {Object} objectToFormat the object to format into a string.
 */
exports.prettyString = function prettyString(objectToFormat) {
  return JSON.stringify(objectToFormat, undefined, 2);
};
