let btnpresupuesto = document.getElementById('BtnClientes');


EventListener();

function EventListener() {
    btnpresupuesto.addEventListener('click', presupuesto);
}

function presupuesto() {
    let Clientes = Number(document.getElementById('NumeroClientes').value);

    let resultado = 0;
    let imprimirR = document.getElementById('resultado');

    if (Clientes <= 200) {
        resultado = 95 * Clientes;

        imprimirR.innerHTML = `<h4> El presupuesto total  para ${Clientes} personas es de ${resultado}</h4>`

    } else if (Clientes <= 300 && Clientes > 200) {

        resultado = 85 * Clientes;

        imprimirR.innerHTML = `<h4> El presupuesto total  para ${Clientes} personas es de ${resultado}</h4>`

    } else {

        resultado = 75 * Clientes;
        imprimirR.innerHTML = `<h4> El presupuesto total  para ${Clientes} personas es de ${resultado}</h4>`

    }

}