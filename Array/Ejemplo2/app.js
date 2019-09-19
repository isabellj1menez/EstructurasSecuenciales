let BtnAgregarElementos = document.getElementById('BtnAgregar');
let BtnCalcularMedia = document.getElementById('BtnCalcularMedia');

//  Declaracion global del array
let Elementos = [];
// Declarar contador global
contador = 0;

EventListener();

function EventListener() {
    BtnAgregarElementos.addEventListener('click', AgregarElementos);
    BtnCalcularMedia.addEventListener('click', CalcularMedia);
}

function AgregarElementos() {

    if (contador < 10) {

        let valorInput = document.getElementById('AgregarElemento');
        Elementos[contador] = Number(valorInput.value);
        console.log(Elementos);

        valorInput.value = "";
        contador++;
    }
}

function CalcularMedia() {
    let promedio = 0;

    for (let i = 0; i < Elementos.length; i++) {
        promedio += Elementos[i];
    }
    promedio /= Elementos.length;
    contador = 0;
    Elementos = [];

    let Imprimir = `<li class="list-group-item"> El promedio de los numeros otorgados es: ${promedio} </li>`


    document.getElementById('listaimprimir').innerHTML = Imprimir;

}