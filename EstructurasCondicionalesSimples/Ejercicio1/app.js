let btnEdades = document.getElementById('btn_Calcular');

let Edad1 = Number(document.getElementById('edad1').value);
let Edad2 = Number(document.getElementById('edad2').value);


EventListener();

function EventListener() {
    btnEdades.addEventListener('click', compararvalores);
}

function compararvalores() {
    diferencia = 0;

    let imprimir = document.getElementById('Resultado');
    if (Edad1 == Edad2) {
        imprimir.innerText = 'Los hermanos tinen la misma edad';
        return;
    }

    if (Edad1 > Edad2) {
        diferencia = Edad1 - Edad2;
        imprimir.innerText = 'El hermano A es el mas grande';

    } else {
        diferencia = Edad2 - Edad1;
        imprimir.innerText = 'El hermano A es el mas grande';
    }

}