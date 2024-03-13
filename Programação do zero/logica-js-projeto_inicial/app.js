alert('Primeiro programa da Alexandra');
let numeroSecreto = 22;
console.log('Valor do número secreto:', numeroSecreto);

let chute = prompt('Escolha um numero entre 1 e 100');
console.log('Valor do chute:', chute);

console.log('Resultado da comparação:', chute == numeroSecreto);

if (numeroSecreto == chute ) {
    alert(`Acertou o número ${numeroSecreto}`);
} else {
    alert('Erro! ' + chute + 'não é o número secreto');
}