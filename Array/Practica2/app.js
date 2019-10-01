let BtnAgregarElementos = document.getElementById('BtnAgregar');
let BtnMostrarElementos = document.getElementById('BtnMostrar');

let Elementos = [];
contador = 0;

EventListener();

function EventListener() {
    BtnAgregarElementos.addEventListener('click', AgregarElementos);
    // BtnMostrarElementos.addEventListener('click', MostrarElementos);
}

function AgregarElementos() {

    if (contador < 10) {
        let valorInput = document.getElementById('AgregarElemento');
        Elementos[contador] = valorInput.value;
        valorInput.value = "";
        contador++;
        informacionImprimir += `<li class="list-group-item"> ${Elementos[i]}</li>`
    }
}


// function MostrarElementos() {

//     let dataArrayPares = [];
//     let DatosimprimirPAres = '';
//     let contador = 0;

//     for (let j = 0; j < Elementos.length; j++) {

//         if (Elementos[j] % 2 == 0) {

//             dataArrayPares[contador] = Elementos[j];

//             DatosimprimirPAres += `<li class="list-group-item"> ${dataArrayPares[contador]} </li>`
//             contador++
//         }
//         document.getElementById('ImprimirListaB').innerHTML = DatosimprimirPAres
//     }

// }