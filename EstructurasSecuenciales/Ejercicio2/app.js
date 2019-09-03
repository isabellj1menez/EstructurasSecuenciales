let botton = document.getElementById('btnCalcular');

EventListener();

function EventListener() {

    botton.addEventListener('click', preguntas);

}

function preguntas() {

    let correctas = Number(document.getElementById('Correctas').value);
    let incorrectas = Number(document.getElementById('Incorrectas').value);
    let sincontestar = Number(document.getElementById('sinContestar').value);

    let resultado = 0;

    resultado = (correctas * 4) + (incorrectas * -1);

    let imprimirresultado = document.getElementById('Resultado');
    imprimirresultado.innerHTML = resultado;
}