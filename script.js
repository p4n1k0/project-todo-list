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
const listaFilha = document.getElementsByTagName('li');
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
