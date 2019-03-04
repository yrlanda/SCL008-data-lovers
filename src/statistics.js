window.onload = () => {
  const data = window.pokemon.pokemon;
  const percentages = document.getElementById('percentages');
  const showTypes = document.getElementById('showTypes');
  const shotWeaknesses = document.getElementById('showWeaknesses');

  showTypes.addEventListener('click', event => {
    showComputeTypes();
  });

  shotWeaknesses.addEventListener('click', event => {
    showComputeWeaknesses();
  });

  const showComputeTypes = () => {
    const types = computeTypes(data);
    let html = '';

    Object.keys(types).sort().forEach(type => {
      html += `${type}<div class="progress">
                <div class="progress-bar bg-success" role="progressbar" style="width: ${types[type]}%" aria-valuenow="${types[type]}" aria-valuemin="0" aria-valuemax="100">
                ${types[type]}%
                </div>
              </div>`;
    })

    percentages.innerHTML = html;
  }

  const showComputeWeaknesses = () => {
    const weaknesses = computeWeaknesses(data);
    let html = '';

    Object.keys(weaknesses).sort().forEach(weakness => {
      html += `${weakness}<div class="progress">
                <div class="progress-bar bg-success" role="progressbar" style="width: ${weaknesses[weakness]}%" aria-valuenow="${weaknesses[weakness]}" aria-valuemin="0" aria-valuemax="100">
                  ${weaknesses[weakness]}%
                </div>
              </div>`;
    })

    percentages.innerHTML = html;
  }
}