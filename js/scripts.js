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

  function addListItem(pokemon) {
    let ListOfPokemon = document.querySelector('.pokemon-list');  
    let aPokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
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



/*    document.write('<p>' + pokemon.name + ' who is ' + pokemon.height + ' meters tall' + '</p>');
    document.write
    if (pokemon.height > 0.65) {
      document.write("<h4>" + "Huge Pokemon" + "</h4>")
    } 
      else if (pokemon.height > 0.45 && pokemon.height < 0.65) {
      document.write("<h4>" + "Average Pokemon" + "</h4>");
    }
      else if (pokemon.height < 0.45) {
      document.write("<h4>" + "Just a Little Guy" + "</h4>");
     }})
*/
  
/*
  Old Code I am keeping for reference and will delete before posting final project
  //I added this to loop through showing different pokemon and their heights.

  for (let i = 0; i < pokemonList.length; i++) {
    document.write("<p>" + pokemonList[i].name);
    document.write(" (height = " + pokemonList[i].height + "), " + "</p>");
    //This gives each height another note after it is shown.
    if (pokemonList[i].height > 0.65) {
      document.write("<h4>" + "Huge Pokemon" + "</h4>")
    } 
      else if (pokemonList[i].height > 0.45 && pokemonList[i].height < 0.65) {
      document.write("<h4>" + "Average Pokemon" + "</h4>");
    }
      else if (pokemonList[i].height < 0.45) {
      document.write("<h4>" + "Just a Little Guy" + "</h4>");
      }
    }
*/
    