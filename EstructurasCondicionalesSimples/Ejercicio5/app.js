let btndescuento = document.getElementById('btnDescuento');

EventListener();

function EventListener() {

    btndescuento.addEventListener('click', Descuentos);

}

function Descuentos() {

    let compra = Number(document.getElementById('compra').value);
    let resultado = document.getElementById('PrecioFinal');

    if (compra > 1000) {

        let Descuento = 0;
        let CostoFinal = 0;
        Descuento = compra * .20;
        CostoFinal = compra - Descuento;

        resultado.innerHTML = CostoFinal;

    } else {
        resultado.innerHTML = compra;
    }
}