let BtnCantidades = document.getElementById('BtnCantidades');
let BtnCalcular = document.getElementById('BtnCalcular');
let numeroInput = 0;

EventListener();

function EventListener() {

    BtnCantidades.addEventListener('click', AgregarNumeros);
    BtnCalcular.addEventListener('click', RevisarNumeros);
}

function AgregarNumeros() {

    numeroInput++;

    let DivRow = document.createElement('div');
    DivRow.setAttribute('class', 'row');

    let DivCol = document.createElement('div');
    DivCol.setAttribute('class', 'col-12');

    let DivFG = document.createElement('div');
    DivFG.setAttribute('class', 'form-group');

    let Label = document.createElement('label');
    let textLabel = document.createTextNode(`Ingresa un numero positivo o negativo`);
    Label.appendChild(textLabel);

    let InputFC = document.createElement('input');
    InputFC.setAttribute('class', 'form-control');
    InputFC.setAttribute('type', 'number');
    InputFC.setAttribute('placeholder', 'Ingresa numero');
    InputFC.setAttribute('id', `Numero${numeroInput}`);

    let AgregarNumero = document.getElementById('AgregarNumero');

    AgregarNumero.appendChild(DivRow);
    DivRow.appendChild(DivCol);
    DivCol.appendChild(DivFG);
    DivFG.appendChild(Label);
    DivFG.appendChild(InputFC);

}

function RevisarNumeros() {

    NumeroPositivo = 0;
    NumeroNegativo = 0;
    let imprimir = document.getElementById('resultado');
    for (let x = 1; x <= numeroInput; x++) {
        let NumeroCantidad = Number(document.getElementById(`Numero${x}`).value);

        if (NumeroCantidad <= 0) {
            NumeroNegativo = NumeroNegativo + 1;
        } else {
            NumeroPositivo = NumeroPositivo + 1;
        }
    }


    imprimir.innerHTML = `La cantidad de numeros positivos es ${NumeroPositivo} y La cantidad de numeros negativos es ${NumeroNegativo}`;





}