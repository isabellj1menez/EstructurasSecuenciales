SumaCantidades();


function SumaCantidades() {

    let y = 0;

    //Estructura cíclica la cual se compone de un ( variable inicializada; Condicion Logica; incrementor), la cual nos ayuda a la ejecucion repetitiva de un bloque de codigo.
    for (let x = 1; x <= 10; x++) {

        console.log(`${y}+${x}`);
        // y = y + x;
        y += x;
        console.log(` resultado: ${y}`);

        //Se crea el elemento li por medio del metodo CreateElement y se asigna a la variable newli.
        let newli = document.createElement('li');
        //Se asigna el atributo id y class a la variable newli
        newli.setAttribute("id", `listaN${x}`);
        newli.setAttribute("class", "list-group-item");


        //Se crea el nodo de texto por medio del metodoCreateTextNode
        let newContent = document.createTextNode(y);
        //Se inserta un hijo por medio del metodo appenChild a la variable newli
        newli.appendChild(newContent);


        let ListaDesordenada = document.getElementById('ListaNumerica');
        ListaDesordenada.appendChild(newli);
    }
}