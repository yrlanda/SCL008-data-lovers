window.onload = () => {
  const data = window.pokemon.pokemon;
  const percentages = document.getElementById('percentages');
  const showTypes = document.getElementById('showTypes');
  const shotWeaknesses = document.getElementById('showWeaknesses');

  showTypes.addEventListener('click', () => {
    const types = window.computeTypes(data);
    document.getElementById('myChart').style.backgroundColor = "white";
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: ['', 'Bug', 'Dragon', 'Electric', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psychic', 'Rock', 'Water'],
        datasets: [{
          label: '% of Pokemons per type',
          data: [0, types.Bug, types.Dragon, types.Electric, types.Fighting, types.Fire, types.Flying, types.Ghost, types.Grass, types.Ground, types.Ice, types.Normal, types.Poison, types.Psychic, types.Rock, types.Water],
          backgroundColor: [
            'rgba(255, 99, 132, 0.9)',
            'rgba(54, 162, 235, 0.9)',
            'rgba(255, 206, 86, 0.9)',
            'rgba(75, 192, 192, 0.9)',
            'rgba(153, 102, 255, 0.9)',
            'rgba(255, 159, 64, 0.9)',
            'rgba(255, 99, 132, 0.9)',
            'rgba(54, 162, 235, 0.9)',
            'rgba(255, 206, 86, 0.9)',
            'rgba(75, 192, 192, 0.9)',
            'rgba(153, 102, 255, 0.9)',
            'rgba(255, 159, 64, 0.9)',
            'rgba(153, 102, 255, 0.9)',
            'rgba(255, 159, 64, 0.9)',
            'rgba(153, 102, 255, 0.9)',
            'rgba(75, 192, 192, 0.9)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  });

  shotWeaknesses.addEventListener('click', () => {
    const weaknesses = window.computeWeaknesses(data);
    document.getElementById('myChart').style.backgroundColor = "white";
    var ctx = document.getElementById('myChart').getContext('2d');
    ctx.clearRect(0, 0, 4000, 5000);

      var myChart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: ['', 'Bug', 'Dragon', 'Electric', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psychic', 'Rock', 'Water'],
        datasets: [{
          label: '% of Weaknessess',
          data: [0, weaknesses.Bug, weaknesses.Dragon, weaknesses.Electric, weaknesses.Fighting, weaknesses.Fire, weaknesses.Flying, weaknesses.Ghost, weaknesses.Grass, weaknesses.Ground, weaknesses.Ice, weaknesses.Normal, weaknesses.Poison, weaknesses.Psychic, weaknesses.Rock, weaknesses.Water],
          backgroundColor: [
            'rgba(255, 99, 132, 0.9)',
            'rgba(54, 162, 235, 0.9)',
            'rgba(255, 206, 86, 0.9)',
            'rgba(75, 192, 192, 0.9)',
            'rgba(153, 102, 255, 0.9)',
            'rgba(255, 159, 64, 0.9)',
            'rgba(255, 99, 132, 0.9)',
            'rgba(54, 162, 235, 0.9)',
            'rgba(255, 206, 86, 0.9)',
            'rgba(75, 192, 192, 0.9)',
            'rgba(153, 102, 255, 0.9)',
            'rgba(255, 159, 64, 0.9)',
            'rgba(153, 102, 255, 0.9)',
            'rgba(255, 159, 64, 0.9)',
            'rgba(153, 102, 255, 0.9)',
            'rgba(75, 192, 192, 0.9)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });  });

    

}