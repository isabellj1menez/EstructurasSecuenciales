let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', CalcularTarifa);
}

function CalcularTarifa() {

    let horas = Number(document.getElementById('Horas').value);
    let costotarifa = 0;

    let imprimirResultado = document.getElementById('Resultado');



    if (horas <= 2) {
        costotarifa = horas * 5;
        console.log(costotarifa);
    }
    if (horas < 6 && horas >= 3) {
        costotarifa = (horas * 4) + 2;
        console.log(costotarifa);
    }
    if (horas < 10 && horas >= 6) {
        costotarifa = (horas * 3) + 7;
        console.log(costotarifa);
    }

    if (horas >= 10) {
        costotarifa = (horas * 2) + 16;
        console.log(costotarifa);
    }

    imprimirResultado.innerText = costotarifa






}