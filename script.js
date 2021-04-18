const elementButton = document.getElementById('criar-tarefa');
const list = document.querySelectorAll('#lista-tarefas');
const elementInput = document.querySelector('#texto-tarefa');

function addAssignment() {
  const newItem = document.createElement('li');
  newItem.innerText = elementInput.value;
  list[0].appendChild(newItem);
  elementInput.value = '';
}

// Criando Tarefa
elementButton.addEventListener('click', addAssignment);

function colorAssigment(elementClicked) {
  const elementLi = document.querySelectorAll('li');
  for (let index = 0; index < elementLi.length; index += 1) {
    elementLi[index].classList.remove('color');
  }
  elementClicked.target.classList.add('color');
}

// Selecionando Tarefa
const elementOl = document.getElementById('lista-tarefas');
elementOl.addEventListener('click', colorAssigment);

function lineThroughFunction(elementClicked) {
  if (elementClicked.target.classList.contains('completed')) {
    elementClicked.target.classList.remove('completed');
  } else {
    elementClicked.target.classList.add('completed');
  }
}

// Marca como completa a tarefa
elementOl.addEventListener('dblclick', lineThroughFunction);
