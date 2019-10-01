let BtnCapicua = document.getElementById('BtnCapicua');

EventListener();

function EventListener() {
    BtnCapicua.addEventListener('click', VerificarCapicua);
}

function VerificarCapicua() {

    let Numero = Number(document.getElementById('Numero').value);
    let Imprimir = document.getElementById('resultado');
    let Unidad = 0;
    let Decena = 0;
    let Centena = 0;
    let UMillar = 0;


    if (Numero < 9999 && Numero > 1000) {
        Unidad = Math.floor(Numero % 10);
        Decena = Math.floor((Numero % 100) / 10);
        Centena = Math.floor((Numero % 1000) / 100);
        UMillar = Math.floor((Numero % 10000) / 1000);

        if (UMillar == Unidad && Decena == Centena) {
            Imprimir.innerText = "El número es capicua";
        } else {
            Imprimir.innerText = "El número no es capicua";
        }

    } else {
        Imprimir.innerText = "El número no es capicua";
    }


    if (Numero < 1000 && Numero > 99) {

        Unidades = Math.floor(Numero % 10);
        Centena = Math.floor(Numero / 100);
        console.log(Unidades);
        console.log(Centena);


        if (Unidades == Centena) {
            Imprimir.innerText = "El número es capicua";
        } else {
            Imprimir.innerText = "El número no es capicua";
        }

    } else {
        Imprimir.innerText = "El número no es capicua";

    }


    if (Numero < 100 && Numero > 0) {

        Unidades = Math.floor(Numero % 10);
        Decena = Math.floor((Numero % 100) / 10);
        console.log(Unidades);
        console.log(Centena);


        if (Unidades == Decena) {
            Imprimir.innerText = "El número es capicua";
        } else {
            Imprimir.innerText = "El número no es capicua";
        }

    } else {
        Imprimir.innerText = "El número no es capicua";

    }
}