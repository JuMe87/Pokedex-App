// List of Pokemon wrapped in an IIFE
let pokemonRepository = (function () {
    // Creating an array to hold pokemon objects
    let pokemonList = [
        {
            name: 'Pikachu',
            height: 0.4,
            weight: 6.0,
            type: ['electric']
        },
  
        {
            name: 'Charizard',
            height: 1.7,
            weight: 90.5,
            type: ['fire', 'flying']
        },
  
        {
            name: 'Squirtle',
            height: 0.5,
            weight: 9.0,
            type: ['water']
        }, 

        {
            name: 'Jigglypuff',
            height: 0.5,
            weight: 5.5,
            type: ['fairy', 'normal']
        } 
    ]

    // function to return all pokemon from list
    function getAll () {
        return pokemonList;
    }
    // function to add a pokemon to the pokemonList    
    function add (pokemon) {
        pokemonList.push(pokemon);
    }
    
    return {
        getAll: getAll,
        add: add
    }

})()

//IIFE End

//Logs entire pokemon list
console.log(pokemonRepository.getAll());
// Adds Pikachu to that list, could be any other pokemon depending on the name
pokemonRepository.add({ name: 'Pikachu' });

// Replacing for() loop with a forEach() function
function myLoopFunction(pokemon) {
    console.log(pokemon.name + " " + pokemon.height + " " + pokemon.weight + " "+ pokemon.type);
    document.write(
        "<p>" + 
        pokemon.name + 
        " " +
        pokemon.height + 
        " " +
        pokemon.weight +
        " " +
        pokemon.type + 
        "</p>"
    )
}
pokemonRepository.getAll().forEach(myLoopFunction);

    

