/*alert('Boas vindas ao site!');
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

alert('Erro! Preencha todos os campos');

let mensagemDeErro = 'Erro! Preencha todos os campos';
alert(mensagemDeErro);

let nome = prompt('Digite seu nome');
let idade = prompt('Digite sua idade');

if (idade >= 18) {
    alert('Pode tirar a habilitação!'); 
} else {
    alert('Idade insuficiente para tirar habilitação');
}*/

//Exercícios da aula 2

//2.1

alert('Qual o dia da semana?');

let diaChutado = prompt('Qual o dia da semana?');

if (diaChutado == 'Sábado' || diaChutado == 'Domingo') {
    alert('Bom finde');
} else {
    alert('Boa semana');
}

//2.2

let numeroPositOuNeg = prompt('Digite um numero');

if (numeroPositOuNeg >= 0) {
    alert('Número positivo');
} else {
    alert('Número negativo');
}

//2.3

let sistemaPontos = prompt('Digite a pontuação no jogo:');

if (sistemaPontos >= 100) {
    alert('Parabéns, você venceu!');
} else {
    alert('Tente novamente para ganhar');
}

//2.4

let saldoConta = 1500;

alert(`Saldo disponível: R$${saldoConta}`);

//2.5

let nomeUsuario = prompt('Digite seu nome:');

alert('Bem vinde ' + nomeUsuario + '!');