import { movieCards } from "../components/movieCard.js";
import { toggleFavorite } from "../utils/favoritesUtils.js";

export function displayFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const cardContainer = document.querySelector('#cardContainer');

    cardContainer.innerHTML = '';

    favorites = favorites.filter(movie => movie != null && typeof movie === 'object');

    if (favorites.length > 0) {
        movieCards(favorites, cardContainer);

        cardContainer.querySelectorAll('.fa-heart').forEach(heart => {
            heart.addEventListener('click', (event) => {
                event.stopPropagation();
                let imdbID = event.target.dataset.imdbid;

                if (imdbID) {
                    let movie = favorites.find(fav => fav.imdbID === imdbID);
                    toggleFavorite(event.target, movie);
                    displayFavorites();
                }
            });
        });
    } else {
        console.log('No favorites found');
    }
}

