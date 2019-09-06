let inputNumero = document.getElementById('numeros');
let imprimir = document.getElementById('resultado');

EventListener();

function EventListener() {

    inputNumero.addEventListener('keypress', CalcularCifras);
    inputNumero.addEventListener('blur', CalcularCifrasBlur)

}

function CalcularCifrasBlur() {

    if (Number(inputNumero.value) <= 9) {
        imprimir.innerHTML = `<h4 class="alert-heading text-center text-info"> El numero  ${inputNumero.value}  es de 1 cifra </h4>`
        return;
    }
    if (Number(inputNumero.value) <= 99) {
        imprimir.innerHTML = `<h4 class="alert-heading text-center text-info"> El numero  ${inputNumero.value}  es de 2 cifra </h4>`
        return;
    }
    if (Number(inputNumero.value) <= 999) {
        imprimir.innerHTML = `<h4 class="alert-heading text-center text-info"> El numero  ${inputNumero.value}  es de 3 cifra </h4>`
        return;
    }
    if (Number(inputNumero.value) < 10000) {
        imprimir.innerHTML = `<h4 class="alert-heading text-danger text-info"> La cifra es incorrecta </h4>`
        return;
    }

}

function CalcularCifras(Event) {
    // console.log(Event);

    if (Event.key == "Enter") {
        console.log('se presiono enter');

        if (Number(inputNumero.value) > 999) {

            imprimir.innerHTML = `<h4 class="alert-heading text-danger text-info"> La cifra es incorrecta </h4>`

        }
        if (Number(inputNumero.value) <= 999) {

            imprimir.innerHTML = `<h4 class="alert-heading text-center text-info"> El numero ${inputNumero.value} es de 3 cifras </h4>`

        }
        if (Number(inputNumero.value) <= 99) {

            imprimir.innerHTML = `<h4 class="alert-heading text-center text-info"> El numero ${inputNumero.value}  es de 2 cifras </h4>`

        }
        if (Number(inputNumero.value) <= 9) {

            imprimir.innerHTML = `<h4 class="alert-heading text-center text-info"> El numero  ${inputNumero.value}  es de 1 cifra </h4>`

        }

    }
}