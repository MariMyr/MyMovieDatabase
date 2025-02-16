import { renderTrailers } from "./modules/caroussel.js";
import { fetchTopMovies, oData } from "./modules/api.js";

if(window.location.pathname === '/' || window.location.pathname === '/index.html') {
    console.log('index.html');

} else if(window.location.pathname === '/favorites.html') {
    console.log('favorites.html');

} else if(window.location.pathname === '/movie.html') {
    console.log('movie.html');

} else if(window.location.pathname === '/search.html') {
    console.log('search.html');

}

async function setupPage() {
    await fetchTopMovies();
    const randomMovies = oData.topMovieList.sort(() => 0.5 - Math.random()).slice(0, 5);
    randomMovies.forEach((movie, i) => renderTrailers(movie, i + 1));
}

setupPage();