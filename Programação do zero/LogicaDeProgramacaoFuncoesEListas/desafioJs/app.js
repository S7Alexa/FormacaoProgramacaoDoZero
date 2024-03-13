let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function avisoClique() {
    console.log('O botão foi clicado');
};

function amorMasoquista() {
    console.log('Eu amo javascript');
};

function perguntaUsuario() {
    let cidadeUsuario = prompt('Em que cidade você mora?');

    alert(`Estive em ${cidadeUsuario} e lembrei de você`);
}

function somarNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro numero'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));

    let soma = primeiroNumero + segundoNumero;

    alert(`${primeiroNumero} + ${segundoNumero} = ${soma}`);
}