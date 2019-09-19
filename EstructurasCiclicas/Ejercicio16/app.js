let contador = 0;


CalcularAhorro();

function CalcularAhorro() {

    let imprimir = document.getElementById('resultado');
    let ahorro = 1;
    let ahorroTotal = 0;

    for (let i = 0; i <= 30; i++) {

        contador++;
        ahorro = ahorro * 3;
        ahorroTotal = ahorroTotal + ahorro;

        let newli = document.createElement('li');
        newli.setAttribute("id", `Dia${contador}`);
        newli.setAttribute("class", "list-group-item");
        let newContent = document.createTextNode(`Día ${contador}: ${ahorro}`);
        newli.appendChild(newContent);
        let ListaDesordenada = document.getElementById('Ahorros');
        ListaDesordenada.appendChild(newli);

    }

    imprimir.innerText = ahorroTotal

}