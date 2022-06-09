/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

const getMinMax = (str) => {
  const numbers = Array.from(str.match(/-?\d+\.?\d*/g), (item) =>
    parseFloat(item.replace(/,$/, ""))
  );

  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  };
};
