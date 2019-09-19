let BtnAgregarElementos = document.getElementById('BtnAgregar');
let BtnMostrarElementos = document.getElementById('BtnMostrar');

//  Declaracion global del array
let Elementos = [];
// Declarar contador global
contador = 0;

EventListener();

function EventListener() {
    BtnAgregarElementos.addEventListener('click', AgregarElementos);
    BtnMostrarElementos.addEventListener('click', MostrarElementos);
}

function AgregarElementos() {

    if (contador < 10) {

        // let valorInput = document.getElementById('AgregarElemento').value;

        // Elementos[contador] = valorInput;
        let valorInput = document.getElementById('AgregarElemento');
        Elementos[contador] = valorInput.value;
        valorInput.value = "";
        contador++;
    }
}

function MostrarElementos() {
    let informacionImprimir = "";

    for (let i = 0; i < Elementos.length; i++) {
        informacionImprimir += `<li class="list-group-item"> ${Elementos[i]}</li>`
    }

    contador = 0;
    document.getElementById('listaimprimir').innerHTML = informacionImprimir;

}