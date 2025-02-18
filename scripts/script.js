import { fetchTopMovies, oData } from "./modules/api.js";
import { searchMovies } from "./modules/api.js";
import { renderTrailers } from "./modules/caroussel.js";
import { movieCards } from "./components/movieCard.js";

if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    console.log('index.html');

} else if (window.location.pathname === '/favorites.html') {
    console.log('favorites.html');

} else if (window.location.pathname === '/singleMovie.html') {
    console.log('singleMovie.html');
    let id = localStorage.getItem('singleMovie');
    console.log(id);
    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    let movie = movies.find(movie => movie.imdbID === (id));
    console.log(`Detta är ${movie.Title}s sida`);  

} else if (window.location.pathname === '/search.html') {
    console.log('search.html');

}

async function setupPage() {
    if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
        return; // Hoppa över om vi INTE är på index.html
    }

    await fetchTopMovies(); // Vänta på att filmerna hämtas

    if (oData.topMovieList.length > 0) {
        movieCards(oData.topMovieList); // Skickar in filmlistan till movieCards()
        const randomMovies = oData.topMovieList.sort(() => 0.5 - Math.random()).slice(0, 5);
        randomMovies.forEach((movie, i) => renderTrailers(movie, i + 1));
    } else {
        console.error("No movielist was found.");
    }

    await searchMovies();
}
setupPage();