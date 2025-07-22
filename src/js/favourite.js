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
  
      if (fact && fact !== "sorry there is some error..." && fact !== "Sorpréndete") {
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
      favoritesSection.style.display = 'block';
  
      renderFavorites();
    }
  
    function renderFavorites() {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      favoritesList.innerHTML = '';
  
      if (favorites.length === 0) {
        favoritesList.textContent = "No tienes ningún consejito favorito aún";
      } else {
        const list = document.createElement("ul");
        list.style.listStyle = "none";
        list.style.padding = "0";
        list.style.display = "flex";
        list.style.flexDirection = "column";
        list.style.gap = "1rem";
  
        favorites.forEach((fact, index) => {
          const item = document.createElement("li");
          item.style.background = "linear-gradient(135deg, #FED2E2, #E9A5F1, #C68EFD, #8f87f1)";
          item.style.padding = "1rem";
          item.style.borderRadius = "10px";
          item.style.color = "#000";
          item.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
          item.style.display = "flex";
          item.style.justifyContent = "space-between";
          item.style.alignItems = "center";
  
          const textSpan = document.createElement("span");
          textSpan.textContent = ` ${fact}`;
  
          const deleteBtn = document.createElement("button");
          deleteBtn.textContent = "✖";
          deleteBtn.style.background = "black";
          deleteBtn.style.border = "none";
          deleteBtn.style.color = "white";
          deleteBtn.style.padding = "0.2rem 0.7rem";
          deleteBtn.style.borderRadius = "5px";
          deleteBtn.style.cursor = "pointer";
  
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
      consejitosSection.style.display = 'block';
    }
  })();