/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
let sumSalar;
let sumSalarFiltred;
let result; 

function sumSalary(salaries) {
  sumSalar = Object.values(salaries);
  sumSalarFiltred = sumSalar.filter(item => {if (isFinite(item)) {return item;}});
  result = sumSalarFiltred.reduce((sum, current) => sum + current, 0);
  return result;}