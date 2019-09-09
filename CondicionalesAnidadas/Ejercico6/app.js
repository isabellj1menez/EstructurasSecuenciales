let BtnCalcularPresupuesto = document.getElementById('CalcularPresupuesto');

EventListener();

function EventListener() {
    BtnCalcularPresupuesto.addEventListener('click', CalcularPresupuesto);
}

function CalcularPresupuesto() {

    let Articulo1 = Number(document.getElementById('Articulo1').value);
    let Articulo2 = Number(document.getElementById('Articulo2').value);
    let Articulo3 = Number(document.getElementById('Articulo3').value);
    let Articulo4 = Number(document.getElementById('Articulo4').value);

    let Presupuesto = Number(document.getElementById('Presupuesto').value);

    let SumaArticulos = 0;
    SumaArticulos = Articulo1 + Articulo2 + Articulo3 + Articulo4;

    let imprimirResultado = document.getElementById('resultado');

    if (Presupuesto >= SumaArticulos) {

        imprimirResultado.innerHTML = `
      <h4 class="alert-heading text-center text-info"> “El precio está dentro del presupuesto”.</h4>
      `

    } else {

        imprimirResultado.innerHTML = `
      <h4 class="alert-heading text-center text-info"> “El precio está fuera del presupuesto”.</h4>
      `

    }

}