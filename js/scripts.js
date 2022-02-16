// List of Pokemon wrapped in an IIFE
let pokemonRepository = (function () {
    // Creating an array to hold pokemon objects
    let pokemonList = [
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
        return pokemonList;
    }

    // function to add a pokemon to the pokemonList    
    function add (pokemon) {
        // checks that only certain properties will be accepted when adding a new pokemon
        if (
          typeof pokemon === "object" &&
          "name" in pokemon &&
          "height" in pokemon &&
          "types" in pokemon
        ) {
            //if property has been validated, new pokemon will be added
            pokemonList.push(pokemon);
        } else {
            // otherwise display error message
          console.log("pokemon is not correct");
        }
    }

    // function to list Pokemon in a list and in an invidiual button in HTML
    function addListItem (pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.addEventListener('click', function showDetails (event) { 
            console.log("I am the pokemon",pokemon);
            console.log("I'm the event", event)
        });
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
    }

    function showDetails(pokemon) {
        console.log('showDetails function says hello', pokemon);
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        showDetails: showDetails
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



