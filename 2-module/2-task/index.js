/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
let result;
function isEmpty(obj) {
  result = Object.keys(obj).length === 0;
  return result;}

