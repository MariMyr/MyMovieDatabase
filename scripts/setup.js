// import { fetchSearchedMovies, fetchTopMovies, fetchSingleMovie, oData } from "./modules/api.js";
// import { renderTrailers } from "./modules/caroussel.js";
// import { movieCards } from "./components/movieCard.js";
// import { setupSearchForm } from "./utils/search.js";
// import { detailedMovieCard } from "./components/singleMovie.js";
// import { displayFavorites } from "./modules/localStorage.js";


import { homePageSetup } from "./pages/home.js";
import { searchPageSetup } from "./pages/search.js";
import { singleMoviePageSetup } from "./pages/singleMovie.js";
import { favoritesPageSetup } from "./pages/favorites.js";


if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    homePageSetup();

} else if (window.location.pathname === '/search.html') {
    searchPageSetup();

} else if (window.location.pathname === '/singleMovie.html') {
    singleMoviePageSetup();

} else if (window.location.pathname === '/favorites.html') {
    favoritesPageSetup();

}

// async function setupPage() {
//     if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
//         return; // Hoppa över om vi INTE är på index.html
//     }
//     console.log('index.html');

//     await fetchTopMovies();

//     if (oData.topMovieList.length > 0) {
//         movieCards(oData.topMovieList); // Skickar in filmlistan till movieCards()
//         const randomMovies = oData.topMovieList.sort(() => 0.5 - Math.random()).slice(0, 5);
//         randomMovies.forEach((movie, i) => renderTrailers(movie, i + 1));
//     } else {
//         console.error("No movielist was found.");
//     }
//     setupSearchForm();
// }

// async function searchPageSetup() {
//     if (window.location.pathname !== '/search.html') {
//         return; // Hoppa över om vi INTE är på search.html
//     }
//     console.log(window.location);
//     let params = new URLSearchParams(window.location.search);
//     console.log(params);
//     let value = params.get('movie');
//     console.log(value);

//     if (!value) {
//         console.error("No search query found.");
//         return;
//     }

//     let movies = await fetchSearchedMovies(value);
//     movieCards(movies);

//     if (!Array.isArray(movies)) {
//         console.error("Fetched movies is not an array:", movies);
//         return;
//     }
// }
// searchPageSetup();

// async function singleMoviePageSetup() {
//     if (window.location.pathname !== '/singleMovie.html') {
//         return
//     }
//     const urlParams = new URLSearchParams(window.location.search);
//     const imdbID = urlParams.get('id');

//     if (!imdbID) {
//         console.error('No imdbID found in URL');
//         return;
//     }

//     try {
//         const singleMovie = await fetchSingleMovie(imdbID);
//         detailedMovieCard(singleMovie);  // Rendera informationen
//     } catch (error) {
//         console.error('Error fetching movie:', error);
//     }
//     ;
// }
// singleMoviePageSetup();

// function favoritesPageSetup() {
//     if (window.location.pathname !== '/favorites.html') {
//         return;
//     }
//     displayFavorites();
// }
