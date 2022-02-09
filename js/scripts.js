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

// Loop with a conditional that checks whether height is above a certain value
for (let i=0; i < pokemonList.length; i++){
    if (pokemonList[i].height >1.6){
      console.log(pokemonList[i].name + pokemonList[i].height + " Wow, that's big!");
      document.write(pokemonList[i].name + pokemonList[i].height + " Wow, that's big!");
    }else {
        console.log(pokemonList[i].name + pokemonList[i].height);
        document.write(pokemonList[i].name + pokemonList[i].height); 
    }
}

