let btndescendente = document.getElementById('btndescendente');

EventListener();

function EventListener() {

    btndescendente.addEventListener('click', Descendente);
}

function Descendente() {

    let DatoA = Number(document.getElementById('DatoA').value);
    let DatoB = Number(document.getElementById('DatoB').value);
    let DatoC = Number(document.getElementById('DatoC').value);

    let imprimirResultado = document.getElementById('resultado');

    if (DatoA > DatoB && DatoA > DatoC) {
        if (DatoB > DatoC) {
            imprimirResultado.innerHTML = `
          <h4 class="alert-heading text-center text-info"> Dato A: ${DatoA}<br/>Dato B: ${DatoB}<br/>Dato C: ${DatoC}</h4>
          `
        } else {
            imprimirResultado.innerHTML = `
          <h4 class="alert-heading text-center text-info"> Dato A: ${DatoA}<br/>Dato C: ${DatoC}<br/>Dato B: ${DatoB}</h4>
          `
        }
    }
    if (DatoB > DatoA && DatoB > DatoC) {
        if (DatoA > DatoC) {
            imprimirResultado.innerHTML = `
        <h4 class="alert-heading text-center text-info"> Dato B: ${DatoB}<br/>Dato A: ${DatoA}<br/>Dato C: ${DatoC}</h4>
        `
        } else {
            imprimirResultado.innerHTML = `
        <h4 class="alert-heading text-center text-info"> Dato B: ${DatoB}<br/>Dato C: ${DatoC}<br/>Dato A: ${DatoA}</h4>
        `
        }
    }
    if (DatoC > DatoA && DatoC > DatoB) {
        if (DatoA > DatoB) {
            imprimirResultado.innerHTML = `
      <h4 class="alert-heading text-center text-info"> Dato C: ${DatoC}<br/>Dato A: ${DatoA}<br/>Dato B: ${DatoB}</h4>
      `
        } else {
            imprimirResultado.innerHTML = `
      <h4 class="alert-heading text-center text-info"> Dato C: ${DatoC}<br/>Dato B: ${DatoB}<br/>Dato A: ${DatoA}</h4>
      `
        }
    }

    if (DatoA == DatoB && DatoA == DatoC) {
        imprimirResultado.innerHTML = `
      <h4 class="alert-heading text-center text-info"> Todos los numeros son iguales
      `
    }
}