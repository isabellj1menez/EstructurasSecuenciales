let inputname = document.getElementById('inputname');
let inputphone = document.getElementById('inputphone');
let BtnAddContact = document.getElementById('Btn-addcontact');
let ListaContactos = document.getElementById('lista-contactos');
const objectAgenda = new Agenda();

EventListener();

function EventListener() {
    inputname.addEventListener('blur', Validarnombre);
    inputphone.addEventListener('blur', Validartelefono);
    BtnAddContact.addEventListener('click', AgregarContacto);
}

function Validarnombre(Event) {

    if (!isNaN(Event.target.value)) {
        Event.target.focus();
    }
}


function Validartelefono(Event) {

    if (isNaN(Event.target.value)) {
        Event.target.focus();
    }
}

function AgregarContacto() {
    objectAgenda.addContact(inputname, inputphone);
}