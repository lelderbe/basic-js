const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
//
// Recursion in case of array in array in array...
//
// function countCats(matrix) {
//   let count = 0;

//   for (const e of matrix) {
//     if (Array.isArray(e)) {
//       count = count + countCats(e);
//     } else {
//       count += e === '^^' ? 1 : 0;
//     }
//   }

//   return count;
// }

function countCats(matrix) {
  return matrix.reduce((acc, item) => acc + item.filter((item) => item === '^^').length, 0);
}

module.exports = {
  countCats
};
