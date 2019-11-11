let Pokemons = [
    { name: "Picaku", type: "Electrico", hp: 50 },
    { name: "Charmander", type: "Fueho", hp: 32 },
    { name: "Bulbasur", type: "Planta", hp: 98 },
    { name: "Squirtle", type: "Agua", hp: 12 },
    { name: "Steelix", type: "Hierro Roca", hp: 43 },
    { name: "Magmar", type: "Fuego", hp: 9 },
    { name: "Electabuzz", type: "Electrico", hp: 26 }
];

let porkemonArregloNuevo = [];

// porkemonArregloNuevo =
// //dentro del arreglo pokemons vas a buscar //find si puede regresar valores
// Pokemons.find((pokemon) => {
//     if (pokemon.name == "Magmar") {
//         return pokemon
//     }
// })

/*------------------
      Find solo funciona para encontrar 1 dato del arreglo
//     ------------------*/
//     porkemonArregloNuevo = Pokemons.find((pokemon) => pokemon.name == 'Steelix')
// porkemonArregloNuevo = Pokemons.find((pokemon) => pokemon.hp > 30) //Regresa el primer valor que encuentra

/*------------------
  Filter trae un arreglo filtrado por una condicion
// ------------------*/

// porkemonArregloNuevo = Pokemons.filter((pokemon) => pokemon.type == "Fuego")

/*------------------
  Map: para crear un nuevo array cin akguna cindu¿icion
------------------*/
// porkemonArregloNuevo = Pokemons.map((pokemon) => pokemon.name == "Steelix" ? pokemon.hp : "estepokemon no es Steeñix")


/*------------------
  Every // retorna un boleano

------------------*/

let bandera;
//Todos los miembros son mayor a ....?
bandera = Pokemons.every((pokemon) => pokemon.hp > 50)
    //Alguno los miembros son mayor a ....?
bandera = Pokemons.some((pokemon) => pokemon.hp > 50)



console.log(bandera)
    // console.log(porkemonArregloNuevo)