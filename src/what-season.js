const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (typeof date !== 'object' || typeof date === 'function' || Array.isArray(date)) {
    throw new Error('Invalid date!');
  }

  const ms = date.getTime();

  if (Number.isNaN(ms)) {
    throw new Error('Invalid date!');
  }

  const d = new Date(ms);

  switch (d.getMonth()) {
    case 0:
    case 1:
      return 'winter';
    case 2:
    case 3:
    case 4:
      return 'spring';
    case 5:
    case 6:
    case 7:
      return 'summer';
    case 8:
    case 9:
    case 10:
      return 'fall';
    case 11:
      return 'winter';
  }

  return;
}

module.exports = {
  getSeason,
};
