import { fetchSearchedMovies } from "../modules/api.js";
import { movieCards } from "../components/movieCard.js";

export async function searchPageSetup() {
    console.log('search.html');

    let params = new URLSearchParams(window.location.search);
    let value = params.get('movie');

    if (!value) {
        console.error("No search query found.");
        return;
    }

    let movies = await fetchSearchedMovies(value);

    if (!Array.isArray(movies)) {
        console.error("Fetched movies is not an array:", movies);
        return;
    }
    movieCards(movies);
}
