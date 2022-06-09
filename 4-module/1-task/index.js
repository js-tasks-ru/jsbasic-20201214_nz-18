const makeFriendsList = (friends) => {
  const ul = document.createElement('ul');
  const li = friends.map(item => `${item.firstName} ${item.lastName}`);
  li.map(item => {
    ul.insertAdjacentHTML('beforeend', `<li> ${item} </li>`);

    return ul;
  });

  return ul
};

