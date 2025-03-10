/*alert serve para disparar uma mensagem na tela*/
alert('Boa vindas ao jogo do número secreto');

/*let é a variável utilizada no JS aonde atribuimmos um nome e um valor a essa var*/
/*prompt serve para podermos interagir com usuário fazendo ele escrever*/
let numeroSecreto = 15;
let chute = prompt('Escolha um número entre 1 e 30');
console.log(numeroSecreto)

//if e else é um método de comparação, serve para comparar condições e 
//valores e ver se está correto
// console serve para o desenvolvedor acompanhar o código e ver se está tudo nos conformes
// para concatenar valores, utilizamos a crase e para mostrar o valor da var usamos o ${}

if (numeroSecreto == chute) {
   alert('Você descobriu o número secreto' + numeroSecreto);
} else {
   alert('você errou!')
}