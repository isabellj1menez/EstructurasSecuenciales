let BtnCalificar = document.getElementById('BtnCalificar');

EventListener();

function EventListener() {
    BtnCalificar.addEventListener('click', CalcularPromedio);
}

function CalcularPromedio() {

    let Calificacion1 = Number(document.getElementById('Calificacion1').value);
    let Calificacion2 = Number(document.getElementById('Calificacion2').value);
    let Calificacion3 = Number(document.getElementById('Calificacion3').value);
    let Calificacion4 = Number(document.getElementById('Calificacion4').value);

    let promedio = 0;




}