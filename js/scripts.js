// List of Pokemon, thier name, height, weight and type, some pokemon have more than one type

let pokemonList = [{
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
];

console.log(pokemonList);

// Replacing forLoop with a forEach() loop
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

// Different way of displaying all properties of my Pokemon - I don't like it
Object.keys(pokemonList).forEach(function(property) {
    console.log(pokemonList[property]);
});

