let newTask = document.getElementById('texto-tarefa');
let taskList = document.getElementById('lista-tarefas');
let taskBtn = document.getElementById('criar-tarefa');
taskBtn.addEventListener('click', addTask);

let rmTasksBtn = document.getElementById('apaga-tudo');
let svBtn = document.getElementById('salvar-tarefas');
let rmFinBtn = document.getElementById('remover-finalizados');
const rmSelectedBtn = document.getElementById('remover-selecionado')


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
  let task = document.createElement('li');
  task.innerText = newTask.value;
  task.addEventListener('click', clickTask);
  task.addEventListener('dblclick', lineTask);
  taskList.appendChild(task);
  newTask.value = '';
}

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

function createTagLi(task) {
  let li = document.createElement('li');
  let spam = document.createElement('span');
  spam.classList.add('textoTarefa');
  spam.innerHTML = task.name;
  li.appendChild(spam);

  return li;
}

function finalizads(e) {
  let iCompleted = e.target;
  if (iCompleted.classList.contains('completed')) {
    e.target.classList.remove('completed');
  } else {
    e.target.classList.add('completed');
  }
}
taskList.addEventListener('dblclick', finalizads);

rmBtn.addEventListener('click', function () {
  let finalizads = document.querySelectorAll('.completed');
})
