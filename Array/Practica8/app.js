let SizeArray = document.getElementById('InputSizeArray');
dataArray = [];


EventListener();

function EventListener() {
    SizeArray.addEventListener('change', FillArray);
}

function FillArray() {

    for (let i = 0; i < Number(SizeArray.value); i++) {
        dataArray[i] = Math.floor(Math.random() * 10)
    }
    SumaValores(dataArray);

    dataArray = [];
}

function SumaValores(dataArray) {

    let Datosimprimir = '';
    let Suma = 0;
    let Media = 0;
    let mediana = 0;

    let moda = 0;
    let Rep = 0;

    let varianza = 0;
    let DesEstandar = 0;;


    for (let i = 0; i < dataArray.length; i++) {
        Datosimprimir += `<li class="list-group-item"> ${dataArray[i]} </li>`
        Suma += dataArray[i]
        Media = Math.floor(Suma / dataArray.length);
        mediana = Math.floor(dataArray.length / 2);
        // DesEstandar = Math.sqrt(varianza)

        let cantRep = 0;
        for (let j = 0; j < dataArray.length - 1; j++) {

            console.log('Hola Mundo');

            if (dataArray[i] == dataArray[j]) {
                cantRep++;
            } else if (cantRep > Rep) {
                moda = dataArray[i];
                Rep = cantRep;
            }


        }


    }





    document.getElementById('AlertPrint').innerHTML = `La suma de todos los numeros es: ${Suma} <br> la media es: ${Media}
    <br> la mediana es: ${dataArray[mediana]} <br>y la moda es: ${moda} <br> <br> ${Datosimprimir}
    `;

}
















// for (let x = 0; x < dataArray.length; x++) {
//     let vecesQueSeRepite = 0;
//     for (let j = 0; j < dataArray.length; j++) {
//         if (dataArray[i] == dataArray[j])
//             vecesQueSeRepite++;
//     }
//     if (vecesQueSeRepite > maximaVecesQueSeRepite) {
//         moda = dataArray[i];
//         maximaVecesQueSeRepite = vecesQueSeRepite;
//     }
// }