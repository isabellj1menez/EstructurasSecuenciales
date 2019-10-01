let BtnMultiplicarNum = document.getElementById('BtnMultiplicarNum');

EventListener();

function EventListener() {
    BtnMultiplicarNum.addEventListener('click', FillArray)
}

function FillArray() {
    let dataArray = [];
    let Datosimprimir = '';

    for (let i = 0; i < 10; i++) {
        dataArray[i] = Math.floor(Math.random() * (100, 50));
        Datosimprimir += `<li class="list-group-item"> ${dataArray[i]} </li>`
    }
    document.getElementById('ImprimirListaA').innerHTML = Datosimprimir

    MulNumeros(dataArray)
}

function MulNumeros(dataArray) {

    let dataArrayB = [];
    let DatosimprimirB = '';

    for (let x = 0; x < dataArray.length; x++) {

        console.log(dataArray[x])

        dataArrayB[x] = dataArray[x] * 0.5;
        DatosimprimirB += `<li class="list-group-item"> ${dataArrayB[x]} </li>`

    }
    document.getElementById('ImprimirListaB').innerHTML = DatosimprimirB
}