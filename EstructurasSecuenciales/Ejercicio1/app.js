let BtnDistancia = document.getElementById('BtnCalcular');

EventListener();

function EventListener() {
    BtnDistancia.addEventListener('click', distancia);
}

function distancia() {

    let metros = Number(document.getElementById('MetroSegundos').value);
    let segundos = Number(document.getElementById('Segundos').value);

    distancia = metros * segundos;

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = distancia;
}