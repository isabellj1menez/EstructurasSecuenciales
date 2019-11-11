let BtnVentas = document.getElementById('BtnVentas');
let contador = 0;
let TotalVentas1 = 0;
let NumeroVentas1 = 0;
let TotalVentas2 = 0;
let NumeroVentas2 = 0;
let TotalVentas3 = 0;
let NumeroVentas3 = 0;
let TotalVentas = 0;
let NumeroVentas = 0;

EventListener();

function EventListener() {
    BtnVentas.addEventListener('click', VentasTotal);
}

function VentasTotal() {
    let Ventas = Number(document.getElementById('Ventas').value);
    let imprimir = document.getElementById('resultado');

    for (let i = 0; i <= contador; i++) {
        if (Ventas > 1000) {
            let newli = document.createElement('li');
            newli.setAttribute('id', `listaN${contador}`);
            newli.setAttribute("class", "list-group-item");
            let newcContent = document.createTextNode(Ventas)
            newli.appendChild(newcContent);
            let ListaDesordenada = document.getElementById('ListaNumerica1');
            ListaDesordenada.appendChild(newli);
            TotalVentas1 = TotalVentas1 + Ventas;
            NumeroVentas1++;
            console.log(NumeroVentas1);
            console.log(TotalVentas1);
        } else if (Ventas <= 500) {

            let newli = document.createElement('li');
            newli.setAttribute('id', `listaN${contador}`);
            newli.setAttribute("class", "list-group-item");
            let newcContent = document.createTextNode(Ventas)
            newli.appendChild(newcContent);
            let ListaDesordenada = document.getElementById('ListaNumerica3');
            ListaDesordenada.appendChild(newli);

            TotalVentas3 += Ventas;
            NumeroVentas3++;
            console.log(NumeroVentas3);
            console.log(TotalVentas3);

        } else {
            let newli = document.createElement('li');
            newli.setAttribute('id', `listaN${contador}`);
            newli.setAttribute("class", "list-group-item");
            let newcContent = document.createTextNode(Ventas)
            newli.appendChild(newcContent);
            let ListaDesordenada = document.getElementById('ListaNumerica2');
            ListaDesordenada.appendChild(newli);
            TotalVentas2 = TotalVentas2 + Ventas;
            NumeroVentas2++;
            console.log(NumeroVentas2);
            console.log(TotalVentas2);
        }
    }

    TotalVentas = TotalVentas1 + TotalVentas2 + TotalVentas3;
    NumeroVentas = NumeroVentas1 + NumeroVentas2 + NumeroVentas3;

    imprimir.innerHTML = `La venta todal mayor a mil es:  ${TotalVentas1} <br> La venta total mayor a $500 y menor a $1000 es:  ${TotalVentas2} <br> La venta todal menor a $500 es:  ${TotalVentas3} <br> La venta todal es:  ${TotalVentas} 
    `



}