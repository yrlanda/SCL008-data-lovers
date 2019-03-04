/* Manejo del DOM */
window.onload = () => {
  const data = window.pokemon.pokemon;
  const pokemon_list = document.getElementById('pokemon');

  showCards(data);


  const selectType = document.getElementById("type");

  selectType.addEventListener('change', () => {

    let condition = selectType.value;
    let filtered = window.filterType(data, condition);
    pokemon_list.innerHTML = '';

    showCards(filtered);
  });


  const selectOrder = document.getElementById('order');
  selectOrder.addEventListener('change', () => {

    let sort_condition = selectOrder.value;
    let sorted = window.sortData(data, sort_condition);
    pokemon_list.innerHTML = '';

    showCards(sorted);

  });



  function showCards(datos) {
    pokemon_list.innerHTML = '';
    let counter = 0;
    let texto = ``

    datos.forEach(pokemon => {

      if (counter % 5 == 0) {
        if (counter > 0) {
          texto += `</div>`
        }
        texto += `<div class="row">
        <div class="col-sm-2 offset-sm-1">
      <div class="card" >
        <img src="${pokemon.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${pokemon.name}</h5>
          <hr />
          <p class="card-text">${pokemon.egg}</p>
          <p class="card-text">${pokemon.candy}</p>
        </div>
        </div>
      </div>`
      }else {
        texto += `
      <div class="col-sm-2" data-target=".bd-example-modal-lg" data-toggle="modal">
      <div class="card" >
        <img src="${pokemon.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${pokemon.name}</h5>
          <hr />
          <p class="card-text">${pokemon.egg}</p>
          <p class="card-text">${pokemon.candy}</p>
        </div>
        </div>
      </div>`;

      }
      

      counter++;
    });
    pokemon_list.innerHTML = texto;

  }

  

}
