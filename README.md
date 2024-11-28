# Boas vindas ao repositório do projeto Lista de Tarefas!

Aqui você vai encontrar os detalhes de como foi estruturado o desenvolvimento do projeto à partir desse repositório.

---

# Sumário

- [Habilidades](#habilidades)
- [Entregáveis](#entregáveis)
  - [O que foi desenvolvido](#o-que-foi-desenvolvido)
  - [Antes de começar a desenvolver](#antes-de-começar-a-desenvolver)
  - [Linter](#linter)
  - [Cypress](#cypress)
- [Requisitos do projeto](#requisitos-do-projeto)

    `Requisitos obrigatórios:`
    - [1 - Adicone à sua lista o título "Minha Lista de Tarefas" em uma tag <header>](#1---adicone-à-sua-lista-o-título-minha-lista-de-tarefas-em-uma-tag-)
    - [2 - Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"](#2---adicione-abaixo-do-título-um-pequeno-e-discreto-parágrafo-com-idfuncionamento-e-com-o-texto-clique-duas-vezes-em-um-item-para-marcá-lo-como-completo)
    - [3 - Adicione um input com o id="texto-tarefa" onde o usuário poderá digitar o nome do item que deseja adicionar à lista](#3---adicione-um-input-com-o-idtexto-tarefa-onde-o-usuário-poderá-digitar-o-nome-do-item-que-deseja-adicionar-à-lista)
    - [4 - Adicione uma lista ordenada de tarefas com o id="lista-tarefas"](#4---adicione-uma-lista-ordenada-de-tarefas-com-o-idlista-tarefas)
    - [5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo](#5---adicione-um-botão-com-idcriar-tarefa-e-ao-clicar-nesse-botão-um-novo-item-deverá-ser-criado-ao-final-da-lista-e-o-texto-do-input-deve-ser-limpo)
    - [6 - Ordene os itens da lista de tarefas por ordem de criação](#6---ordene-os-itens-da-lista-de-tarefas-por-ordem-de-criação)
    - [7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza](#7---clicar-em-um-item-da-lista-deve-alterar-a-cor-de-fundo-do-item-para-cinza)
    - [8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo](#8---não-deve-ser-possível-selecionar-mais-de-um-elemento-da-lista-ao-mesmo-tempo)
    - [9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item](#9---clicar-duas-vezes-em-um-item-ele-deverá-ser-riscado-indicando-que-foi-completo-deve-ser-possível-desfazer-essa-ação-clicando-novamente-duas-vezes-no-item)
    - [10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista](#10---adicione-um-botão-com-idapaga-tudo-que-quando-clicado-deve-apagar-todos-os-itens-da-lista)
    - [11 - Adicione um botão com id="remover-finalizados" que quando clicado remove **somente** os elementos finalizados da sua lista](#11---adicione-um-botão-com-idremover-finalizados-que-quando-clicado-remove-somente-os-elementos-finalizados-da-sua-lista)

    `Requisitos bônus:`
    - [12 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava](#12---adicione-um-botão-com-idsalvar-tarefas-que-salve-o-conteúdo-da-lista-se-você-fechar-e-reabrir-a-página-a-lista-deve-continuar-no-estado-em-que-estava)
    - [13 - Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas](#13---adicione-dois-botões-um-com-idmover-cima-e-outro-com-idmover-baixo-que-permitam-mover-o-item-selecionado-para-cima-ou-para-baixo-na-lista-de-tarefas)
    - [14 - Adicione um botão com id="remover-selecionado" que, quando clicado, remove o item selecionado](#14---adicione-um-botão-com-idremover-selecionado-que-quando-clicado-remove-o-item-selecionado)
- [Depois de terminar o desenvolvimento](#depois-de-terminar-o-desenvolvimento)
- [Revisando um pull request](#revisando-um-pull-request)
- [Avisos Finais](#avisos-finais)

# Habilidades

- Manipular CSS

- Manipular Javascript

--- 

## O que foi desenvolvido

- Foi desenvolvido uma lista de tarefas usando `HTML`, `CSS` e `JavaScript`.

---

### 🗒ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * `git clone git@github.com:p4n1k0/project-todo-list.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd project-todo-list`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`

---


## Linter

Para garantir a qualidade do código, vamos utilizar neste projeto os linters `ESLint` e `StyleLint`.
Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível
e de fácil manutenção! Para rodá-los localmente no projeto, execute os comandos abaixo:

```bash
npm run lint
npm run lint:styles
```

Quando é executado o comando `npm run lint:styles`, ele irá avaliar se os arquivos com a extensão `CSS` estão com o padrão correto.

Quando é executado o comando `npm run lint`, ele irá avaliar se os arquivos com a extensão `JS` e `JSX` estão com o padrão correto.

---

## Cypress

Cypress é uma ferramenta de teste de front-end desenvolvida para a web.
Você pode rodar o cypress localmente para verificar se seus requisitos estão passando, para isso execute o um dos seguintes comandos:

Para executar os testes apenas no terminal:

```bash
npm test
```

Para executar os testes e vê-los rodando em uma janela de navegador:

```bash
npm run cypress:open
```

***ou***

```bash
npx cypress open
```

Após executar um dos dois comandos acima, será aberta uma janela de navegador e então basta clicar no nome do arquivo de teste que quiser executar (project.spec.js), ou para executar todos os testes clique em Run all specs

Você também pode assistir a [este](https://vimeo.com/539240375/a116a166b9) vídeo 😉🎙

**Para rodar o cypress é preciso ter rodado o comando npm install anteriormente.**

---

## Requisitos Obrigatórios:

### 1 - Adicione à sua lista o título "Minha Lista de Tarefas" em uma tag <header>

**O que será verificado:**

- Será verificado se sua página possui uma tag `header` com o conteúdo `Minha Lista de Tarefas`

### 2 - Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"

**O que será verificado:**

- Será verificado que existe na sua página um elemento com o id `funcionamento` com o conteúdo `Clique duas vezes em um item para marcá-lo como completo`

### 3 - Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista

**O que será verificado:**

- Será verificada a existência de um elemento do tipo `input` com o id `texto-tarefa`.

### 4 - Adicione uma lista ordenada de tarefas com o id="lista-tarefas"

**O que será verificado:**

- Será verificada a existência de um elemento `ol` com o id `lista-tarefas`.

### 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo

**O que será verificado:**

- Será verificada a existência de um elemento do tipo `button` com o id `criar-tarefa`

- No campo de input será digitado o texto de uma tarefa qualquer e, em seguida, clicar-se-á no botão de criar tarefa. Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input.

- A adição de elementos na lista será feita algumas vezes, e será checado se todos os itens criados permanecem na lista na medida em que novos são adicionados.

### 6 - Ordene os itens da lista de tarefas por ordem de criação

**O que será verificado:**

- Três itens serão criados na lista e será checado se eles estão ordenados por ordem de criação - ou seja, primeiro o primeiro item criado, depois o segundo, e assim por diante.

### 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza

**O que será verificado:**

> **Atenção, a cor deve ser alterada para para o nome da cor (gray) e não qualquer outro padrão de cores.**

- Será verificado que, ao se carregar a página, os itens da lista **não tem** o estilo CSS `background-color: gray`;

- Será verificado que, ao se clicar em um item da lista, ele passa a ter o estilo CSS `background-color: gray`.

### 8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo

**O que será verificado:**

- Será verificado que, quando um elemento da lista é selecionado, o elemento selecionado previamente deixa de sê-lo. Isso é verificado através da presença ou não do estilo `background-color: gray` no elemento.

### 9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item

    Pontos importantes sobre este requisito:

    * Crie uma classe CSS com o nome "completed" e defina a propriedade "text-decoration" com o valor "line-through".

    * Utilize a classe CSS "completed" para adicionar o efeito de letra tachada (riscada) às tarefas finalizadas.

**O que será verificado:**

- Será verificado que, antes da ação ser disparada, o elemento adicionado à lista não tem nem a classe `completed` nem o estilo `line-through solid black`.

- Será verificado que a ação pedida é disparada mediante duplo clique no elemento da lista e que os elementos da lista completos tem em si a classe `completed` e a propriedade `text-decoration` com o valor `line-through solid black`

- Será verificado que, com um segundo duplo clique, um elemento completo deixa de sê-lo

### 10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista

**O que será verificado:**

- Será verificado que existe um elemento `button` com o id `apaga-tudo`

- Será verificado que, dado que uma lista possui tarefas, um clique no botão a deixa vazia

### 11 - Adicione um botão com id="remover-finalizados" que quando clicado remove **somente** os elementos finalizados da sua lista

**O que será verificado:**

- Será verificado que existe um elemento `button` com o id `remover-finalizados`

- Será verificado que, ao clicar no botão, todos os elementos marcados como feitos são removidos da lista

## BÔNUS

### 12 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava

**O que será verificado:**

- Será verificado que existe um elemento `button` com o id `salvar-tarefas`

- Será verificado que, quando a lista tiver vários elementos, alguns dos quais marcados como finalizados, um recarregamento da página mantém a lista exatamente como está.

### 13 - Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas

    Pontos importantes sobre este requisito bônus:

    * Antes de começar a desenvolver essa funcionalidade, pare e pense. O que significa mover um item de uma lista para cima ou para baixo no **_DOM_**? Você já possui todas as habilidades necessárias para fazer isso.

    * Habitue-se a pensar nos casos especiais ao construir programas. O que acontece se o usuário tentar mover o primeiro item para cima ou o último para baixo?

**O que será verificado:**

- Será verificada a existência de dois elementos `button`, um com o id `mover-cima` e o outro com o id `mover-baixo`

- Será verificado que, dado que diversos elementos foram acrescentados à lista, movimentá-los de formas diversas os deixa nas posições esperadas

- Será verificado que, caso algum elemento esteja finalizado, este status deve persistir ainda que se mova o elemento

- Será verificado que, caso nenhum elemento esteja selecionado, clicar nos botões não altera a lista

- Será verificado que um elemento que esteja selecionado deve se manter selecionado mesmo depois de movido

- _Caso especial!_ Será verificado que, caso se tente subir o elemento no topo da lista ou, caso se tente descer o último elemento da lista, esta não deve ser alterada

### 14 - Adicione um botão com id="remover-selecionado" que, quando clicado, remove o item selecionado

**O que será verificado:**

- Será verificada a presença de um elemento `button` com um id `remover-selecionado`

- Será verificado que, no clicar no botão, somente o elemento selecionado é removido

---
---



Link: [FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH)

O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?

---
