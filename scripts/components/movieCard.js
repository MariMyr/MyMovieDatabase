import { toggleFavorite } from "../utils/favoritesUtils.js";

export function movieCards(movieList) {
    console.log('movieCards() körs');
    const container = document.querySelector('#cardContainer');

    movieList.forEach(movie => {
        const cardRef = document.createElement('article');
        cardRef.className = 'movie-card';

        const posterUrl = movie.Poster === 'N/A' ? "./res/icons/missing-poster.svg" : movie.Poster;
        const posterRef = document.createElement('img');
        posterRef.src = posterUrl;
        posterRef.alt = `${movie.Title} poster`;

        posterRef.ifError = () => {
            posterRef.src = "./res/icons/missing-poster.svg";
        }
        cardRef.appendChild(posterRef);

        const heartRef = document.createElement('span');
        heartRef.className = 'far fa-heart';
        heartRef.dataset.movieID = movie.imdbID;

        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (favorites.some(fav => fav?.imdbID === movie.imdbID)) {
            heartRef.classList.add('fas');
            heartRef.classList.remove('far');
        }
        
        heartRef.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(heartRef, movie);
        });

        cardRef.appendChild(heartRef);

        const titleRef = document.createElement('h3');
        titleRef.textContent = movie.Title;
        cardRef.appendChild(titleRef);

        cardRef.addEventListener('click', (e) => {
            e.stopPropagation();
            window.location.href = `singleMovie.html?id=${movie.imdbID}`;
        })
        container.appendChild(cardRef);
    });
}
