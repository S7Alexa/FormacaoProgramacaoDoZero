alert("Exercicios do curso Lógica de programação: mergulhe em programação com JavaScript");

//exercicios 1 e 2, contador crescente e decrescente

let contadorCrescente = 1;
let contadorDescrescente = 10;

while (contadorCrescente <= 10 && contadorDescrescente >= 1) {
    alert(`${contadorCrescente}, ${contadorDescrescente}`);

    contadorCrescente++;
    contadorDescrescente--;
}

//exercícios 3 e 4, contagem crescente e decrescente com prompt

let contagemRegressiva = prompt('Digite um numero e iremos subtraí-lo até 0');
let contagemProgressiva = prompt('Digite um número e iremos somar de 0 até este número');
let zero = 0;

console.log(contagemRegressiva);
console.log(contagemProgressiva);

while (contagemRegressiva >= 0) {
    alert(`Contagem regressiva> ${contagemRegressiva}`);
    contagemRegressiva--; 
}

while (zero <= contagemProgressiva) {
    alert(`Contagem progressiva> ${zero}`);
    zero++;
}

//desafio final da aula Boas Práticas de Programação

//Tarefas 1, 2, 3 e 4

console.log("Bem-vinde!");

let nome = prompt("Digite seu nome");

console.log(`Olá, ${nome}!`);

let linguagemFavorita = prompt(`${nome}, qual a linguagem de programação que você mais gosta?`);

console.log(linguagemFavorita);

//Tarefas 5 e 6

let valor1 = parseInt(Math.random() * 10 + 1);
let valor2 = parseInt(Math.random() * 10 + 1);

let resultadoSoma = valor1 + valor2;
console.log(`${valor1} + ${valor2} = ${resultadoSoma}`);

let valor3 = parseInt(Math.random() * 10 + 1);
let valor4 = parseInt(Math.random() * 10 + 1);

let resultadoSubt = valor3 - valor4;
console.log(`${valor3} - ${valor4} = ${resultadoSubt}`);

//Tarefa 7

let idadeUsuario = prompt(`${nome}, digite sua idade`);

if (idadeUsuario >= 18) {
    console.log('Maior de idade');
} else {
    console.log('Menor de idade');
}

//Tarefa 8

let numero = prompt(`${nome}, digite um numero`);

if (numero == 0) {
    console.log(`Número (${numero}) igual a zero`);
} else if (numero > 0) {
    console.log(`Número (${numero}) maior que zero`);
} else {
    console.log(`Número (${numero}) menor que zero`);
}

//Tarefa 9

let numeroAteDez = 1;

while (numeroAteDez <= 10) {;
    console.log(numeroAteDez);

    numeroAteDez++;
}

//Tarefa 10

let notaEscola = prompt(`${nome}, digite sua nota na escola`);

if (notaEscola <= 7) {
    console.log('Aprovade');
} else {
    console.log('Reprovade');
}

//Tarefas 11, 12 e 13

console.log(Math.random());
console.log(parseInt(Math.random() * 10 + 1));
console.log(parseInt(Math.random() * 1000 + 1));