let pokemonRepository = (function () {
let pokemonList = [];
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  // let modalContainer = document.querySelector('#modal-container'); not needed with bootstrap
    
  function showModal (name, type, height, weight, ability, img) {

    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");

    modalTitle.empty();
    modalBody.empty();

    let pokeName = $("<h1>" + name + "</h1>");

    let pokeHeight = $("<p>" + height + "</p>"); //bootstrap run modal. Personally written modal found below. 

    let pokeWeight = $("<p>" + weight + "</p>");

    let pokeType = $("<p>" + type + "</p>");

    let pokeAbilities = $("<p>" + ability + "</p>");

    let pokeImage = $('<img class="modal-image">');
    pokeImage.attr("src", img);

    modalTitle.append(pokeName);
    modalBody.append(pokeType)
    modalBody.append(pokeHeight);
    modalBody.append(pokeWeight);
    modalBody.append(pokeAbilities);
    modalBody.append(pokeImage);
  }

  function add(pokemonAdd) {   //function to be able to add a pokemon to the array.
    pokemonList.push(pokemonAdd);
  }

  function getAll() { //function to be performed when called on to access the IIFE safe array.
    return pokemonList;
  }

  function showDetails(pokemon) {  //function that will print the pokemon information to the console log when a pokemon is clicked.
    loadDetails (pokemon).then(function(){
      console.log(pokemon)
      let name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
      let typeList = '';
      pokemon.types.forEach((type) => {
        if(type.slot == 1) typeList += 'Type: ' + type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1);
        else typeList += ' and ' + type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1);
      });
      let height = 'Height: ' + pokemon.height + 'ft';
      let weight = 'Weight: ' + pokemon.weight + ' pounds';
      let abilityList = '';
      pokemon.abilities.forEach((ability) => {
        if(ability.slot == 1) abilityList += 'Abilities: ' + ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1);
        else abilityList += ' and ' + ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1);
      });
      showModal(name, typeList, height, weight, abilityList, pokemon.imageUrl)//function that calls to the Modal that will show the information for the Pokemon.
    });
  }

  function addListItem(pokemon) {  //crates buttons for every pokemon in the array. 
    let listOfPokemon = document.querySelector('.pokemon-list');  
    let aPokemon = document.createElement('li');
    aPokemon.classList.add('list-group-item');
    let button = document.createElement('button');
    button.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    button.classList.add('button-class');
    button.classList.add('btn');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#poke-modal')

    button.addEventListener('click', function () {
        return showDetails(pokemon)
      } //sends the pokemon as its parameter to the showDetails function to return information to the console and make the modal.
      );
    $('ul').addClass('list-group');
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
      item.weight = details.weight;
      item.types = details.types;
      item.abilities = details.abilities;
  //    showModal(item); //added to call on function with let variables
    }).catch(function(e) {
      console.log(e);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,  //Keys to be able to call on a function to be performed.
    loadList: loadList,
    loadDetails: loadDetails,
  };
})(); //IIFE to be able to keep all information within safe from interference so it can be called uppon in the future.

pokemonRepository.loadList().then(function(){   //loads pokemon from the external API
 pokemonRepository.getAll().forEach(function (pokemon) {  //function to write the array to the document using forEach and keys (getAll) to access the information in IIFE.
  pokemonRepository.addListItem(pokemon);
 });
});

// $('ul').addClass('list-group')



// modalContainer.innerHTML = '';
//     let modal = document.createElement('div');
//     modal.classList.add('modal')
    
//     let closeButtonElement = document.createElement ('button');
//     closeButtonElement.classList.add ('modal-close');
//     closeButtonElement.innerText = 'Close';
//     closeButtonElement.addEventListener('click', hideModal);

//     let pokeName = document.createElement('h1');
//     pokeName.classList.add('poke-name');
//     pokeName.innerText = name;

//     let pokeHeight = document.createElement('p');
//     pokeHeight.classList.add('poke-info');
//     pokeHeight.innerText = height;

//     let pokeType = document.createElement('p');
//     pokeType.classList.add('poke-info');
//     pokeType.innerText = type;

//     let pokeImage = document.createElement('img');
//     pokeImage.classList.add('poke-image');
//     pokeImage.setAttribute('src', img);
//     // pokeImage.innerHTML = img;

//     modal.appendChild(closeButtonElement);
//     modal.appendChild(pokeName);
//     modal.appendChild(pokeType)
//     modal.appendChild(pokeHeight);
//     modal.appendChild(pokeImage);
//     modalContainer.appendChild(modal);
    
//     modalContainer.classList.add('is-visible');
//   }