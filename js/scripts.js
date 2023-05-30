let pokemonRepository = (function () {
let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemonAdd) {   //function to be able to add a pokemon to the array.
    pokemonList.push(pokemonAdd);
  }

  function getAll() { //function to be performed when called on to access the IIFE safe array.
    return pokemonList;
  }

  function showDetails(pokemon) {  //function that will print the pokemon information to the console log when a pokemon is clicked.
    loadDetails (pokemon).then(function(){
      console.log(pokemon)
    })
  }

  function addListItem(pokemon) {  //crates buttons for every pokemon in the array. 
    let listOfPokemon = document.querySelector('.pokemon-list');  
    let aPokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    button.addEventListener('click', function () {
        return showDetails(pokemon);
      } //sends the pokemon as its parameter to the showDetails function to return information to the console.
      );
    aPokemon.appendChild(button);
    listOfPokemon.appendChild(aPokemon);
  }

  function loadList() {   //Loads pokemon from external API and then adds them to our pokemonList to then be printed by our addListItem function.
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {    //returns information about each pokemon from the API whenever one of the pokemon are clicked refering back to our showDetails function.
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function(e) {
      console.log(e);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,  //Keys to be able to call on a function to be performed.
    loadList: loadList,
    loadDetails: loadDetails
  };
})(); //IIFE to be able to keep all information within safe from interference so it can be called uppon in the future.

pokemonRepository.loadList().then(function(){   //loads pokemon from the external API
 pokemonRepository.getAll().forEach(function (pokemon) {  //function to write the array to the document using forEach and keys (getAll) to access the information in IIFE.
  pokemonRepository.addListItem(pokemon);
 });
});
