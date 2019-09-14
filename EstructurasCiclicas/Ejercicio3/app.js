let BtnCalcular = document.getElementById('BtnCalcular');

let contador = 0;

EventListener();

function EventListener() {
    BtnCalcular.addEventListener('click', AgregarHoras);
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

    let sueldo = Number(document.getElementById('Sueldo').value);
    let imprimir = document.getElementById('Resultado');
    for (let i = 1; i <= contador; i++) {

        let horas = document.getElementById(`NumHoras${i}`).textContent;
        SumaHoras += Number(horas);
        console.log(SumaHoras);

    }

    SueldoTotal = sueldo * SumaHoras;
    imprimir.innerHTML = `Las horas trabajadas son:  ${SumaHoras} <br> y el sueldo es:  $${SueldoTotal}`



}