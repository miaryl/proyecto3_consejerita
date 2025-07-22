(() => {
    const btn = document.getElementById("fetchBtn"); 
    const showFact = document.getElementById("fact");
  
    btn.addEventListener('click', fetchFact);
  
    function fetchFact(){
        fetch('https://uselessfacts.jsph.pl/random.json?language=en')
        .then(response => response.json())
        .then(data => {
            showFact.textContent = data.text;
        })
        .catch(error => {
            showFact.textContent = "sorry there is some error...";
            console.error('error', error);
        });
    }
  })();