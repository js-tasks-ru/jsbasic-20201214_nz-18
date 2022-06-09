/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */

function isEmpty(obj) {
  let result;
  result = Object.keys(obj).length === 0;
  return result;}

