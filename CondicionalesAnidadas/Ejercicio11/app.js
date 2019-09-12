let BtnUvas = document.getElementById('BtnUvas');

EventListener();

function EventListener() {
    BtnUvas.addEventListener('click', PrecioFinal);
}

function PrecioFinal() {

    let PrecioKilo = Number(document.getElementById('PrecioKilo').value);
    let TiposUvas = document.getElementById('TiposUvas').value;
    let TamañoUvas = document.getElementById('TamañoUvas').value;
    let imprimir = document.getElementById('resultado');

    let PrecioFinal = 0;




    if (TiposUvas == 'TipoA') {
        if (TamañoUvas == 'Tamaño1') {
            PrecioFinal = PrecioKilo + .20;
            imprimir.innerText = PrecioFinal;
        } else {
            PrecioFinal = PrecioKilo + .30;
            imprimir.innerText = PrecioFinal;
        }

    } else if (TiposUvas == 'TipoB') {
        if (TamañoUvas == 'Tamaño1') {
            PrecioFinal = PrecioKilo - .30;
            imprimir.innerText = PrecioFinal;

        } else {
            PrecioFinal = PrecioKilo - .50;
            imprimir.innerText = PrecioFinal;
        }
    }
}