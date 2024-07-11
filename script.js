const taskIpt = document.getElementById('texto-tarefa');
const taskBtn = document.getElementById('criar-tarefa');
taskBtn.addEventListener('click', addTask);

const rmTaskBtn = document.getElementById('apaga-tudo');
const svBtn = document.getElementById('salvar-tarefas');
const rmBtn = document.getElementById('remover-finalizados');
const taskList = document.getElementById('lista-tarefas');


function clickTask(click) {
  let clicked = document.querySelectorAll('li');

  for (i = 0; i < clicked.length; i += 1) {
    clicked[i].classList.remove('selectedItem');
    click.target.classList.add('selectedItem')
  }
}

// Fonte clickTask Luis Castro trybe

function addTask() {
  let newTask = document.getElementById('texto-tarefa');
  let taskList = document.getElementById('lista-tarefas');
  let task = document.createElement('li');
  task.innerText = newTask.value;
  task.addEventListener('click', clickTask);
  taskList.appendChild(task);
  newTask.value = '';
}

function createTagLi(task) {
  let li = document.createElement('li');
  let spam = document.createElement('span');
  spam.classList.add('textoTarefa');
  spam.innerHTML = task.name;
  li.appendChild(spam);

  return li;
}

function color(click) {
  let itemsList = document.querySelectorAll('li');
  for (let i = 0; i < itemsList.length; i += 1) {
    itemsList[i].classList.remove('set')
  }
  click.target.classList.add('set');
}
taskList.target.classList('click', color);

function finalizads(e) {
  let iCompleted = e.target;
  if (iCompleted.classList.contains('completed')) {
    e.target.classList.remove('completed');
  } else {
    e.target.classList.add('completed');
  }
}
taskList.addEventListener('dblclick', finalizads);

rmTaskBtn.addEventListener('click', function() {
  let checked = window.confirm('Tem certeza que deseja excluir?!');
  if(checked) {
    taskList.innerHTML = '';
    localStorage.removeItem('lista')
  }
})
rmBtn.addEventListener('click', function() {
  let finalizads = document.querySelectorAll('.completed');
})
