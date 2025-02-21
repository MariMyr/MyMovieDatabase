import { fetchTopMovies, oData } from "../modules/api.js";
import { renderTrailers } from "../modules/caroussel.js";
import { movieCards } from "../components/movieCard.js";
import { setupSearchForm } from "../utils/search.js";

export async function homePageSetup() {
    console.log('index.html');

    await fetchTopMovies();

    if (oData.topMovieList.length > 0) {
        movieCards(oData.topMovieList); // Skickar in filmlistan till movieCards()
        const randomMovies = oData.topMovieList.sort(() => 0.5 - Math.random()).slice(0, 5);
        randomMovies.forEach((movie, i) => renderTrailers(movie, i + 1));
    } else {
        console.error("No movielist was found.");
    }
    setupSearchForm();
}
