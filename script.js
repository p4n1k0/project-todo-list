//Elementos do HTML
let botao = document.getElementById('criar-tarefa');
let input = document.getElementById('texto-tarefa');
let listaPai = document.getElementById('lista-tarefas');

//Adiciona tarefas a listaOl usando input e button
function adicionaItem() {
    const li = document.createElement('li');
    li.innerHTML = input.value;
    listaPai.appendChild(li);
    input.value = '';

}
botao.addEventListener('click', adicionaItem);

function selecionaElemento(elemento) {
    const el = elemento.target;

    if (el.tagName === 'Li') {
        el.style.backgroundColor = 'gray';
    }
}
document.addEventListener('click', selecionaElemento);


