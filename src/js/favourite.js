(() => {
  const favBtn = document.getElementById("favoriteBtn");
  const viewFavBtn = document.getElementById("viewFavoritesBtn");
  const backBtn = document.getElementById("backBtn");

  const consejitosSection = document.getElementById("consejitosSection");
  const favoritesSection = document.getElementById("favoritesSection");
  const favoritesList = document.getElementById("favoritesList");
  const showFact = document.getElementById("fact");

  favBtn.addEventListener('click', saveToFavorites);
  viewFavBtn.addEventListener('click', showFavorites);
  backBtn.addEventListener('click', showConsejitos);

  function saveToFavorites() {
    const fact = showFact.textContent;

    if (fact && fact !== "sorry there is some error..." && fact !== "Descubre tu dosis de alegría") {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

      if (!favorites.includes(fact)) {
        favorites.push(fact);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert("Consejito guardado como favorito!");
      } else {
        alert("Ya habías guardado este consejito");
      }
    } else {
      alert("Primero haz clic en 'Consejito' para obtener uno.");
    }
  }

  function showFavorites() {
    consejitosSection.style.display = 'none';
    favoritesSection.style.display = 'flex';

    renderFavorites();
  }

  function renderFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favoritesList.innerHTML = '';

    if (favorites.length === 0) {
      favoritesList.textContent = "No tienes ningún consejito favorito aún";
    } else {
      const list = document.createElement("ul");
      list.classList.add('favorites-list');

      favorites.forEach((fact, index) => {
        const item = document.createElement("li");
        item.classList.add('favorite-item');

        const textSpan = document.createElement("span");
        textSpan.textContent = ` ${fact}`;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "✖";
        deleteBtn.classList.add('delete-btn');

        deleteBtn.addEventListener("click", () => {
          favorites.splice(index, 1);
          localStorage.setItem('favorites', JSON.stringify(favorites));
          renderFavorites();
        });

        item.appendChild(textSpan);
        item.appendChild(deleteBtn);
        list.appendChild(item);
      });

      favoritesList.appendChild(list);
    }
  }

  function showConsejitos() {
    favoritesSection.style.display = 'none';
    consejitosSection.style.display = 'flex';
  }
})();