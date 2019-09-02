let btnCalcutar = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcutar.addEventListener('click', hipotenusa);
}

function hipotenusa() {

    let ladoA = Number(document.getElementById('ladoA').value);
    let ladoB = Number(document.getElementById('ladoB').value);

    let resultado = 0;
    resultado = ((ladoA * ladoA) + (ladoB * ladoB));

    let imprimirResultado = document.getElementById('resultado');
    imprimirResultado.innerHTML = resultado;
}