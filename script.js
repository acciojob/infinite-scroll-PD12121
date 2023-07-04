
const list = document.getElementById('infi-list');

function addListItems() {
 
  const numItemsToAdd = 2;

  for (let i = 0; i < numItemsToAdd; i++) {
    const itemList = document.createElement('li');
    itemList.textContent = 'List Item';
    list.appendChild(listItem);
  }
}


function checkEndOfList() {
  const listHeight = list.offsetHeight;
  const scrollTop = list.scrollTop;
  const scrollHeight = list.scrollHeight;

  if (scrollTop + listHeight >= scrollHeight) {
    addListItems();
  }
}


for (let i = 0; i < 10; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = 'List Item';
  list.appendChild(listItem);
}

list.addEventListener('scroll', checkEndOfList);
