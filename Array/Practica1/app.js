let BtnOperaciones = document.getElementById('BtnOperaciones');


EventListener();

function EventListener() {
    BtnOperaciones.addEventListener('click', FillArrays);
}

function FillArrays() {

    let InputValue = document.getElementById('SizaArray');
    let dataArrayA = [];
    let dataArrayB = [];
    let DatosimprimirA = '';
    let DatosimprimirB = '';

    for (let i = 0; i < Number(InputValue.value); i++) {
        dataArrayA[i] = Math.floor(Math.random() * (100, -100))
        dataArrayB[i] = Math.floor(Math.random() * (100, -100))
        DatosimprimirA += `<li class="list-group-item"> ${dataArrayA[i]} </li>`
        DatosimprimirB += `<li class="list-group-item"> ${dataArrayB[i]} </li>`
    }
    document.getElementById('ImprimirListaA').innerHTML = DatosimprimirA
    document.getElementById('ImprimirListaB').innerHTML = DatosimprimirB


    OperacionesValores(dataArrayA, dataArrayB);
}

function OperacionesValores(dataArrayA, dataArrayB) {

    let dataArrayC = [];
    let DatosimprimirC = '';
    let Operaciones = document.getElementById('Operaciones').value;

    if (Operaciones == 'Suma') {

        for (let x = 0; x < dataArrayA.length; x++) {

            dataArrayC[x] = dataArrayA[x] + dataArrayB[x];
            DatosimprimirC += `<li class="list-group-item"> ${dataArrayC[x]} </li>`

        }

    }
    if (Operaciones == 'Resta') {

        for (let x = 0; x < dataArrayA.length; x++) {

            dataArrayC[x] = dataArrayB[x] - dataArrayA[x];
            DatosimprimirC += `<li class="list-group-item"> ${dataArrayC[x]} </li>`

        }

    }
    if (Operaciones == 'Multiplicacion') {

        for (let x = 0; x < dataArrayA.length; x++) {

            dataArrayC[x] = dataArrayB[x] * dataArrayA[x];
            DatosimprimirC += `<li class="list-group-item"> ${dataArrayC[x]} </li>`

        }

    }

    document.getElementById('ImprimirListaC').innerHTML = DatosimprimirC
}