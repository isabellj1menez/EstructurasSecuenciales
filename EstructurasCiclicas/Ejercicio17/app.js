let BtnCalcularMonto = document.getElementById('BtnCalcularMonto');
let BtnAgregarVehiculo = document.getElementById('BtnAgregarVehiculo');
let Resultado = document.getElementById('Resultado');


let contador = 1;
let Vehiculos = '';
let impuestovehiculo = 0;
let TotalCategoria1 = 0;
let TotalCategoria2 = 0;
let TotalCategoria3 = 0;
let Total = 0;


EventListener();

function EventListener() {
    BtnAgregarVehiculo.addEventListener('click', AgregarVehiculo);
    BtnCalcularMonto.addEventListener('click', MostrarPagos);
}

function AgregarVehiculo() {

    let ClaveVehiculo = document.getElementById('ClaveVehiculo');
    let ValorVehiculo = document.getElementById('ValorVehiculo');

    if (isNaN(ValorVehiculo.value) || ClaveVehiculo.value == '' || ValorVehiculo.value == '') {
        contador--;
        console.log('ingresa los datos correctamente');
    } else {
        CalcularMonto()
        ClaveVehiculo.value = '';
        ValorVehiculo.value = '';
    }

    contador++;
}


function CalcularMonto() {

    if (ClaveVehiculo.value == 'Clave1') {
        impuestovehiculo = Math.round(ValorVehiculo.value * .10);
        TotalCategoria1 += impuestovehiculo;
        Total = TotalCategoria1 + TotalCategoria2 + TotalCategoria3;
    }

    if (ClaveVehiculo.value == 'Clave2') {
        impuestovehiculo = Math.round(ValorVehiculo.value * .70) / 10;
        TotalCategoria2 += impuestovehiculo;
        Total = TotalCategoria1 + TotalCategoria2 + TotalCategoria3;

    }

    if (ClaveVehiculo.value == 'Clave3') {
        impuestovehiculo = Math.round(ValorVehiculo.value * .50) / 10;
        TotalCategoria3 += impuestovehiculo;
        Total = TotalCategoria1 + TotalCategoria2 + TotalCategoria3;

    }

    Vehiculos += `El impuesto del vehiculo ${contador} es: ${impuestovehiculo}; `

}

function MostrarPagos() {
    Resultado.innerHTML = ` El pago total de la categoria1 es:${TotalCategoria1}<br>
    El pago total de la categoria2 es:${TotalCategoria2}<br>
    El pago total de la categoria3 es:${TotalCategoria3}<br>
    El pago total es:${Total} <br>
  
    ${Vehiculos}
    `
    contador = 1;
    Vehiculos = '';
    impuestovehiculo = 0;
    TotalCategoria1 = 0;
    TotalCategoria2 = 0;
    TotalCategoria3 = 0;
    Total = 0;

}