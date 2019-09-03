 let Calcular = document.getElementById('Calcular');

 EventListener();

 function EventListener() {

     Calcular.addEventListener('click', Areatriangulo);

 }

 function Areatriangulo() {

     let A = Number(document.getElementById('LadoA').value);
     let B = Number(document.getElementById('LadoB').value);
     let C = Number(document.getElementById('LadoC').value);


     let semiperimetro = 0,
         resultado = 0,
         area = 0;


     semiperimetro = (A + B + C) / 2;
     resultado = (semiperimetro * (semiperimetro - A) * (semiperimetro - B) * (semiperimetro - C));
     area = Math.sqrt(resultado);

     let imprimirresultado = document.getElementById('resultado');
     imprimirresultado.innerHTML = area;
 }