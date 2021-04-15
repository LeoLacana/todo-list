let elementButton = document.getElementById('criar-tarefa');
let list = document.querySelector('#lista-tarefas');
let elementInput = document.querySelector('#texto-tarefa');

function addAssignment(value) {
  let newItem = document.createElement('li');
  newItem.innerText = elementInput.value;
  list.appendChild(newItem);
  elementInput.value = '';
}

elementButton.addEventListener('click', addAssignment);
