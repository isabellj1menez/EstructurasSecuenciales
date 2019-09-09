let btnCalcular = document.getElementById('BtnTrajes');
let CostoTraje = document.getElementById('Traje');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', CalcularPrecio);
}

function CalcularPrecio() {

    let descuento = 0;

    let imprimir = document.getElementById('resultado');

    if (Number(CostoTraje.value) < 3600) {
        descuento = CostoTraje.value - (CostoTraje.value * .07);
        imprimir.innerText = descuento;
        return;

    }

    if (Number(CostoTraje.value) >= 3600) {
        descuento = CostoTraje.value - (CostoTraje.value * .16);
        imprimir.innerText = descuento;

        return;
    }


    //   if (Number(CostoTraje.value) >= 3600) {
    //     descuento = CostoTraje.value - (CostoTraje.value * .16);

    // }else{
    //   descuento = CostoTraje.value - (CostoTraje.value * .7);
    // }





}