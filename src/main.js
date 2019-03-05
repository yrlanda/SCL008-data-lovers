/* Manejo del DOM */
window.onload = () => {
  const data = window.pokemon.pokemon;
  const pokemon_list = document.getElementById('pokemon');
  const selectType = document.getElementById("type");
  const selectOrder = document.getElementById('order');

  showCards(data);

  selectType.addEventListener('change', () => {

    let condition = selectType.value;
    let filtered = window.filterType(data, condition);

    showCards(filtered);
  });

  selectOrder.addEventListener('change', () => {

    let sort_condition = selectOrder.value;
    let sorted = window.sortData(data, sort_condition);

    showCards(sorted);
  });

  function showCards(datos) {
    let html = ``;

    datos.forEach(pokemon => {
      html += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" data-target=".bd-example-modal-lg" data-toggle="modal">
          <div class="card">
            <img src="${pokemon.img}" class="card-img-top" alt="${pokemon.name}">
            <div class="card-body">
              <h5 class="card-title">${pokemon.name}</h5>
              <hr />
              <p class="card-text">${pokemon.egg}</p>
              <p class="card-text">${pokemon.candy}</p>
            </div>
          </div>
        </div>`;

      pokemon_list.innerHTML = html;
    })
  }
}
