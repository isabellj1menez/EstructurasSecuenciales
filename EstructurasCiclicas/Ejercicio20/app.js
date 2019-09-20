let BtnAgregarNumero = document.getElementById('AgregarNumero');
let Resultado = document.getElementById('Resultado');
let valor = document.getElementById('InputNumber');
let contador = 0;
let contadorPositivo = 0;
let SumaTotal = 0;
let SumaPositivos = 0;

EventListener();

function EventListener() {
    BtnAgregarNumero.addEventListener('click', AgregarNumero);
}

function AgregarNumero() {

    if (!isNaN(valor.value)) {
        do {
            if (Number(valor.value) > 0) {
                contadorPositivo++;
                contador++;
                SumaPositivos += Number(valor.value);
                SumaTotal += Number(valor.value);
                console.log(Number(valor.value));
                console.log(SumaTotal)
            } else {

                contador++
                SumaTotal += Number(valor.value);
                console.log(SumaTotal)

            }
            Resultado.innerHTML = ` la cantidad de números mayores que 0 son:  ${contadorPositivo} 
        <br> El promedio de los números positivos es:  ${SumaPositivos/contadorPositivo}
        <br> El promedio de todos los números es: ${SumaTotal/contador}`
        } while (valor.value == isNaN)

    }
}