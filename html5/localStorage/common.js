const addItems = document.querySelector('.add-items');// form
const itemsList = document.querySelector('.plates');// 列表

addItems.addEventListener('submit', addItem);

function addItem(e) {
  e.preventDefault();// 阻止表单提交
}