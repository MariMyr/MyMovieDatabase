import { fetchSearchedMovies } from "./modules/api";
import { movieCards } from "../components/movieCard";

export async function randomMovie() {
    console.log('index.html');

    await fetchSearchedMovies();

    if (oData.topMovieList.length > 0) {
        movieCards(oData.topMovieList); // Skickar in filmlistan till movieCards()
        const randomTrailers = oData.topMovieList.sort(() => 0.5 - Math.random()).slice(0, 5);
        randomTrailers.forEach((movie, i) => renderTrailers(movie, i + 1));
    } else {
        console.error("No movielist was found.");
    }
    setupSearchForm();
}
