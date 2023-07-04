
const list = document.getElementById('infi-list');


function addListItems() {

  const numItemsToAdd = 2;


  const currentCount = list.children.length;

  for (let i = 0; i < numItemsToAdd; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `Item ${currentCount + i + 1}`;
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
  listItem.textContent =  `Item ${i + 1}`;
  list.appendChild(listItem);
}


list.addEventListener('scroll', checkEndOfList);
