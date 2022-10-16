const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];
  let discard = false;
  let double = false;
  arr.forEach((item) => {
    const prev = result[result.length - 1];
    switch (item) {
      case '--discard-prev':
        if (prev) prev.discard = true;
        break;
      case '--double-prev':
        if (prev) result.push({ ...prev });
        break;
      case '--discard-next':
        discard = true;
        break;
      case '--double-next':
        double = true;
        break;
      default:
        const next = { value: item, discard };
        result.push(next);
        if (double) {
          result.push({ ...next });
        }
        discard = false;
        double = false;
    }
  });

  return result.filter((item) => item.discard === false).map((item) => item.value);
}

module.exports = {
  transform,
};
