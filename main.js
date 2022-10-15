import TodoVO from './src/model/vos/TodoVO.js';

const domInpTodoTitle = document.getElementById('inpTodoTitle');
const domBtnCreateTodo = document.getElementById('btnCreateTodo');
const domListOfTodos = document.getElementById('listOfTodos');

domBtnCreateTodo.addEventListener('click', onBtnCreateTodoClick);

const LOCAL_LIST_OF_TODOS = 'listOfTodos';

const localListOfTodos = localStorage.getItem(LOCAL_LIST_OF_TODOS);
const listOfTodos = localListOfTodos != null ? JSON.parse(localListOfTodos) : [];

console.log('> Initial value -> listOfTodos', listOfTodos);

renderTodoListInContainer(listOfTodos, domListOfTodos);

function onBtnCreateTodoClick(event) {
  // console.log('> domBtnCreateTodo -> handle(click)', event);
  const todoTitleValueFromDomInput = domInpTodoTitle.value;
  // console.log('> domBtnCreateTodo -> todoInputTitleValue:', todoTitleValueFromDomInput);
  if (validateTodoInputTitleValue(todoTitleValueFromDomInput)) {
    listOfTodos.push(createTodoVO(todoTitleValueFromDomInput));
    localStorage.setItem(LOCAL_LIST_OF_TODOS, JSON.stringify(listOfTodos));
    renderTodoListInContainer(listOfTodos, domListOfTodos);
  }
}

function validateTodoInputTitleValue(value) {
  const isInputValueString = typeof value === 'string';
  const isInputValeNotNumber = isNaN(parseInt(value));

  const result = isInputValueString && isInputValeNotNumber && value.length > 0;

  console.log('> validateTodoInputTitleValue -> result', {
    result,
    isInputValueString,
    isInputValeNotNumber,
  });
  return result;
}

function createTodoVO(title) {
  const todoId = Date.now().toString();
  return new TodoVO(todoId, title);
}

function renderTodoListInContainer(list, container) {
  let output = '';
  let item;
  for (let index in list) {
    item = list[index];
    output += `<li>${item.title}</li>`;
  }
  container.innerHTML = output;
}
