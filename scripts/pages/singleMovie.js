import { fetchSingleMovie } from "../modules/api.js";
import { detailedMovieCard } from "../components/singlemoviecard.js";

export async function singleMoviePageSetup() {
    const urlParams = new URLSearchParams(window.location.search);
    const imdbID = urlParams.get('id');

    if (!imdbID) {
        console.error('No imdbID found in URL');
        return;
    }

    try {
        const singleMovie = await fetchSingleMovie(imdbID);
        detailedMovieCard(singleMovie);
    } catch (error) {
        console.error('Error fetching movie:', error);
    }
}


