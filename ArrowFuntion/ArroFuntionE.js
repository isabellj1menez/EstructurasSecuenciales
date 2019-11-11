let Persona = {
    nombre: "Jose Carlos",
    Apellido: "Gonzalez",

    LlamarPersona: function() {
        // setTimeout(function() {
        //     console.log(`${this.nombre} ${this.Apellido} Presentarse en la sala de juntas `)

        // }, 3000)


        // setTimeout(function() {
        //     console.log(`${this.nombre} ${this.Apellido} Presentarse en la sala de juntas `)

        // }bind(this), 3000)


        setTimeout(() => {
            console.log(`${this.nombre} ${this.Apellido} Presentarse en la sala de juntas `)

        }, 3000)

    }
}

Persona.LlamarPersona();





let porkemonArregloNuevo = [];

porkemonArregloNuevo =


    //el forEach no regresa ningun valor //Sirve para hacer algun tratamiento dentro de la funcion
    Pokemons.forEach(function(pokemon) {
        // console.log(pokemon.name)
        return pokemon.name
    })