let elementButton = document.getElementById('criar-tarefa');
let list = document.querySelectorAll('#lista-tarefas');
let elementInput = document.querySelector('#texto-tarefa');

function addAssignment() {
  let newItem = document.createElement('li');
  newItem.innerText = elementInput.value;
  list[0].appendChild(newItem);
  elementInput.value = '';
}

function colorAssigment(elementClicked) {
  elementClicked.target.classList.add('color');
}

elementButton.addEventListener('click', addAssignment);

const elementLi = document.getElementById('lista-tarefas');
elementLi.addEventListener('click', colorAssigment);