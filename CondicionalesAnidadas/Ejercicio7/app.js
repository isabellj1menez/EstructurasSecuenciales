let BtnCalificar = document.getElementById('BtnCalificar');

EventListener();

function EventListener() {
    BtnCalificar.addEventListener('click', CalcularPromedio);
}

function CalcularPromedio() {

    let Calificacion1 = Number(document.getElementById('Calificacion1').value);
    let Calificacion2 = Number(document.getElementById('Calificacion2').value);
    let Calificacion3 = Number(document.getElementById('Calificacion3').value);
    let Calificacion4 = Number(document.getElementById('Calificacion4').value);

    let promedio = 0;

    let imprimirResultado = document.getElementById('imprimir');

    if (Calificacion1 < Calificacion2 && Calificacion1 < Calificacion3 && Calificacion1 < Calificacion4) {

        promedio = (Calificacion2 + Calificacion3 + Calificacion4) / 3;

        imprimirResultado.innerHTML = `
        <h4 class="alert-heading text-center text-info"> la calificacion mas baja es ${Calificacion1}. <br>
        El promedio es ${promedio}
        </h4>
        `
        return;
    }
    if (Calificacion2 < Calificacion1 && Calificacion2 < Calificacion3 && Calificacion2 < Calificacion4) {

        promedio = (Calificacion1 + Calificacion3 + Calificacion4) / 3;

        imprimirResultado.innerHTML = `
        <h4 class="alert-heading text-center text-info"> la calificacion mas baja es ${Calificacion2}. <br>
        El promedio es ${promedio}
        </h4>
        `
        return;
    }
    if (Calificacion3 < Calificacion2 && Calificacion3 < Calificacion1 && Calificacion3 < Calificacion4) {

        promedio = (Calificacion2 + Calificacion3 + Calificacion4) / 3;

        imprimirResultado.innerHTML = `
        <h4 class="alert-heading text-center text-info"> la calificacion mas baja es ${Calificacion3}. <br>
        El promedio es ${promedio}
        </h4>
        `
        return;
    }
    if (Calificacion4 < Calificacion2 && Calificacion4 < Calificacion3 && Calificacion4 < Calificacion1) {

        promedio = (Calificacion2 + Calificacion3 + Calificacion4) / 3;

        imprimirResultado.innerHTML = `
        <h4 class="alert-heading text-center text-info"> la calificacion mas baja es ${Calificacion4}. <br>
        El promedio es ${promedio}
        </h4>
        `
        return;
    }

    if (Calificacion1 == Calificacion2 && Calificacion1 == Calificacion3 && Calificacion1 == Calificacion4) {

        promedio = (Calificacion2 + Calificacion3 + Calificacion4 + Calificacion4) / 4;

        imprimirResultado.innerHTML = `
        <h4 class="alert-heading text-center text-info"> 
        El promedio es ${promedio}
        </h4>
        `
        return;
    }