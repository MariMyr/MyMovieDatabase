import { fetchTopMovies, oData } from "../modules/api.js";
import { renderTrailers } from "../modules/caroussel.js";
import { movieCards } from "../components/moviecard.js";
import { setupSearchForm } from "../utils/utilssearch.js";

export async function homePageSetup() {
  await fetchTopMovies();

  if (oData.topMovieList.length > 0) {
    const shuffledMovies = [...oData.topMovieList].sort(
      () => Math.random() - 0.5
    );
    const randomTrailers = shuffledMovies.slice(0, 5);

    randomTrailers.forEach((movie, i) => renderTrailers(movie, i + 1));
    movieCards(shuffledMovies);
  } else {
    console.error("No movielist was found.");
  }
  setupSearchForm();
}
