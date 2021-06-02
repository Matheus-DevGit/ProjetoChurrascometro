/* Regras de Negócio */

// Carne - 400gr por Pessoa  + 6 hrs - 650gr
// Refrigerante/agua - 1000ml por pessoa + 6 hrs 1500ml
// Cerveja - 1200ml por pessoa + 6 hrs 2000ml
// Crianças valem 0,5

let inputAdutos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado")

function carnePorPessoa(duracao) {
    if (duracao >= 6) {
        return 650;
    }
    else {
        return 400;
    }
}

function cervejaPorPessoa(duracao) {
    if (duracao >= 6) {
        return 2000;
    }
    else {
        return 1200;
    }
}

function bebidasPorPessoa(duracao) {
    if (duracao >= 6) {
        return 1500;
    }
    else {
        return 1000;
    }
}
function calcular() {
    const adultos = inputAdutos.value;
    const criancas = inputCriancas.value;
    const duracao = inputDuracao.value;


    const qtTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas);
    const qtTotalCerveja = cervejaPorPessoa(duracao) * adultos;
    const qtTotalBebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao) / 2 * criancas);

    //coloca-se o "+" após o sinal de "=" para deixar entendido que preciso imprimir mais de um innerHTML

    resultado.innerHTML = `<h2 class="result-info">Você vai precisar de:</h2>`
    
    resultado.innerHTML += `
        <div class="result-block">
            <img src="./images/carne.svg"/>
            <p>${qtTotalCarne / 1000} Kg de Carne</p>
        </div>
    `

    resultado.innerHTML += `
        <div class="result-block">
            <img src="./images/cerveja.svg"/>
            <p>${Math.ceil(qtTotalCerveja / 355)} Latas de Cerveja</p>
        </div> 
    `

    resultado.innerHTML += `
        <div class="result-block">
            <img src="./images/bebida.svg"/>
            <p>${Math.ceil(qtTotalBebidas / 2000)} Garrafas de Bebidas de 2L</p>
        </div>
    `
}