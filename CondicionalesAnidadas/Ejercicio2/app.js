let btnCalcular = document.getElementById('BtnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', CalcularCosto);
}

function CalcularCosto() {

    let Kilometros = Number(document.getElementById('Kilometros').value);
    let Personas = Number(document.getElementById('Personas').value);
    let Autobus = document.getElementById('Autobus').value;

    let CostoPersona = 0;
    let CostoTotal = 0;

    if (Personas < 20) {
        if (Autobus == 'A') {
            CostoTotal = (Kilometros * 1.5) * 20;
            console.log(CostoTotal);
            return;
        }
        if (Autobus == 'B') {
            CostoTotal = (Kilometros * 2) * 20;
            console.log(CostoTotal);
            return;
        }
        if (Autobus == 'C') {
            CostoTotal = (Kilometros * 2.5) * 20;
            console.log(CostoTotal);
            return;
        }
        if (Autobus == 'D') {
            CostoTotal = (Kilometros * 3) * 20;
            console.log(CostoTotal);
            return;
        }
    }
    if (Personas >= 20) {
        if (Autobus == 'A') {
            CostoTotal = Personas * (Kilometros * 1.5);
            console.log(CostoTotal);
            return;
        }
        if (Autobus == 'B') {
            CostoTotal = Kilometros * 2;
            console.log(CostoTotal);
            return;
        }
        if (Autobus == 'C') {
            CostoTotal = Kilometros * 2.5;
            console.log(CostoTotal);
            return;
        }
        if (Autobus == 'D') {
            CostoTotal = Kilometros * 3;
            console.log(CostoTotal);
            return;
        }
    }
}