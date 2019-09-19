CalcularSueldo();

function CalcularSueldo() {

    let Sueldo = 1500;
    let imprimirresultado = document.getElementById('Resultado');
    let resultado = '';


    for (let i = 0; i <= 5; i++) {
        Sueldo = Sueldo + (Sueldo * .10);
        Sueldo = Math.round(Sueldo * 100) / 100;
        resultado = `${resultado} ${Sueldo},`

    }
    imprimirresultado.innerHTML = resultado;

}