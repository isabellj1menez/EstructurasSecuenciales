let BtnNumerosPares = document.getElementById('BtnNumerosPares');
let SizaArray = document.getElementById('SizaArray')

EventListener();


function EventListener() {
    BtnNumerosPares.addEventListener('click', FillArray)
}

function FillArray() {
    let dataArray = [];
    let Datosimprimir = '';

    for (let i = 0; i < Number(SizaArray.value); i++) {
        dataArray[i] = Math.floor(Math.random() * 10);
        Datosimprimir += `<li class="list-group-item"> ${dataArray[i]} </li>`
    }
    document.getElementById('ImprimirListaA').innerHTML = Datosimprimir

    NumerosPares(dataArray)
}

function NumerosPares(dataArray) {

    let dataArrayPares = [];
    let DatosimprimirPAres = '';
    let contador = 0;

    for (let j = 0; j < dataArray.length; j++) {

        if (dataArray[j] % 2 == 0) {

            dataArrayPares[contador] = dataArray[j];

            DatosimprimirPAres += `<li class="list-group-item"> ${dataArrayPares[contador]} </li>`
            contador++
        }
        document.getElementById('ImprimirListaB').innerHTML = DatosimprimirPAres
    }

}