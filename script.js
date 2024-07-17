let newTask = document.getElementById('texto-tarefa');
let taskList = document.getElementById('lista-tarefas');
let taskBtn = document.getElementById('criar-tarefa');
taskBtn.addEventListener('click', addTask);

let rmTasksBtn = document.getElementById('apaga-tudo');
const svBtn = document.getElementById('salvar-tarefas');
let rmFinBtn = document.getElementById('remover-finalizados');
const rmSelectedBtn = document.getElementById('remover-selecionado')
const mvUpBtn = document.getElementById('mover-cima');


rmTasksBtn.addEventListener('click', function () {
  let confirmed = window.confirm('Tem certeza que deseja excluir?');

  if (confirmed) {
    taskList.innerText = '';
    localStorage.removeItem('lista');
  }
});

function clickTask(click) {
  const clicked = document.querySelectorAll('li');

  for (let i = 0; i < clicked.length; i += 1) {
    clicked[i].classList.remove('selectedItem');
    click.target.classList.add('selectedItem')
  }
}

function lineTask(click) {
  if (click.target.classList.contains('completed')) {
    click.target.classList.remove('completed');
  } else {
    click.target.classList.add('completed');
  }
}

// Fonte clickTask e lineTask Luis Castro trybe

function addTask() {
  const task = document.createElement('li');
  task.innerText = newTask.value;
  task.className = 'tarefa'
  task.addEventListener('click', clickTask);
  task.addEventListener('dblclick', lineTask);
  taskList.appendChild(task);
  newTask.value = '';
}

taskList.addEventListener('click', (event) => {
  const selectedTask = event.target;
  if (event.target.className === 'tarefa') {
    for (let i = 0; i < taskItems.length; i += 1) {
      taskItems[i].style.removeProperty('background-color');
    }
    selectedTask.style.backgroundColor = 'gray';
  }
});

taskList.addEventListener('dblclick', (e) => {
  const selectedTask = e.target;

  if (e.target.className === 'tarefa') {
    selectedTask.className += 'completed';
  } else if (e.target.className === 'tarefa completed') {
    selectedTask.className = 'tarefa';
  }
});

rmFinBtn.addEventListener('click', function () {
  let element = document.querySelectorAll('.completed');

  for (let t = 0; t < element.length; t += 1) {
    element[t].remove();
  };
});

rmSelectedBtn.addEventListener('click', () => {
  const taskSelected = document.querySelector('.selectedItem');
  taskSelected.remove()
});

function finalizads(e) {
  const iCompleted = e.target;
  if (iCompleted.classList.contains('completed')) {
    e.target.classList.remove('completed');
  } else {
    e.target.classList.add('completed');
  }
}
taskList.addEventListener('dbclick', finalizads);

function saveTask() {
  const tasks = taskList.innerHTML;
  localStorage.setItem('tasks', tasks)
}

function initRenderization() {
  if (localStorage.getItem('tasks') === null) {
    localStorage.setItem('tasks', '');
  } else {
    const taskStorage = localStorage.getItem('tasks');
    taskList.innerHTML = taskStorage;
  }
}

svBtn.addEventListener('click', saveTask);

window.onload = () => {
  initRenderization();
}
