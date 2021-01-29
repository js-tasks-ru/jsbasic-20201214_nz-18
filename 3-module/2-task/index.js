/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  let arrayFiltered = arr.filter((item) => {
    if (item >= a && item <= b) {
      return item;
    }
  });

  return arrayFiltered;
}
