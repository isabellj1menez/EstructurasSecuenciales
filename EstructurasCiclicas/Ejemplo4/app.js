let BtnAgregarAhorro = document.getElementById('BtnAgregarAhorro');

let contador = 0;

EventListener();

function EventListener() {
    BtnAgregarAhorro.addEventListener('click', AgregarAhoro);
}

function AgregarAhoro() {

    if (contador < 12) {
        contador++;

        let ahorro = Number(document.getElementById('AhorroMensual').value);


        let spanAhorro = document.createElement('span');
        spanAhorro.setAttribute('id', `AhorroMensual${contador}`)

        let textospan = document.createTextNode(ahorro);
        spanAhorro.appendChild(textospan);

        let ImprimirSpan = document.getElementById(`Mes${contador}`);
        ImprimirSpan.appendChild(spanAhorro);

        CalcularAhorro();
    }

}

function CalcularAhorro() {


    suma = 0;
    for (let i = 1; i <= contador; i++) {
        let valorObtenido = document.getElementById(`AhorroMensual${i}`).textContent;
        suma += Number(valorObtenido);
    }

    let imprimirAhorroTotal = document.getElementById('Total');
    // let spanTotal = document.createElement('span');
    // let textoTotal = document.createTextNode(suma);

    // spanTotal.appendChild(textoTotal);
    // imprimirAhorroTotal.appendChild(spanTotal);

    imprimirAhorroTotal.innerHTML = `<span>$${suma}</span>`


}