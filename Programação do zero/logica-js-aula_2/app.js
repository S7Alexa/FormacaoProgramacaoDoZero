alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let contagemTentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (chute == numeroSecreto) {
        break;
    } else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
        contagemTentativas++;
    }
}

let tentativaQuantidade = contagemTentativas > 1 ? "tentativas" : "tentativa";

if (chute > 1) {
    alert(`Você descobriu o número secreto depois de ${contagemTentativas} ${tentativaQuantidade}`);
}