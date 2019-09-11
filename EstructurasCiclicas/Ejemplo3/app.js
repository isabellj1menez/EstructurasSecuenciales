let BtnCalcularEstatuta = document.getElementById('BtnCalcularEstaturas');
let BtnAgregarPersona = document.getElementById('BtnAgregarPersona');

let inputPersonas = 0;

EventListener();

function EventListener() {
    BtnAgregarPersona.addEventListener('click', AgregarPersona);
    BtnCalcularEstatuta.addEventListener('click', PromedioEstaturas);

}

function AgregarPersona() {

    inputPersonas++;

    let DivRow = document.createElement('div');
    DivRow.setAttribute('class', 'row');

    let DivCol = document.createElement('div');
    DivCol.setAttribute('class', 'col-12');

    let DivFormGrup = document.createElement('div');
    DivFormGrup.setAttribute('class', 'form-group');

    let LabelFG = document.createElement('label');
    let LabelText = document.createTextNode(`Ingresa la estatura de la persona ${inputPersonas}`);
    LabelFG.appendChild(LabelText);

    let inputFC = document.createElement('input');
    inputFC.setAttribute('class', 'form-control');
    inputFC.setAttribute('type', 'number');
    inputFC.setAttribute('placeholder', 'Ingresa la estatura');
    inputFC.setAttribute('id', `EstaturaPersona${inputPersonas}`);

    let CajaEstatura = document.getElementById('CajaEstatura');

    CajaEstatura.appendChild(DivRow);
    DivRow.appendChild(DivCol);
    DivCol.appendChild(DivFormGrup);
    DivFormGrup.appendChild(LabelFG);
    DivFormGrup.appendChild(inputFC);
}

function PromedioEstaturas() {

    let suma = 0;
    let promedio = 0;

    for (let x = 1; x <= inputPersonas; x++) {
        let estatura = Number(document.getElementById(`EstaturaPersona${x}`).value);
        suma += estatura;

    }
    promedio = suma / inputPersonas;



    let imprimir = document.getElementById('imprimir');
    imprimir.innerText = promedio;


}