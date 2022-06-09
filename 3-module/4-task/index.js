/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */

const showSalary = (users, age) => {
  const filtredArray = users.filter((item) => item.age <= age);
    return filtredArray.map((item, index) => {
     return  index !== (filtredArray.length - 1) ? `${item.name}, ${item.balance}\n` : `${item.name}, ${item.balance}`})
    .join("");
};

