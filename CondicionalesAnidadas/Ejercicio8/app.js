let BtnNumero = document.getElementById('BtnNumero');

EventListener();

function EventListener() {

    BtnNumero.addEventListener('click', NumeroRevez);

}

function NumeroRevez() {

    let Numero = Number(document.getElementById('numero').value);
    let Imprimir = document.getElementById('resultado');
    let Centena = 0;
    let Unidades = 0;

    if (Numero < 1000 && Numero > 99) {

        Unidades = Math.floor(Numero % 10);
        Centena = Math.floor(Numero / 100);
        console.log(Unidades);
        console.log(Centena);


        if (Unidades == Centena) {
            Imprimir.innerText = "El número es igual al inverso";
        } else {
            Imprimir.innerText = "El número no es igual al inverso";
        }

    } else {
        Imprimir.innerText = "debes ingresar un número de tres cifras";

    }

}