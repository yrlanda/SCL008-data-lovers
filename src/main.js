/* Manejo del DOM */
window.onload = () => {
    const data = window.pokemon.pokemon;
    const pokemon_list = document.getElementById('pokemon');

    showCards(data);


    const selectType = document.getElementById("type");

    selectType.addEventListener('change', () => {
        //const pokemon_list = document.getElementById('lista');
        let condition = selectType.value
        let filtered = window.filterType(data, condition);
        pokemon_list.innerHTML = '';
    });


    function showCards(datos) {
        pokemon_list.innerHTML = '';
    
        datos.forEach(pokemon => {
          pokemon_list.innerHTML += `<div class="card">
        <img src="${pokemon.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${pokemon.name}</h5>
          <p class="card-text">${pokemon.egg}</p>
          <p class="card-text">${pokemon.candy}</p>
        </div>
        </div`;
    
        });
    
      }





}