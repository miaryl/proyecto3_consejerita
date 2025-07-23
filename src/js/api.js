(() => {
    const btn = document.getElementById("fetchBtn"); 
    const showFact = document.getElementById("fact");
  
    btn.addEventListener('click', fetchFact);
  
    function fetchFact(){
        const originalText = btn.textContent;
        btn.textContent = "Cargando...";
        btn.disabled = true;
    
        fetch('https://uselessfacts.jsph.pl/random.json?language=en')
        .then(response => response.json())
        .then(data => {
            showFact.textContent = data.text;

            btn.textContent = originalText === "Consejito" ? "Siguiente" : "Siguiente";
            btn.disabled = false;
        })
        .catch(error => {
            showFact.textContent = "sorry there is some error...";
            console.error('error', error);
            btn.textContent = originalText;
            btn.disabled = false;
        });
    }
  })();