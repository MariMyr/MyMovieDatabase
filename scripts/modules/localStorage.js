import { movieCards } from "../components/movieCard.js";

export function saveToFavorites(movie) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (!favorites.some(fav => fav.imdbID === movie.imdbID)) {
        favorites.push(movie);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

export function removeFromFavorites(movieID) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(movie => movie.imdbID !== movieID);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

export function displayFavorites() {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const cardContainer = document.getElementById('cardContainer');

    cardContainer.innerHTML = '';

    favorites = favorites.filter(movie => movie != null && typeof movie === 'object');

    if (favorites.length > 0) {
        movieCards(favorites, cardContainer);

        cardContainer.querySelectorAll('.fa-heart').forEach(heart => {
            heart.addEventListener('click', (event) => {
                event.stopPropagation();
                let imdbID = event.target.dataset.imdbid;

                if (imdbID) {
                    removeFromFavorites(imdbID);
                    displayFavorites();
                }
            });
        });
    } else {
        console.log('No favorites found');
    }
}

