import { fetchTopMovies, oData, movieCards } from "./modules/api.js";
import { renderTrailers } from "./modules/caroussel.js";
// import { movieCards } from "./components/movieCard.js";

if(window.location.pathname === '/' || window.location.pathname === '/index.html') {
    console.log('index.html');

} else if(window.location.pathname === '/favorites.html') {
    console.log('favorites.html');

} else if(window.location.pathname === '/movie.html') {
    console.log('movie.html');

} else if(window.location.pathname === '/search.html') {
    console.log('search.html');

}

// async function setupPage() {
//     try {
//         // Hämta topplistan av filmer
//         await fetchTopMovies();

//         // Om API-anropet inte lyckas, ge ett felmeddelande
//         if (oData.topMovieList.length === 0) {
//             throw new Error('Ingen filmdata hittades!');
//         }

//         // Välj slumpmässiga filmer för trailers
//         const randomMovies = oData.topMovieList.sort(() => 0.5 - Math.random()).slice(0, 5);
//         randomMovies.forEach((movie, i) => renderTrailers(movie, i + 1));

//         // Skapa movieCards
//         // movieCards();
//     } catch (error) {
//         console.error("Fel vid hämtning av filmer: ", error);
//     }
// }

// setupPage();

async function setupPage() {
    await fetchTopMovies();
    const randomMovies = oData.topMovieList.sort(() => 0.5 - Math.random()).slice(0, 5);
    randomMovies.forEach((movie, i) => renderTrailers(movie, i + 1));
    movieCards();
}

setupPage();

