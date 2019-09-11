let BtnAgregarFG = document.getElementById('BtnAgregarFG');
let BtnCalcular = document.getElementById('BtnCalcular');
numeroInput = 0;

EventListener();

function EventListener() {
    BtnAgregarFG.addEventListener('click', AgregarFG);
    BtnCalcular.addEventListener('click', CalcularPromedio);
}

function CalcularPromedio() {

    let suma = 0;
    let promedio = 0;

    for (let x = 1; x <= numeroInput; x++) {
        let edad = Number(document.getElementById(`EdadAlumno${x}`).value);
        suma += edad;
    }
    promedio = suma / numeroInput;

    let imprimir = document.getElementById('imprimir');
    imprimir.innerText = promedio;

}

function AgregarFG() {
    numeroInput++;

    let DivRow = document.createElement('div');
    DivRow.setAttribute('class', 'row');

    let DivCol = document.createElement("div");
    DivCol.setAttribute("class", "col-12");

    let DivFG = document.createElement('div');
    DivFG.setAttribute('class', 'form-group');

    let Label = document.createElement('label');
    let textLabel = document.createTextNode(`Ingresa la edad del alumno ${numeroInput}`);
    Label.appendChild(textLabel);

    let InputFC = document.createElement('input');
    InputFC.setAttribute('class', 'form-control');
    InputFC.setAttribute('type', 'number');
    InputFC.setAttribute('placeholder', 'Ingresa la edad del alumno');
    InputFC.setAttribute('id', `EdadAlumno${numeroInput}`);

    let CajaAlumnos = document.getElementById('cajaAlumnos');

    CajaAlumnos.appendChild(DivRow);
    DivRow.appendChild(DivCol);
    DivCol.appendChild(DivFG);
    DivFG.appendChild(Label);
    DivFG.appendChild(InputFC);

}