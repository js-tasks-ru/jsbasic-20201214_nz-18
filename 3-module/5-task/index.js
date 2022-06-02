/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

const getMinMax = (str) => {
  const numbers = str.split(' ').filter(item => parseFloat(item)).map(item => parseFloat(item.replace(/,/g, '')));
  return {
    min: Math.min(...numbers),
    max:Math.max(...numbers)
  }
};
