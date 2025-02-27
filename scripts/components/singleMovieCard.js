import { toggleFavorite } from "../utils/favoritesUtils.js";

export function detailedMovieCard(movie) {
    const container = document.querySelector('#movieInformation');
    container.innerHTML = '';

    const cardRef = document.createElement('article');
    cardRef.className = 'singleMovie-card';

    const posterUrl = movie.Poster === 'N/A' ? "./res/icons/missing-poster.svg" : movie.Poster;
    const posterRef = document.createElement('img');
    posterRef.src = posterUrl;
    posterRef.alt = `${movie.Title} poster`;

    posterRef.onError = () => {
        posterRef.src = "./res/icons/missing-poster.svg";
    }

    cardRef.appendChild(posterRef);

    const detailsRef = document.createElement('div');
    detailsRef.className = 'movie-details';

    const titleRef = document.createElement('h2');
    titleRef.className = 'title';
    titleRef.textContent = movie.Title;
    detailsRef.appendChild(titleRef);

    const ratingRef = document.createElement('p');
    ratingRef.className = 'imdb-rating';
    ratingRef.textContent = `⭐ ${movie.imdbRating} / 10`;
    detailsRef.appendChild(ratingRef);

    const infoRef = document.createElement('section');
    infoRef.className = 'movie-info';

    const infoList = [
        { label: 'Year', value: movie.Year },
        { label: 'Runtime', value: movie.Runtime },
        { label: 'Genre', value: movie.Genre },
        { label: 'Director', value: movie.Director },
        { label: 'Actors', value: movie.Actors }
    ];

    infoList.forEach(item => {
        const pRef = document.createElement('p');
        pRef.innerHTML = `<strong>${item.label}:</strong> ${item.value}`;
        infoRef.appendChild(pRef);
    });
    detailsRef.appendChild(infoRef);

    const plotRef = document.createElement('p');
    plotRef.className = 'plot';
    plotRef.textContent = movie.Plot;
    detailsRef.appendChild(plotRef);

    // const trailerButton = document.createElement('button');
    // trailerButton.className = 'trailer-button';
    // trailerButton.textContent = 'Watch Trailer';

    // trailerButton.addEventListener('click', () => {
    //     const query = `${movie.Title} offical trailer`;
    //     const youtubeSearchURL = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
    //     window.open(youtubeSearchURL, '_blank');
    // });

    // detailsRef.appendChild(trailerButton);

    const heartRef = document.createElement('span');
    heartRef.className = 'favorite-heart far fa-heart';
    heartRef.dataset.movieID = movie.imdbID;

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.some(fav => fav && fav.imdbID === movie.imdbID)) {
        heartRef.classList.toggle('fas');
        heartRef.classList.toggle('far');
    }
    heartRef.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(heartRef, movie);
    });

    cardRef.appendChild(detailsRef);
    cardRef.appendChild(heartRef);
    container.appendChild(cardRef);
}
