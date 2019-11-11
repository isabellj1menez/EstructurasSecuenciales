class Interfaz {

    mostrarMensaje(mensaje, tipo) {
        const div = document.createElement('div');

        if (tipo == 'error') {
            div.classList.add('mensaje', 'error')
        } else {
            div.classList.add('mensaje', 'correcto')
        }

        div.innerHTML = `${mensaje}`;

        formulario.insertBefore(div, document.querySelector('.form-group'));

        setTimeout(function() {
            //funcion asincrona ( se sigue leyendo el codigo aunque no se termine de ejecutar la funcion)
            document.querySelector('.mensaje').remove();
        }, 5000);
    }


    MostrarResultado(seguro, total) {
        const resultado = document.getElementById('resultado');
        let marca;

        switch (seguro.marca) {
            //Se cambia el valor de marca para que aparesca el nombre y no el valor del select
            case '1':
                marca = 'Americano';
                break;
            case '2':
                marca = 'Asiatico';
                break;
            case '3':
                marca = 'Europeo';
                break;
        }

        const div = document.createElement('div');
        div.innerHTML = ` 
        <p class="header">Cotizacion:</p>
         <p>Marca: ${marca}</p>
         <p>Año:${seguro.anio}</p>
         <p>Tipo: ${seguro.tipo} </p>
         <p>Total: ${total} </p>
         `;

        const spinner = document.querySelector('#cargando img');
        spinner.style.display = 'block';

        console.log(div)

        setTimeout(function() {
            spinner.style.display = 'none';
            resultado.appendChild(div);
        }, 3000)

    }
}