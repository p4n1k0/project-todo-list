//Elementos do HTML
let botao = document.getElementById('criar-tarefa');
let input = document.getElementById('texto-tarefa');
let listaOl = document.getElementById('lista-tarefas');

//Adiciona tarefas a listaOl usando input e button
botao.addEventListener('click', function(event) {
    let li = document.createElement('li');
    let task = input.value;
    li.innerText = task;
    li.className = 'lista';
    listaOl.appendChild(li);
    input.value = '';
})