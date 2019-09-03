 let btnCalificacion = document.getElementById('btnCalificar');

 EventListener();

 function EventListener() {
     btnCalificacion.addEventListener('click', verificarStatus);
 }

 function verificarStatus() {

     let calificacion = Number(document.getElementById('Calificacion').value);
     let imprimirResultado = document.getElementById('imprimirCalificacion');

     if (calificacion > 8) {

         imprimirResultado.innerHTML = 'Aprobado';

     } else {
         let audio = document.getElementById('AudioReprobado');
         audio.play();
         imprimirResultado.innerHTML = 'reprobado';
     }


 }