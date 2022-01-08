let elForm = document.querySelector(".form");
let elInput = document.querySelector(".input");
let elList = document.querySelector(".list");

const todos = [];
//let counter = 0;

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let inputValue = elInput.value;

  const todo = {
    name: inputValue,
    id: todos.length,
  };

  todos.push(todo);
  elForm.reset();
  elList.innerHTML = null;

  for (let item of todos) {
    const newItem = document.createElement("div");
    newItem.setAttribute("class", "item transparent-text form-check module");
    newItem.textContent = item.name;
    elList.appendChild(newItem);
    const newItemCheck = document.createElement("input");
    newItemCheck.setAttribute("class", "form-check-input");
    newItemCheck.setAttribute("type", "checkbox");
    newItemCheck.setAttribute("id", "flexCheckDefault");
    newItem.appendChild(newItemCheck);
  }
});
