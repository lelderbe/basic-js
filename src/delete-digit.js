const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;

  const str = String(n);
  for (let i = 0; i < str.length; i++) {
    const arr = str.split('');
    arr.splice(i, 1);
    const num = Number(arr.join(''));
    max = num > max ? num : max;
  }

  return max;
}

module.exports = {
  deleteDigit,
};
