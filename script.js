// Toto je JavaScript komentář

// Najdeme hlavní nadpis na stránce podle jeho značky (tagu)
const hlavniNadpis = document.querySelector('h1');

// Přidáme "posluchač události", který čeká na kliknutí
hlavniNadpis.addEventListener('click', function() {
    alert('Ahoj! Klikl jsi na nadpis.');
});