let btnCalcular = document.getElementById('Calcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', gastos);
}

function gastos() {


    let dias = Number(document.getElementById('dias').value);
    let hotel = Number(document.getElementById('Hotel').value);
    let comida = Number(document.getElementById('Comida').value);

    let resultado = 0;
    resultado = (hotel + comida + 100) * dias;

    let imprimirResultado = document.getElementById('Resultado');
    imprimirResultado.innerHTML = resultado;
}