let imprimirSerie = document.getElementById('Resultado');
let numeroserie = 0;
let resultado = '';

Serienumerica();

function Serienumerica() {

    for (let i = 0; numeroserie < 1800; i++) {
        numeroserie += +2;
        resultado = `${resultado} ${numeroserie},`
        numeroserie += +3
        resultado = `${resultado} ${numeroserie},`
    }

    imprimirSerie.innerText = resultado

}