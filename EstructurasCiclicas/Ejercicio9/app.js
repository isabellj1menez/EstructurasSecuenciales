let BtnFIBONACCI = document.getElementById('BtnFIBONACCI');

EventListener();

function EventListener() {
    BtnFIBONACCI.addEventListener('click', Fibonacci);

}

function Fibonacci() {

    let Valor = document.getElementById('InputNumero').value;
    let Numero1 = 0;
    let Numero2 = 1;
    let Resultado = 0;
    let imprimirResultado = document.getElementById('Resultado');

    for (let i = 0; Resultado <= Valor; i++) {
        Resultado = Numero1 + Numero2;
        imprimirResultado.innerText = Numero2
        Numero1 = Numero2;
        Numero2 = Resultado
    }

}