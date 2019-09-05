let btnNumeros = document.getElementById('BtnNumeros');

EventListener();

function EventListener() {
    btnNumeros.addEventListener('click', CalcularNumeros);
}

function CalcularNumeros() {
    let numero1 = Number(document.getElementById('Numero1').value);
    let numero2 = Number(document.getElementById('Numero2').value);
    let numero3 = Number(document.getElementById('Numero3').value);

    let imprimirResultado = document.getElementById('resultado');

    if (numero1 > numero2) {

        if (numero1 > numero3) {

            imprimirResultado.innerHTML = `
          <h4 class="alert-heading text-center text-info">El numero ${numero1} es el numero mayor </h4>
          `
        } else {
            imprimirResultado.innerHTML = `
          <h4 class="alert-heading text-center text-info">El numero ${numero3} es el numero mayor </h4>
          `
        }

    } else {
        if (numero2 > numero3) {
            imprimirResultado.innerHTML = `
        <h4 class="alert-heading text-center text-info">El numero ${numero2} es el numero mayor </h4>
        `
        } else {
            imprimirResultado.innerHTML = `
        <h4 class="alert-heading text-center text-info">El numero ${numero3} es el numero mayor </h4>
        `
        }
    }


}