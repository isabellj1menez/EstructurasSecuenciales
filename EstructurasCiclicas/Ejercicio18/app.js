 let BtnAgregarNumeros = document.getElementById('BtnAgregarNumeros');
 let imprimirresultado = document.getElementById('resultado');
 let SumaPares = 0;;
 let Sumaimpares = 0;
 let contador = 0;
 let promedio = 0;

 EventListener();

 function EventListener() {
     BtnAgregarNumeros.addEventListener('click', AgregarNumeros);
     //  BtnCalcular.addEventListener('click',SumarValores);
 }

 function AgregarNumeros() {

     for (let i = 0; i < 30; i++) {

         let num = prompt(`Numero ${i+1}`);

         console.log(num)

         if (Number(num) % 1 == 0 && Number(num) > 0) {

             if (Number(num) % 2 != 0) {

                 Sumaimpares += Number(num);
             } else {
                 contador++
                 SumaPares += Number(num);
             }

         } else {
             imprimirresultado.innerText = "ingresa un numero positivo entero";
             return;
         }


     }
     promedio = SumaPares / contador;

     imprimirresultado.innerHTML = `La suma de los numerosinpares es: ${Sumaimpares} <br> El promedio de los numeros pares es: ${promedio}`

 }