let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirConteudoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial() {
    exibirConteudoNaTela('h1', 'Hora do Desafio');
    exibirConteudoNaTela('p', 'Descubra o número de 0 a 10:');
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if (chute == numeroSecreto) {
        exibirConteudoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirConteudoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirConteudoNaTela('p', 'O número secreto é menor');
        } else {
            exibirConteudoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparInput();
    }
}

function limparInput() {
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparInput();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}