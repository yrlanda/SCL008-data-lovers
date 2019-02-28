const inputFilterByName = document.getElementById('filter_by_name');
const inputFilterByType = document.getElementById('filter_by_type');
const totalPokemon = document.getElementById('total_pokemon');
const averageWeight = document.getElementById('average_weight');
const averageHeight = document.getElementById('average_height');

// Se escucha al evento 'input', esto significa por cada vez que teclea el usuario se dispara el evento. 
inputFilterByName.addEventListener('input', (event) => {
  filter();
})

// Se escucha al evento 'input', esto significa por cada vez que teclea el usuario se dispara el evento. 
inputFilterByType.addEventListener('input', (event) => {
  filter();
})

/**
 * Método que se encarga de pintar el documento, lee la entrada de los inputs de filtros
 * y dibuja solo la colección de pokémon que coincide con los filtros.
 */
const filter = () => {
  let pokemon = POKEMON.pokemon;

  // Se filtra pokémon por el nombre primero
  pokemon = filterPokemonsByName(pokemon, inputFilterByName.value);
  // luego por el tipo, se reescribe variable con los valores ya que funciona como AND (Y).
  // En otras palabras, debe coincidir nombre y tipo en la búsqueda,
  pokemon = filterPokemonsByType(pokemon, inputFilterByType.value);

  render(pokemon);
}

/**
 * Función que retorna el html del pokémon para ser renderizado posteriormente.
 * 
 * @param {*} pokemon Objeto pokémon.
 * @returns String del html
 */
const pokemonHtml = (pokemon) => {
  let previousEvolutions = [];
  let nextEvolutions = [];

  const types = pokemon.type.map(type => {
    return `<img class="type" src="img/${type.toLowerCase()}.png" alt="${type}" title="${type}" />`;
  }).join('');

  const weaknesses = pokemon.weaknesses.map(weakness => {
    return `<img class="weakness" src="img/${weakness.toLowerCase()}.png" alt="${weakness}" title="${weakness}"/>`;
  }).join('');

  if (pokemon.hasOwnProperty('prev_evolution')) {
    previousEvolutions = pokemon.prev_evolution.map(evolution => {
      return `<figure>
                <img class="evolution" src="${POKEMON.pokemon.find(f => f.num == evolution.num).img}" alt="${evolution.name}" title="${evolution.name}" />
                <figcaption>${evolution.name}</figcaption>
              </figure>`;
    }).join('');
  }

  if (pokemon.hasOwnProperty('next_evolution')) {
    nextEvolutions = pokemon.next_evolution.map(evolution => {
      return `<figure>
                <img class="evolution" src="${POKEMON.pokemon.find(f => f.num == evolution.num).img}" alt="${evolution.name}" title="${evolution.name}" />
                <figcaption>${evolution.name}</figcaption>
              </figure>`;
    }).join('');
  }

  return `<div class="row fields">
            <div class="column">Name</div>
            <div class="column">Image</div>
            <div class="column">Type</div>
            <div class="column">Weakness</div>
            <div class="column">Previous Evolutions</div>
            <div class="column">Next Evolutions</div>
          </div>
          <div class="row data">
            <div class="column"><strong>${pokemon.name}</strong></div>
            <div class="column"><img src="${pokemon.img}" alt="${pokemon.name}" title="${pokemon.name}"/></div>
            <div class="column">${types}</div>
            <div class="column">${weaknesses}</div>
            <div class="column">${previousEvolutions}</div>
            <div class="column">${nextEvolutions}</div>
          </div>`
}

/**
 * Función que retorna los pokémon que parte del nombre coincide con la búsqueda.
 * 
 * @param {*} pokemon Colección de pokémon
 * @param {*} query Texto de búsqueda
 * @returns Colección filtrada de pokémon
 */
const filterPokemonsByName = (pokemon, query) => {
  if (query == null) {
    query = '';
  }

  return pokemon.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
};

/**
 * Función que retorna los pokémon que parte del tipo coincide con la búsqueda.
 * 
 * @param {*} pokemon Colección de pokémon
 * @param {*} query Texto de búsqueda
 * @returns Colección filtrada de pokémon 
 */
const filterPokemonsByType = (pokemon, query) => {
  if (query == null) {
    query = '';
  }

  return pokemon.filter(p => p.type.filter(t => t.toLowerCase().includes(query.toLowerCase())).length > 0);
};

/**
 * Método que pinta en pantalla la colección de pokemon.
 * 
 * @param {*} pokemon Colección de pokémon
 */
const render = pokemon => {
  let html = '';

  pokemon.forEach((p) => {
    html = html + pokemonHtml(p);
  })

  document.getElementById('list').innerHTML = html;
};

// A continuación se ejecutará algunas instrucciones al momento de carga de la aplicación.

// Total de pokémon
totalPokemon.innerHTML = POKEMON.pokemon.length;

// Promedio de peso de los pokémon
averageWeight.innerHTML = (POKEMON.pokemon.reduce((a, b) => {
  return {weight: parseFloat(a.weight) + parseFloat(b.weight)};
}).weight / POKEMON.pokemon.length).toFixed(2);

// Promedio de altura de los pokémon
averageHeight.innerHTML = (POKEMON.pokemon.reduce((a, b) => {
  return {height: parseFloat(a.height) + parseFloat(b.height)};
}).height / POKEMON.pokemon.length).toFixed(2);

// Se ejecuta el filtro al iniciar la página, como no habrá texto en los input, cargará todos los pokémon.
filter();