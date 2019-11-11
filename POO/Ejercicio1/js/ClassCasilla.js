class Votos {

    /*------------------
      Propiedades de Objetos
    ------------------*/

    VotosAfavor = 0;
    VotosEncontra = 0;
    VotosAbstencion = 0;

    constructor(){
      
    }
    /*------------------
      Metodos de objetos
    ------------------*/

    SumaAfavor() {
        this.VotosAfavor++        
    }

    SumaEncontra() {
        this.VotosEncontra++
    }

    SumaAbstencion() {
        this.VotosAbstencion++
    }

}