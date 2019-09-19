let BtnCalcular = document.getElementById('BtnCalcular');

let Elementos = [];

EventListener();

function EventListener() {

    BtnCalcular.addEventListener('click', AddElements);

}

function AddElements() {

    let valor = document.getElementById('Agregarnumeros');
    let i = 0


    for (i = 0; i < Elementos.length; i++) {

        if (Number(valor.value) === Elementos[i]) return
    }

    Elementos[i] = Number(valor.value);

    let Datosimprimir = '';


    for (let x = 0; x < Elementos.length; x++) {
        Datosimprimir += `<li class="list-group-item">${Elementos[x]} </li>`
    }

    document.getElementById('ImprimirLista').innerHTML = Datosimprimir
}