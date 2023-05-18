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
  
  for (let i = 0; i < pokemonList.length; i++) {
    document.write("\n" + pokemonList[i].name);
    document.write(" (height = " + pokemonList[i].height + "), " + "\n");
    if (pokemonList[i].height > 0.65) {
      document.write("Huge Pokemon" + "\n")
    } 
      else if (pokemonList[i].height > 0.45 && pokemonList[i].height < 0.65) {
      document.write("Average Pokemon" + "\n");
    }
      else if (pokemonList[i].height < 0.45) {
      document.write("Just a Little Guy" + "\n");
      }
    }
  

  