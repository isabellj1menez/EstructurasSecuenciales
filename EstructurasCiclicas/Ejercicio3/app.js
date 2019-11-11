let BtnCalcular = document.getElementById('BtnCalcular');
let inputSueldo = document.getElementById('Sueldo');
let inputNumHoras = document.getElementById('NumHoras');
let imprimir = document.getElementById('Resultado');

let contador = 0;

EventListener();

function EventListener() {
    BtnCalcular.addEventListener('click', Validardatos);
}

function Validardatos() {
    if (inputSueldo.value == '' || inputNumHoras.value > 23) {
        imprimir.innerHTML = `Llena todos los campos correctamente`;
    } else {
        AgregarHoras()
    }

}

function AgregarHoras() {

    if (contador < 6) {
        contador++;

        let horas = Number(document.getElementById('NumHoras').value);

        let spanHoras = document.createElement('span');
        spanHoras.setAttribute('id', `NumHoras${contador}`);

        let textospan = document.createTextNode(horas);
        spanHoras.appendChild(textospan);

        let imprimirSpan = document.getElementById(`Dia${contador}`);
        imprimirSpan.appendChild(spanHoras);

    }
    CalcularSueldo();

}

function CalcularSueldo() {

    SueldoTotal = 0;
    SumaHoras = 0;

    for (let i = 1; i <= contador; i++) {

        let horas = document.getElementById(`NumHoras${i}`).textContent;
        SumaHoras += Number(horas);
        console.log(SumaHoras);

    }

    SueldoTotal = inputSueldo.value * SumaHoras;
    imprimir.innerHTML = `Las horas trabajadas son:  ${SumaHoras} <br> y el sueldo es:  $${SueldoTotal}`


}