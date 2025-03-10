/*alert serve para disparar uma mensagem na tela*/
alert('Boa vindas ao jogo do número secreto');

/*let é a variável utilizada no JS aonde atribuimmos um nome e um valor a essa var*/
/*prompt serve para podermos interagir com usuário fazendo ele escrever*/
let numeroSecreto = 29;
let chute = prompt('Escolha um número entre 1 e 30');

/*if e else é um método de comparação, serve para comparar condições e 
valores e ver se está correto*/

if (numeroSecreto == chute) {
   console.log('Você descobriu o número secreto');
}