// List of Pokemon wrapped in an IIFE
let pokemonRepository = (function () {
    
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

    function getAll () {
        return pokemonList;
    }
    
    function add (pokemon) {
        pokemonList.push(pokemon);
    }
    
    return {
        getAll: getAll,
        add: add
    }

})()

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Pikachu' });
 
// Replacing for() loop with a forEach() loop
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
pokemonList.forEach(myLoopFunction);



