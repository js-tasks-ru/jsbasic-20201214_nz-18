/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let result = str.toLowerCase();

  return result.includes("1xbet") || result.includes("xxx");
}
