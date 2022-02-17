//Elementos do HTML
let botao = document.getElementById('criar-tarefa');
let input = document.getElementById('texto-tarefa');
let listaPai = document.getElementById('lista-tarefas');

//Adiciona tarefas a listaPai usando input e button
function adicionaItem() {
    botao.addEventListener('click', function (){
        const criaLi = document.createElement('li');
        listaPai.appendChild(criaLi);
        criaLi.innerText = input.value;
        input.value = ''; 
    });
} 

adicionaItem();

//Muda a cor de bg ao clicar em algum item da lista
const listaFilha = document.getElementsByTagName('li'); // elemento html
function mudaBgLi() {
    listaPai.addEventListener('click', function (event) {
        
        for (let i = 0; i < listaFilha.length; i += 1) {
            
            if (listaFilha[i].className === 'gray') {
                listaFilha[i].classList.remove('gray')
            }
            if (listaFilha[i].className !== 'gray') {
                event.target.classList.add('gray');
            }
        }
    });
}
mudaBgLi();

//Riscando tarefa completada
//ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
function completaTarefa() {
    listaPai.addEventListener('dblclick', function (event) {
        const elemento = event.target;

        if (elemento.className.includes('completed')) {
            elemento.classList.remove('completed');
        } else {
            elemento.classList.add('completed');
        }
    });
} 
completaTarefa();   