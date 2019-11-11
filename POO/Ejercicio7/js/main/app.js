const formulario = document.getElementById('cotizar-seguro');

EventListener();
LlenarSelectAño();

function EventListener() {
    formulario.addEventListener('submit', CotizarSeguro);
}

function CotizarSeguro(Event) {
    Event.preventDefault();
    const marcaSeleccionada = document.getElementById('marca').value;
    const anio = document.getElementById('anio').value;
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    const interfaz = new Interfaz();

    if (marcaSeleccionada == "" || anio == "" || tipo == "") {
        interfaz.mostrarMensaje('Faltan datos, revisar el formulario y prueva de nuevo', 'error');
    } else {

        const resultado = document.querySelector('#resultado div');
        if (resultado != null) {
            resultado.remove();
        }

        const seguro = new Seguros(marcaSeleccionada, anio, tipo);

        const cantidad = seguro.CotizarSeguros();

        interfaz.MostrarResultado(seguro, cantidad);
        interfaz.mostrarMensaje('Cotizando...', 'exito');
    }
}

function LlenarSelectAño() {
    const max = new Date().getFullYear();
    const min = max - 20;

    const SelectAnios = document.getElementById('anio');

    //
    for (let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.innerHTML = i;
        SelectAnios.appendChild(option);
    }
}