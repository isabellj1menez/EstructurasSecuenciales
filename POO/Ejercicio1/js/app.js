let BtnAceptar = document.getElementById('BtnAceptar');
let BtnSalir = document.getElementById('BtnSalir');
let InputText = document.getElementById('InputText');
let showText = document.getElementById('alertText');
let VentanaCasillas = document.getElementById('VentanaCasillas');

let BtnAfavor = document.getElementById('BtnAfavor');
let BtnEncontra = document.getElementById('BtnEncontra');
let BtnAbstencion = document.getElementById('BtnAbstencion');
let BtnFinalizar= document.getElementById('BtnFinalizar');
let voto = new Votos();


EventListener();

function EventListener() {
    BtnAceptar.addEventListener('click', Casilla); 
    BtnSalir.addEventListener('click', Salir);
    
    BtnAfavor.addEventListener('click',Afavor);
    BtnEncontra.addEventListener('click', Encontra);
    BtnAbstencion.addEventListener('click',Abstencion);
    BtnFinalizar.addEventListener('click',Finalizar);
    
}

function Salir(){
    InputText.value = '';
}

function Casilla() {
    // console.log(InputText.value);
    showText.innerHTML = InputText.value;

    VentanaCasillas.removeAttribute('hidden')
}

function Afavor(){
voto.SumaAfavor();
// console.log(voto);
Swal.fire({
    position: 'top-end',
    type: 'success',
    title: 'Voto registrado',
    showConfirmButton: false,
    timer: 1500
  })

}
function Encontra(){
    voto.SumaEncontra();
    // console.log(voto);
    Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Voto registrado',
        showConfirmButton: false,
        timer: 1500
      })
}

function Abstencion(){
    voto.SumaAbstencion();
    // console.log(voto);
    Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Voto registrado',
        showConfirmButton: false,
        timer: 1500
      })
}

function Finalizar(){

    if(voto.VotosAfavor>voto.VotosEncontra&& voto.VotosAbstencion){

      console.log(voto.VotosAbstencion, voto.VotosAfavor,voto.VotosEncontra)
        Swal.fire({
            title: `la mocción se acepta con ${voto.VotosAfavor} votos a favor, ${voto.VotosEncontra} votos en contra y ${voto.VotosAbstencion} de Abstencion`,
            animation: false,
            customClass: {
              popup: 'animated tada'
            }
          })

    }else if(voto.VotosEncontra>voto.VotosAfavor&& voto.VotosAbstencion){
      console.log(voto.VotosAbstencion, voto.VotosAfavor,voto.VotosEncontra)
        Swal.fire({
            title: `la mocción se rechaza con ${voto.VotosAfavor} votos a favor, ${voto.VotosEncontra} votos en contra y ${voto.VotosAbstencion}`,
            animation: false,
            customClass: {
              popup: 'animated tada'
            }
          })
    }

   
}
