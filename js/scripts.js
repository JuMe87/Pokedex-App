// List of Pokemon, thier name, height, weight and type, some pokemon have more than one type

let pokemonList = [{
    name: 'Pikachu',
    height: 0.4,
    weight: 6.0,
    type: ['electric']
},
  
{
    name: 'Ditto',
    height: 0.3,
    weight: 4.0,
    type: ['normal']
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

// Loop that goes through each Pokemon in an array and prints the details onto an index.html page
for (let i = 0; i < pokemonList.length; i++){
    console.log(pokemonList[i].name);
    document.write(pokemonList[i].name + pokemonList[i].height);
}

// Loop with a conditional that checks whether weight is above a certain value
for (let i=0; i < pokemonList.length; i++){
    if (pokemonList[i].weight >8.0){
      console.log(pokemonList[i].name + pokemonList[i].weight + " Wow, that's big!");
      document.write(pokemonList[i].name + pokemonList[i].weight + " Wow, that's big!");
    }
}