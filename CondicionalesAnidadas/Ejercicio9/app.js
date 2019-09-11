let BtnMultiplo = document.getElementById('BtnMultiplo');

EventListener();

function EventListener() {
    BtnMultiplo.addEventListener('click', ComprobarMultiplo);
}

function ComprobarMultiplo() {

    let Numero1 = Number(document.getElementById('Numero1').value);
    let Numero2 = Number(document.getElementById('Numero2').value);
    let Imprimir = document.getElementById('resultado');

    let resto1 = 0;
    let resto2 = 0;

    resto1 = Numero1 % Numero2;
    resto2 = Numero2 % Numero1;

    if (resto1 == 0 || resto2 == 0) {
        Imprimir.innerHTML = `Los numeros son multiplos`
    } else {
        Imprimir.innerHTML = `Los numeros no son multiplos`
    }
}