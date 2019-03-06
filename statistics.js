window.onload = () => {
  const data = window.pokemon.pokemon;
  const percentages = document.getElementById('percentages');
  const showTypes = document.getElementById('showTypes');
  const shotWeaknesses = document.getElementById('showWeaknesses');

  showTypes.addEventListener('click', () => {
    showComputeTypes();
  });

  shotWeaknesses.addEventListener('click', () => {
    showComputeWeaknesses();
  });

  const showComputeTypes = () => {
    const types = window.computeTypes(data);
    let html = '';

    Object.keys(types).sort().forEach(type => {
      html += `${type}<div class="progress">
                <div class="progress-bar" role="progressbar" style="width: ${types[type]}%" aria-valuenow="${types[type]}" aria-valuemin="0" aria-valuemax="100">
                ${types[type]}%
                </div>
              </div>`;window
    })

    percentages.innerHTML = html;
  }

  const showComputeWeaknesses = () => {
    const weaknesses = window.computeWeaknesses(data);
    let html = '';

    Object.keys(weaknesses).sort().forEach(weakness => {
      html += `${weakness}<div class="progress">
                <div class="progress-bar" role="progressbar" style="width: ${weaknesses[weakness]}%" aria-valuenow="${weaknesses[weakness]}" aria-valuemin="0" aria-valuemax="100">
                  ${weaknesses[weakness]}%
                </div>
              </div>`;
    })

    percentages.innerHTML = html;
  }
}