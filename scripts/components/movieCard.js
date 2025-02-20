import { saveToFavorites, removeFromFavorites } from "../modules/localStorage.js";

// export function toggleFavorite(movie) {
//     let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
//     const isFavorite = favorites.some(fav => fav.imdbID === movie.imdbID);

//     if (isFavorite) {
//         removeFromFavorites();
//     } else {
//         saveToFavorites();
//     }
//     localStorage.setItem('favorites', JSON.stringify(favorites));
// }

export function movieCards(movieList) {
    console.log('movieCards() körs');
    const container = document.querySelector('#cardContainer');

    movieList.forEach(movie => {
        // skapa ett kort
        const cardRef = document.createElement('article');
        cardRef.className = 'movie-card';

        // Lägg till Poster
        const posterRef = document.createElement('img');
        posterRef.src = movie.Poster;
        posterRef.alt = `${movie.Title} poster`;
        cardRef.appendChild(posterRef);

        // Lägg till hjärta
        const heartRef = document.createElement('span');
        heartRef.className = 'far fa-heart'; // Start med kontur
        heartRef.dataset.movieID = movie.imdbID;

        // Kontrollera om filmen redan är en favorit och uppdatera hjärtats utseende
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (favorites.some(fav => fav && fav.imdbID === movie.imdbID)) {
            heartRef.classList.toggle('fas');
            heartRef.classList.toggle('far');
        }
        heartRef.addEventListener('click', (e) => {
            e.stopPropagation();

            let isFavorite = favorites.some(fav => fav && fav.imdbID === movie.imdbID);


            if (isFavorite) {
                //Ta bort filmer från favoriter
                favorites = favorites.filter(fav => fav && fav.imdbID !== movie.imdbID);
                heartRef.classList.remove('fas');
                heartRef.classList.add('far');
            } else {
                // Lägg till filmer
                if (movie && movie.imdbID) {
                    favorites.push(movie);
                    heartRef.classList.remove('far');
                    heartRef.classList.add('fas');
                } else {
                    console.error("Tried to add invalid movie to favorites:", movie);
                }
            }
            // Uppdatera localStorage
            localStorage.setItem('favorites', JSON.stringify(favorites));

        });
        cardRef.appendChild(heartRef);


        // Lägg till titel
        const titleRef = document.createElement('h3');
        titleRef.textContent = movie.Title;
        cardRef.appendChild(titleRef);


        // Klick-händelse för att gå till en ny sida
        cardRef.addEventListener('click', (e) => {
            e.stopPropagation();
            window.location.href = `singleMovie.html?id=${movie.imdbID}`; // ändra så man får upp mer infor? Bara id nu?
        })

        // Lägg till kortet i container
        container.appendChild(cardRef);
    });
}
