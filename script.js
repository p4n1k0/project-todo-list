const taskIpt = document.getElementById('texto-tarefa');
const taskBtn = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');


taskIpt.addEventListener('click', (e) => {
  let task = {
    name: taskIpt.value,
  }
  addTask(task)
});

function idGenerate() {
  return Math.floor(Math.random() * 5000);
}

function addTask(task) {
  let li = createTagLi(task);
  taskList.appendChild(li);
  taskIpt.value = '';
}

function createTagLi(task) {
  let li = document.createElement('li');
  let spam = document.createElement('span');
  spam.classList.add('textoTarefa');
  spam.innerHTML = task.name;

  let div = document.createElement('div');
  li.appendChild(spam);
  li.appendChild(div)

  return li;
}
