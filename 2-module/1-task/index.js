/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */


function sumSalary(salaries) {
  let sumSalar;
  let sumSalarFiltred;
  let result; 

  sumSalar = Object.values(salaries);
  sumSalarFiltred = sumSalar.filter(item => {if (isFinite(item)) {return item;}});
  result = sumSalarFiltred.reduce((sum, current) => sum + current, 0);
  
  return result;
}