const formulario = document.getElementById('agregar-gasto');
let CantidadPresupuesto;

evenListener();

function evenListener() {
    formulario.addEventListener('submit', GuardarPresupuesto);
    document.addEventListener('DOMContentLoaded', IniciarAplicacion)
}


async function IniciarAplicacion() {
    const { value: PresupuestoIngresado } = await Swal.fire({
        title: 'Ingrese presupuesto',
        input: 'text',
        inputPlaceholder: 'Ingresa tu presuppuesto '
    })

    if (!PresupuestoIngresado) {
        window.location.reload();
        return;
    }

    if (isNaN(PresupuestoIngresado)) {
        window.location.reload();
        return;
    }

    CantidadPresupuesto = new Presupuesto(PresupuestoIngresado);

    const ui = new Interfaz();

    ui.insertarPresupuesto(CantidadPresupuesto.presupuesto);
    // ui.insertarPresupuesto(PresupuestoIngresado);
}

function GuardarPresupuesto(event) {
    event.preventDefault();

    const nombreGasto = document.querySelector('#gasto');
    const cantidadGasto = document.querySelector('#cantidad');

    nombreGasto.disabled = true;
    cantidadGasto.disabled = true;

    const ui = new Interfaz();

    if (isNaN(cantidadGasto.value)) {
        ui.imprimirMensaje('Solo datos numericos en cantidad', 'error', nombreGasto, cantidadGasto);
        return;
    }

    if (nombreGasto.value === '' || cantidadGasto.value === '') {
        ui.imprimirMensaje('Hubo un error', 'error', nombreGasto, cantidadGasto);
        return;
    }


    ui.imprimirMensaje('Correcto', 'correcto', nombreGasto, cantidadGasto);
    ui.agregarGastoListado(nombreGasto.value, cantidadGasto.value);
    ui.presupuestoRestante(cantidadGasto.value);

}