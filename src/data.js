/* Manejo de data */
// función para ordenar

const sortData = (data, condition) => {

  let sorted = [];

  if (condition === 'az') {
    sorted = data.sort(sortByName);
  }
  if (condition === 'za') {
    sorted = data.sort(sortByName).reverse();
  }
  if (condition === 'idasc') {
    sorted = data.sort(sortById);
  }
  if (condition === 'iddesc') {
    sorted = data.sort(sortById).reverse();
  }

  return sorted;
};

window.sortData = sortData;


// logica para ordenar por nombre
function sortByName(a, b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  
}

// logica para ordenar por Id
function sortById(a, b) {
  if (a.id < b.id)
    return -1;
  if (a.id > b.id)
    return 1;

}



//función para filtrar

const filterType = (data, condition) => {
  if (condition == "all") {
    return data;
  }
  const filteredType = data.filter(element => {
    return element.type.includes(condition) === true;
  })
  return filteredType;
}

window.filterType = filterType;

// Generar estadísticas de tipo
const computeTypes = data => {
  const types = {};

  data.forEach(pokemon => {
    pokemon.type.forEach(t => {
      if (!types.hasOwnProperty(t)) {
        types[t] = 0;
      }
  
      types[t]++;
    })
  });

  Object.keys(types).forEach(type => {
    types[type] = parseInt((types[type] / window.pokemon.pokemon.length) * 100);
  });

  return types;
}

window.computeTypes = computeTypes

// Generar estadísticas de debilidad
const computeWeaknesses = data => {
  const weaknesses = {};

  data.forEach(pokemon => {
    pokemon.weaknesses.forEach(t => {
      if (!weaknesses.hasOwnProperty(t)) {
        weaknesses[t] = 0;
      }
  
      weaknesses[t]++;
    })
  });

  Object.keys(weaknesses).forEach(weakness => {
    weaknesses[weakness] = parseInt((weaknesses[weakness] / window.pokemon.pokemon.length) * 100);
  })
  return weaknesses;
}

window.computeWeaknesses = computeWeaknesses;

const getPokemon = (data, pokemon_name) => {
  const result = data.find( pokemon => pokemon.name === pokemon_name); //.find es un metodo que busca un elemnt en la data que cumple con la condicion 

  return result;
}

window.getPokemon = getPokemon;