let BtnAgregarNumeros = document.getElementById('BtnAgregarNumeros');
let BtnCalcular = document.getElementById('BtnCalcular');
let Numeros = document.getElementById('Numeros');
let imprimirresultado = document.getElementById('resultado');

EventListener();

function EventListener() {
    BtnAgregarNumeros.addEventListener('click', AgregarNumeros);
}

function AgregarNumeros() {

    if (Number(Numeros.value) % 1 == 0 && Number(Numeros.value) > 0) {

        CalcularNumeros();

    } else {
        imprimirresultado.innerText = "ingresa un numero positivo entero";
    }

}
let SumaNumeros = 0;
let Sumainpares = 0;

function CalcularNumeros() {

    for (let i = 0; i <= 3; i++) {

        let num = prompt(`Numero ${i+1}`);
        console.log(num);

        if (Number(num) % 2 != 0) {
            Sumainpares = Sumainpares + Number(num);
            console.log(Sumainpares)
        }

    }

    SumaNumeros += Number(Numeros.value);
    console.log(SumaNumeros)

}