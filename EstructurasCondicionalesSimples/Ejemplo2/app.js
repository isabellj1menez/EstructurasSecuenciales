let btnComparar = document.getElementById('btn_Calcular');
let numero1 = document.getElementById('valor1');
let numero2 = document.getElementById('valor2');

EventListener();

function EventListener() {

    //Se esta asignando el evento change al input que pertenece al id "valor1"
    numero1.addEventListener('blur', validardatos);
    numero2.addEventListener('blur', validardatos);
    btnComparar.addEventListener('click', compararvalores);
}

//Estamos recibiendo el parametro event para  debido al que el metodo "add.EventListener esta invocando la funcion validardatos"
function validardatos(Event) {
    // console.log('x');
    // console.log(Number(numero1.value));
    // console.log(!isNaN(numero1.value));

    console.log(Event.target.value)

    //Se utilizo la duncion isNaN para comprovar si el valor optenido es un numero en caso de que no sea un numero se utilizo el metodo focus para no permitir al usuario cambiar de input
    if (isNaN(Event.target.value)) {
        Event.target.focus();
    }
}

function compararvalores() {

    let imprimir = document.getElementById('Resultado');
    if (Number(numero1.value) == Number(numero2.value)) {
        imprimir.innerText = 'El numero A y B tinen el mismo valor'
        return;
    }

    if (Number(numero1.value) > Number(numero2.value)) {
        '0987'
        imprimir.innerText = 'El numero A es el valor mas grande'

    } else {
        imprimir.innerText = 'El numero B es el valor mas grande'
    }

}