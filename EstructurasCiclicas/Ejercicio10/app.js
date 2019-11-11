let BtnAgregarVoto = document.getElementById('BtnAgregarVoto');
let VotoCanditato = document.getElementById('VotoCanditato');
let Resultado = document.getElementById('Resultado');
let Candidato1 = 0;
let Candidato2 = 0;
let Candidato3 = 0;
let Candidato4 = 0;
let Candidatos = 0;

EventListener();

function EventListener() {
    BtnAgregarVoto.addEventListener('click', AgregarVoto);
}

function AgregarVoto() {

    if (VotoCanditato.value == '' || VotoCanditato.value > 5) {
        console.log('ingresa un numero');
        // return;
    }
    if (VotoCanditato.value == 1) {
        console.log('Tu voto fue regsitrado');
        Candidato1++;
    }
    if (VotoCanditato.value == 2) {
        console.log('Tu voto fue regsitrado');
        Candidato2++;
    }
    if (VotoCanditato.value == 3) {
        console.log('Tu voto fue regsitrado');
        Candidato3++;
    }
    if (VotoCanditato.value == 4) {
        console.log('Tu voto fue regsitrado');
        Candidato4++;
    }
    if (VotoCanditato.value == 0) {
        Resultado.innerHTML = `El candidato 1 tiene ${Candidato1} votos y su porcentaje es: ${(Candidato1*100)/Candidatos} %<br> 
        El candidato 2 tiene ${Candidato2} votos y su porcentaje es: ${(Candidato2*100)/Candidatos} % <br>
        El candidato 3 tiene ${Candidato3} votos y su porcentaje es: ${(Candidato3*100)/Candidatos} % <br>
        El candidato 4 tiene ${Candidato4} votos y su porcentaje es: ${(Candidato4*100)/Candidatos} % <br>`
    }

    Candidatos++
    console.log(Candidatos);
    VotoCanditato.value = '';
}