let pokemonRepository = (function () {
let pokemonList = [
    {name: "Bulbausar", height: "0.7", type: ["Grass", "Poison"]},
    {name: "Charmander", height: "0.6", type: "Fire"},
    {name: "Squirtle", height: "0.5", type: "Water"},
    {name: "Pidgey", height: "0.3", type: ["Flying","Normal"]},
    {name: "Pikachu", height: "0.4", type: "Electric"},
    {name: "Jigglypuff", height: "0.5", type: ["Fairy","normal"]},
    {name: "Psyduck", height: "0.8", type: "Water"},
    {name: "Magnemite", height: "0.3", type: ["Electric","Steel"]},
    {name: "Horsea", height: "0.4", type: "Water"},
    {name: "Togepi", height: "0.3", type: "Fairy"}
  ]

  function add(pokemonAdd) {   //function to be able to add a pokemon to the array.
    pokemonList.push(pokemonAdd);
  }

  function getAll() { //function to be performed when called on to access the IIFE safe array.
    return pokemonList;
  }

  function showDetails(pokemon) {  //function that will print the pokemon information to the console log when a pokemon is clicked.
    console.log(pokemon);
  }

  function addListItem(pokemon) {  //crates buttons for every pokemon in the array. 
    let ListOfPokemon = document.querySelector('.pokemon-list');  
    let aPokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    button.addEventListener('click', showDetails);
    aPokemon.appendChild(button);
    ListOfPokemon.appendChild(aPokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem  //Keys to be able to call on a function to be performed.
  };
})(); //IIFE to be able to keep all information within safe from interference so it can be called uppon in the future.

console.log(pokemonRepository.getAll());
pokemonRepository.add({name: 'Loki Bean', height: '0.3', type: 'Dog'});

 pokemonRepository.getAll().forEach(function (pokemon) {  //function to write the array to the document using forEach and keys (getAll) to access the information in IIFE
  pokemonRepository.addListItem(pokemon);

 });
