const whiterose = ["Ruby", "Weiss"];
const bumblebee = ["Yang", "Blake"];

const rwby = [...whiterose, ...bumblebee];
const teams = ["Penny", ...whiterose, "Zweii", ...bumblebee];

console.log(rwby, teams);

// OBJECTS

const statusChar = {
    alive: true,
    huntress: false,
    semblance: true
}

const char = {
    name: "Cinder",
    alignment: "Chaotic Evil",
    origin: "Mistral"
}

const fullRecord = {
    ...char,
    weapon: "Midnight",
    ...statusChar
}

console.log(fullRecord);

//  Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Passion Fruit', 'Barries', 'Acerola'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Chocolate', 'Honey'];

const fruitSalad = (specialFruit, additionalItens) => {
  const theSalad = [...specialFruit, ...additionalItens];
  return theSalad;
};

console.log(fruitSalad(specialFruit, additionalItens));