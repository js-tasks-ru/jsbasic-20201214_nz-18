/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  let result = str.trim();
  if (result.length === 0) {return result;} 
  
  return result[0].toUpperCase().concat(result.slice(1));
}
