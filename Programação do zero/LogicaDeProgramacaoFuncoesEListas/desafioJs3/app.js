//Exercício 1

function indiceIMC(altura, peso) {
    let calculoIMC = peso / (altura * altura);
    return calculoIMC;
}

console.log(parseFloat(indiceIMC(1.75, 61.5)));

//Exercicio 2

function calculoFatorial(numeroFatorial) {
    if (numeroFatorial === 0 || numeroFatorial === 1) {
        return 1;
    }

    let fatorial = 1;
    for (let i = 2; i <= numeroFatorial; i++) {
        fatorial *= i;
    }

    return fatorial;
}

console.log(calculoFatorial(5));

//Exercicio 3

function converterDolar(valorDolar) {
    return parseFloat(4.80 * valorDolar).toFixed(2);
}

console.log(converterDolar(prompt('insira um valor em Reais(R$)')));

//Exercicio 4

function calculoAreaPerimetroRetangulo(alturaRetangulo, larguraRetangulo) {
    let areaRetangulo = alturaRetangulo * larguraRetangulo;
    let perimetroRetangulo = 2 * (alturaRetangulo + larguraRetangulo);
    console.log(`Area> ${areaRetangulo}\nPerimetro> ${perimetroRetangulo}`);
}

calculoAreaPerimetroRetangulo(2, 4);

//Exercicio 5

function calculoAreaPerimetroCirculo(raio) {
    let areaCirculo = Math.PI * (raio * raio);
    let perimetroCirculo = 2 * Math.PI * raio;
    console.log(`Area> ${areaCirculo.toFixed(3)}\nPerimetro> ${perimetroCirculo.toFixed(3)}`);
}

calculoAreaPerimetroCirculo(2);

//Exercicio 6

function tabuada(numeroTabuada) {
    let multiplicacao = 0;
    for (let i = 1; i <= 10; i++) {
        multiplicacao = numeroTabuada * i;
        console.log(`${numeroTabuada} * ${i} = ${multiplicacao}`);
    }
}

tabuada(2);