const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an arr of domains, return the object with the appearances of the DNS.
 *
 * @param {arr} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};

  for (let domain of domains) {
    let arr = domain.split(".");
    let num = "";

    for (let i = arr.length; i > 0; i--) {
      num = num + "." + arr.slice(i - 1, i);
      if (obj[num]) {
        obj[num] = obj[num] + 1;
      } else obj[num] = 1;
    }
  }

  return obj;
}

module.exports = {
  getDNSStats,
};
