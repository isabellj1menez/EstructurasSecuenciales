class Agenda {

    constructor() {
        // let LS = new localStorage();
    }

    addContact(NameContact, PhoneContact) {

        console.log('hola')

        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${NameContact.value}</td>
      <td>${PhoneContact.value}</td>
      `
        ListaContactos.appendChild(row);

        // this.LS.SaveContactLocalStorage()

    }
}