global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');
require('../src/data/pokemon/pokemon.js');

const data = window.pokemon.pokemon;


describe('orderData', () => {
  it('deberia de mostrar al pokemon Abra como el primero en la lista cuando se ordene de la  A - Z', () => {
    let pokemon_data = window.sortData(data, 'az');
    assert.deepEqual(pokemon_data[0].name, 'Abra');

  });

  it('deberia de mostrar al pokemon Zubat como el primero en la lista cuando se ordene de la  Z - A', () => {
    let pokemon_data = window.sortData(data, 'za');
    assert.deepEqual(pokemon_data[0].name, 'Zubat');

  });
  it('deberia de mostrar al pokemon Bulbasaur como el primero en la lista cuando se ordena Idasc ', () => {
    let pokemon_data = window.sortData(data, 'idasc');
    assert.deepEqual(pokemon_data[0].name, 'Bulbasaur');

  });
  it('deberia de mostrar al pokemon Mew como el primer pokemon de la lista cuando se ordedne Iddesc', () => {
    let pokemon_data = window.sortData(data, 'iddesc');
    assert.deepEqual(pokemon_data[0].name, 'Mew');

  });
});

describe('filterType', () => {
  it('deberia de mostrar 14 Pokemons de tipo Grass', () => {
    let pokemon_data = window.filterType(data, 'Grass');
    assert.deepEqual(pokemon_data.length, 14);

  });
  it('deberia de mostrar 3 Pokemons de tipo Ghost', () => {
    let pokemon_data = window.filterType(data, 'Ghost');
    assert.deepEqual(pokemon_data.length, 3);

  });
  it('deberia de mostrar 151 Pokemons de tipo All', () => {
    let pokemon_data = window.filterType(data, 'all');
    assert.deepEqual(pokemon_data.length, 151);

  });

});

describe('computeTypes', () => {
  it('deberia de mostrar 5 Pokemons de tipo Electric', () => {
    let pokemon_data = window.computeTypes(data);
    assert.deepEqual(pokemon_data.Electric, 5);

  });
 
});

describe('computeWeaknesses', () => {
  it('deberia de mostrar el 19% de los Pokemons que son debiles al Agua', () => {
    let pokemon_data = window.computeWeaknesses(data);
    assert.deepEqual(pokemon_data.Water, 19);

  });
 
});

describe('getPokemon', () => {
  it('deberia mostrar el nombre de Charmander', () => {
    let pokemon_data = window.getPokemon(window.pokemon.pokemon, "Charmander");
    assert.deepEqual(pokemon_data.name, "Charmander");

  });
 
});







