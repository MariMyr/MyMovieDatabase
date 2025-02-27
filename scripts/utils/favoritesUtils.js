export function toggleFavorite(heartRef, movie) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let isFavorite = favorites.some(fav => fav && fav.imdbID === movie.imdbID);

    if (isFavorite) {
        favorites = favorites.filter(fav => fav && fav.imdbID !== movie.imdbID);
        heartRef.classList.remove('fas');
        heartRef.classList.add('far');
    } else {
        favorites.push(movie);
        heartRef.classList.remove('far');
        heartRef.classList.add('fas');

    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

