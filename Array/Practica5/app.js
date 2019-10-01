let BtnDescendente = document.getElementById('BtnDescendente');

EventListener();

function EventListener() {
    BtnDescendente.addEventListener('click', FillArray);
}

function FillArray() {
    let dataArray = [];
    let Datosimprimir = '';


    for (let i = 2; i < 100; i++) {

        if (i % 1 == 0) {
            console.log(i)

        }

        //     dataArray[contador] = i;
        // Datosimprimir += `<li class="list-group-item"> ${dataArray[i]} </li>`
        // conta
    }





}
// document.getElementById('ImprimirListaA').innerHTML = Datosimprimir