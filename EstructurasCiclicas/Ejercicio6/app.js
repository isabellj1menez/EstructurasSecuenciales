CalcularPagos();

function CalcularPagos() {
    let Pagos = 10;
    let PagoTotal = 0;


    for (let i = 1; i <= 20; i++) {

        let newli = document.createElement('li');
        newli.setAttribute("id", `Pago${i}`);
        newli.setAttribute("class", "list-group-item");
        let newContent = document.createTextNode(Pagos);
        newli.appendChild(newContent);
        let ListaDesordenada = document.getElementById('ListaPagos');
        ListaDesordenada.appendChild(newli);
        Pagos = Pagos * 2;
        PagoTotal += Pagos;
    }

    console.log(PagoTotal);
}