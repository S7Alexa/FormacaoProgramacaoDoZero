//Exercicio 1

function exibirSaudacao() {
    console.log('Olá, mundo');
}

exibirSaudacao();

//Exercicio 2

function nomeInserido(nomeUsuario) {
    console.log(`Olá, ${nomeUsuario}`);
}

nomeInserido('Alexandra');

//Exercicio 3

function numeroDobrado(numeroInserido) {
    return numeroInserido * 2;
}

let resultadoDobrado = numeroDobrado(parseInt(prompt(`Digite um número`)));

console.log(resultadoDobrado);

//Exercicio 4

function mediaDeTres(numMedia1, numMedia2, numMedia3) {
    return (numMedia1 + numMedia2 + numMedia3) / 3;
}

console.log(mediaDeTres(parseFloat(prompt(`Digite o primeiro número`)), 
    parseFloat(prompt(`Digite o segundo número`)), parseFloat(prompt(`Digite o terceiro número`))));

//Exercicio 5

function maiorNumero(numMaior1, numMaior2) {
    return numMaior1 > numMaior2 ? numMaior1 : numMaior2;
}

console.log(maiorNumero(parseInt(prompt('Digite o primeiro número')), 
    parseInt(prompt('Digite o segundo número'))));

//Exercicio 6

function numeroPotencia (numero) {
    return numero * numero;
}

console.log(numeroPotencia(parseInt(prompt('Insira um número'))));