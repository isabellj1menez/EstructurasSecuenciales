let BtnULAM = document.getElementById('BtnULAM');

EventListener();

function EventListener() {

    BtnULAM.addEventListener('click', ULAM);

}


function ULAM() {

    let InputNumero = Number(document.getElementById('InputNumero').value);
    let resultado = '';
    let imprimirresultado = document.getElementById('resultado');
    let aux = InputNumero;


    if (InputNumero % 1 == 0 && InputNumero > 0) {
        do {
            if ((InputNumero % 2) == 0) {

                InputNumero = InputNumero / 2;
                resultado = `${resultado} ${InputNumero}`

            } else {
                InputNumero = (InputNumero * 3) + 1;
                resultado = `${resultado} ${InputNumero}`

            }
            console.log(InputNumero);


        } while (InputNumero != 1)

        imprimirresultado.innerText = aux + resultado;

    } else {
        imprimirresultado.innerText = "ingresa un numero positivo entero";
    }

}