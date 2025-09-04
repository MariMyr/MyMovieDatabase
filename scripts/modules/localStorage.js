import { movieCards } from "../components/movieCard.js";
import { toggleFavorite } from "../utils/favoritesutils.js";

export function displayFavorites() {
  console.log("displayFavorites startar...");
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  console.log("Hämtade favoriter från localStorage:", favorites);
  const cardContainer = document.querySelector("#cardContainer");
  if (!cardContainer) {
        console.error("Ingen #cardContainer hittades i DOM!");
        return;
  }
  cardContainer.innerHTML = "";

  favorites = favorites.filter(
    (movie) => movie != null && typeof movie === "object"
  );

  if (favorites.length > 0) {
    movieCards(favorites, cardContainer);

    cardContainer.querySelectorAll(".fa-heart").forEach((heart) => {
      heart.addEventListener("click", (event) => {
        event.stopPropagation();

        let updatedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const imdbID = event.target.dataset.imdbId;

        if (imdbID) {
          let movie = updatedFavorites.find((fav) => fav.imdbID === imdbID);
          toggleFavorite(event.target, movie);

        }
      });
    });
  } else {
    cardContainer.innerHTML = "<p>No favorites yet!</p>";
  }
}
