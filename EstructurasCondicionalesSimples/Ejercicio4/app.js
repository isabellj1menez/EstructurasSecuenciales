let boton = document.getElementById('btnboton');
let clave = document.getElementById('Clave');

EventListener();

function EventListener() {
    boton.addEventListener('click', datos);
    clave.addEventListener('blur', validacionclave);
}

function validacionclave(Event) {

    if (clave.value > 2) {
        Event.target.focus();
    }

}

function datos() {
    console.log(clave.value);


    let imprimir = document.getElementById('resultado');
    let nombre = document.getElementById('Nombre').value;
    let precioO = Number(document.getElementById('Precio').value);
    let precioDescuento = 0;

    if (clave.value == 0) {

        imprimir.innerHTML = 'El nombre del producto es: ' + nombre + '<br/>' + 'El producto no tiene descuento ' + '<br/>' + 'El precio original del producto es: ' + precioO;
        return;
    }


    if (clave.value == 1) {

        precioDescuento = precioO - (precioO * .10);

        imprimir.innerHTML = 'El nombre del producto es: ' + nombre + '<br/>' + 'La clave del producto es: ' + clave.value + '<br/>' + 'El precio original del producto es: ' + precioO + '<br/>' + 'El precio con el 10% de descuento es: ' + precioDescuento;

    } else if (clave.value == 2) {

        precioDescuento = precioO - (precioO * .20);

        imprimir.innerHTML = 'El nombre del producto es: ' + nombre + '<br/>' + 'La clave del producto es: ' + clave.value + '<br/>' + 'El precio original del producto es: ' + precioO + '<br/>' + 'El precio con el 20% de descuento es: ' + precioDescuento;

    } else {
        imprimir.innerHTML = 'la clave no es valida'
    }

}