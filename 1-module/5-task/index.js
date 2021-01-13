/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
const truncate = (str, maxlength) => 
  str.length < maxlength ? str : 
    str.substr(0, maxlength - 1).concat("…");


