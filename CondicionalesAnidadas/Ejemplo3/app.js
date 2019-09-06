let btnCalificar = document.getElementById('BtnPromedio');

let Calificacion1 = document.getElementById('Calificacion1');
let Calificacion2 = document.getElementById('Calificacion2');
let Calificacion3 = document.getElementById('Calificacion3');

EventListener();

function EventListener() {

    btnCalificar.addEventListener('click', CalcularPromedio);

}

function CalcularPromedio() {

    let resultado = Number(Calificacion1.value) + Number(Calificacion2.value) + Number(Calificacion3.value);
    console.log(Number(Calificacion1.value));
    let imprimir = document.getElementById('resultado');


    //  Esta operacion es similar a escribir  resultado = resultado / 3;
    resultado /= 3;


    if (resultado >= 9) {
        imprimir.innerHTML = `<h4 class="alert-heading text-center text-info"> Aprobado ${resultado} </h4>`

    } else if (resultado < 9 && resultado > 6) {
        imprimir.innerHTML = `<h4 class="alert-heading text-center text-info"> regular ${resultado} </h4>`

    } else {
        imprimir.innerHTML = `<h4 class="alert-heading text-danger text-info"> Reprobado ${resultado} </h4>`
    }

}