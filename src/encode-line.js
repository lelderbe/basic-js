const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let result = '';

    let currentChar = '';
    let count = 0;
    for (const char of str) {
        if (char !== currentChar) {
            result = result + (count > 1 ? count : '') + currentChar;
            currentChar = char;
            count = 0;
        }
        count++;
    }
    result = result + (count > 1 ? count : '') + (str[str.length - 1] || '');

    return result;
}

module.exports = {
    encodeLine,
};
