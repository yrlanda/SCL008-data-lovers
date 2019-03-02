/* Manejo de data */

const example = () => {
  return 'example';
};
window.example = example;

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





 
