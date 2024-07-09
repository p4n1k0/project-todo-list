const taskIpt = document.getElementById('texto-tarefa');
const taskBtn = document.getElementById('criar-tarefa');
const deleteTaskBtn = document.getElementById('apaga-tudo');
const svBtn = document.getElementById('salvar-tarefas');
const rmBtn = document.getElementById('remover-finalizados');
const taskList = document.getElementById('lista-tarefas');


taskIpt.addEventListener('click', (e) => {
  let task = {
    name: taskIpt.value,
  }
  addTask(task)
});

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
  li.appendChild(spam);

  return li;
}
