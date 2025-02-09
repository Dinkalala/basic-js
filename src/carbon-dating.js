const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity === "string") {
    let sampleActivityToFloat = parseFloat(sampleActivity);

    if (sampleActivityToFloat < MODERN_ACTIVITY && sampleActivityToFloat > 0) {
      const ln2 = 0.693;
      const k = ln2 / HALF_LIFE_PERIOD;
      const t = Math.log(MODERN_ACTIVITY / sampleActivityToFloat) / k;
      age = Math.ceil(t);
      return age;
    } else return false;
  } else return false;
}

module.exports = {
  dateSample,
};
