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
        if (favorites.some(fav => fav && fav.imdbID === movie.imdbID)) {
            heartRef.classList.toggle('fas');
            heartRef.classList.toggle('far');
        }
        heartRef.addEventListener('click', (e) => {
            e.stopPropagation();

            let isFavorite = favorites.some(fav => fav && fav.imdbID === movie.imdbID);

            if (isFavorite) {
                favorites = favorites.filter(fav => fav && fav.imdbID !== movie.imdbID);
                heartRef.classList.remove('fas');
                heartRef.classList.add('far');
            } else {
                if (movie && movie.imdbID) {
                    favorites.push(movie);
                    heartRef.classList.remove('far');
                    heartRef.classList.add('fas');
                } else {
                    console.error("Tried to add invalid movie to favorites:", movie);
                }
            }
            localStorage.setItem('favorites', JSON.stringify(favorites));

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
