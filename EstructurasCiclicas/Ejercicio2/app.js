NumerosPares();

function NumerosPares() {



    for (let i = 0; i <= 100; i++) {

        if ((i % 2) == 0) {

            let newli = document.createElement('li');
            newli.setAttribute("id", `listaN${i}`);
            newli.setAttribute("class", "list-group-item");
            let newContent = document.createTextNode(i);
            newli.appendChild(newContent);
            let ListaDesordenada = document.getElementById('ListaNumerosPares');
            ListaDesordenada.appendChild(newli);


        }





    }
}