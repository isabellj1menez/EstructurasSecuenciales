CalcularKM();

function CalcularKM() {

    let Distancia1 = 70;
    let Distancia2 = 150;
    let resultado = document.getElementById('Resultado');


    for (let i = 0; Distancia1 != Distancia2; i++) {

        Distancia1++;
        Distancia2--;
        console.log(Distancia2)
    }

    resultado.innerText = `Los carros se encuentran en el KM ${Distancia2}`


}