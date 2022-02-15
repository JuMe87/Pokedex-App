// List of Pokemon wrapped in an IIFE
let pokemonRepository = (function () {
    // Creating an array to hold pokemon objects
    let repository = [
        {
            name: "Charizard",
            height: 1.7,
            types: ["fire", "flying"]
        },
  
        {
            name: "Squirtle",
            height: 0.5,
            types: ["water"]
        }, 

        {
            name: "Jigglypuff",
            height: 0.5,
            types: ["fairy", "normal"]
        } 
    ]

    // function to return all pokemon from list
    function getAll () {
        return repository;
    }
    // function to add a pokemon to the pokemonList    
    function add(pokemon) {
        if (
          typeof pokemon === "object" &&
          "name" in pokemon &&
          "height" in pokemon &&
          "types" in pokemon
        ) {
            repository.push(pokemon);
        } else {
          console.log("pokemon is not correct");
        }
    }
    // function to list Pokemon in a list and in a button
    function addListItem(pokemon){
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem
    }

})()

//IIFE End

// Adds Pikachu to that list, could be any other pokemon depending on the name
pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

//Logs entire pokemon list
console.log(pokemonRepository.getAll());

//forEach() function
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});

    

