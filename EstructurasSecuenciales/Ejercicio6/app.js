let btnCalcular = document.getElementById('btncalcular');

EventListener();

function EventListener() {

    btnCalcular.addEventListener('click', pulgadas);
}

function pulgadas() {

    let metros = Number(document.getElementById('Metros').value);

    let resultado = 0;
    resultado = metros * 39.370;

    let imprimirResultado = document.getElementById('Resultado');
    imprimirResultado.innerHTML = resultado;
}