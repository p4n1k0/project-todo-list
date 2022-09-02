// elementos html
const taskIpt = document.getElementById('texto-tarefa');
const taskBtn = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

function addTask() {
  taskIpt.addEventListener('click', () => {
    const createLi = document.createElement('li');

    taskList.appendChild(createLi);
    createLi.innerText = taskBtn.value;
    taskBtn.value = '';
  });
}

addTask();

const getLi = document.getElementById('li'); // elemento html lista de tarefas criadas

function changeBackground() {
  getLi.addEventListener('click', (change) => {
    for (let i = 0; i < getLi.length; i += 1) {
      if (getLi[i].className === 'gray') {
        getLi[i].classList.remove('gray');
      }
      if (getLi[i].className !== 'gray') {
        change.target.classList.add('gray');
      }
    }
  });
}

changeBackground();
