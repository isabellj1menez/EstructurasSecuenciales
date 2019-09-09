let btnviaje = document.getElementById('BtnViaje');

EventListener();

function EventListener() {
    btnviaje.addEventListener('click', Calcularviaje);
}

function Calcularviaje() {

    let Presupuesto = Number(document.getElementById('Presupuesto').value);
    let kilometro = Number(document.getElementById('kilometro').value);

    const Mexico = 750,
        PuertoVallarta = 800,
        Acapulco = 1200,
        Cancun = 1800;

    let resutado = document.getElementById('viaje');


    if (Presupuesto < (Mexico * kilometro) * 2) {

        resutado.innerText = 'Lo siento no ajustas ningun viaje';

    }
    if (Presupuesto < (PuertoVallarta * kilometro) * 2 &&
        Presupuesto >= (Mexico * kilometro) * 2) {

        resutado.innerText = 'Tu destino es México';

    }
    if (Presupuesto < (Acapulco * kilometro) * 2 &&
        Presupuesto >= (PuertoVallarta * kilometro) * 2) {

        resutado.innerText = 'Tu destino es Puerto Vallarta';

    }
    if (Presupuesto < (Cancun * kilometro) * 2 &&
        Presupuesto >= (Acapulco * kilometro) * 2) {

        resutado.innerText = 'Tu destino es Acapulco';

    }
    if (Presupuesto >= (Cancun * kilometro) * 2) {

        resutado.innerText = 'Tu destino es Cancun';

    }




}