/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let nameArray = users.map(item => item.name);
  
  return nameArray;
}
