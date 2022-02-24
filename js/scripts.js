// List of Pokemon wrapped in an IIFE
let pokemonRepository = (function () {
    
    // Creating an array to hold pokemon objects
    let pokemonList = []; //empty array 
    // We deleted array of pokemons in order to derive all pokemon via this api
    let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150"
    // Variable needed in order to show modal and its content
    //let modalContainer = document.querySelector('#modal-container');  

    // function to add a pokemon to the pokemonList    
    function add (pokemon) {
        // checks that only certain properties will be accepted when adding a new pokemon
        if (
          typeof pokemon === "object" &&
          "name" in pokemon
        ) {
        //if property has been validated, new pokemon will be added
            pokemonList.push(pokemon);
        } else {
        // otherwise display error message
          console.log("pokemon is not correct");
        }
    }

    // function to return all pokemon from array and display them
    function getAll () {
        return pokemonList;
    }

    // Promise function which is basically a fetch function getting the pokemon from the api
    function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {   // we take the json generated above and let it run a forEach loop
        json.results.forEach(function (item) {   // json is the entire data that is available on api-website
          let pokemon = {  //maps pokemon item with 2 parameters
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      });
    }
    
    // funtion to load further details for each pokemon (item), e.g. image,height, types
    function loadDetails(item) {
        let url = item.detailsUrl; // item.detailsURL is taken from function above
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          // Now we add the details to the item
          item.imageUrl = details.sprites.front_default;  // sprites is coming from actual api
          item.height = details.height;
          item.weight = details.weight;
          item.types = [];
          details.types.forEach(function (element){
            item.types.push(element.type.name);
          })
        }).catch(function (e) {
          console.error(e);
        });
    }
    
    // function to list Pokemon in a list and in an invidiual button in HTML
    function addListItem(pokemon) {
      let listGroupElement = document.querySelector('.pokemon-list');
      let listItemButton = document.createElement('button');
      listItemButton.innerText = pokemon.name;
      listItemButton.classList.add('list-group-item', 'list-group-item-action',
        'text-center', 'text-normal');
  
      // Adding the data toggle and data target to trigger the modal
      listItemButton.setAttribute('data-toggle', 'modal');
      listItemButton.setAttribute('data-target', '#pokemonModal');
  
      // Appending the button to the parent div element
      listGroupElement.appendChild(listItemButton);

      // Adding an event listener to newly created button
      buttonEventListener(listItemButton,pokemon);
    }
    
    // function to add an event listener to a button that will show details of the pokemon when the button is clicked
    function buttonEventListener(button,pokemon){
      button.addEventListener('click', function(){
        showDetails(pokemon);
      });
    }
    
    // function that loads details from api & then prints pokemon details onto console
    function showDetails(pokemon){
      loadDetails(pokemon).then(function () {
        showModal(pokemon);
        console.log(pokemon);
      });
    }
    
    // function to show modal
    function showModal(pokemon) {   // make sure item is correct in my case, could be pokemon as well
      let modalBody = $(".modal-body");
      let modalTitle = $(".modal-title");
      
      // Clear all existing modal content
      modalTitle.empty();
      modalBody.empty();
      
       // Adding pokemon name as title
      let titleElement = $('<h1 class="text-uppercase">' + pokemon.name + '</h1>');
      modalTitle.append(titleElement);
      
      //Creating elements for the modal body
      //1.image
      let imageElement = document.createElement('img');
      imageElement.classList.add('modal-img');
      imageElement.src = pokemon.imageUrl;
      
      //2.height
      let heightElement = $("<p>" + "height: " + pokemon.height + "</p>");
      
      //3.weight
      let weightElement = $("<p>" + "weight: " + pokemon.weight + "</p>");
      
      //4.types 
      let typesElement = $("<p>" + "types: " + pokemon.types.join(', ') + "</p>");
      
      modalBody.append(imageElement);
      modalBody.append(heightElement);
      modalBody.append(weightElement);
      modalBody.append(typesElement);
    }

    // Return needs to be added in order to show functions output
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        showModal: showModal
    };

})();

//IIFE End

//forEach() function that goes through list and displays all pokemons and their names on DOM
pokemonRepository.loadList().then(function() {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
    });
});

