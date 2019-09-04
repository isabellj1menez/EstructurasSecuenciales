let btnEdades = document.getElementById('BtnCalcular');
let EdadA = document.getElementById('EdadA');
let EdadB = document.getElementById('EdadB');
let NombreA = document.getElementById('NombreA');
let NombreB = document.getElementById('NombreB');

EventListener();

function EventListener() {

    EdadA.addEventListener('blur', validardatos);
    EdadB.addEventListener('blur', validardatos);
    btnEdades.addEventListener('click', Compararvalores);

}

function validardatos(Event0) {

    if (isNaN(Event0.target.value)) {
        Event0.target.focus();
    }

}

function Compararvalores() {

    let imprimir = document.getElementById('NombreMayor');

    if (Number(EdadA.value) == Number(EdadB.value)) {

        imprimir.innerText = 'Los dos usuarios tienen la misma edad';
        return;

    }

    if (Number(EdadA.value) > Number(EdadB.value)) {

        imprimir.innerHTML = ('El nombre del usuario mayor es: ') + NombreA.value;

    } else {

        imprimir.innerHTML = ('El nombre del usuario mayor es: ') + NombreB.value;

    }
}