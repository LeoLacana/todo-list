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
  const elementLi = document.querySelectorAll('li');
  for (let index = 0; index < elementLi.length; index += 1){
    elementLi[index].classList.remove('color');
  }
  elementClicked.target.classList.add('color');
}

elementButton.addEventListener('click', addAssignment);

const elementOl = document.getElementById('lista-tarefas');
elementOl.addEventListener('click', colorAssigment);
