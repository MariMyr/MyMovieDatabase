export function detailedMovieCard(movie) {
    console.log('detailedMovieCard() körs');

    const container = document.querySelector('#movieInformation');
    container.innerHTML = '';

    // Skapa huvudcontainer för filmen
    const cardRef = document.createElement('article');
    cardRef.className = 'singleMovie-card';

    // Lägga till poster
    const posterUrl = movie.Poster === 'N/A' ? "./res/icons/missing-poster.svg" : movie.Poster;
    const posterRef = document.createElement('img');
    posterRef.src = posterUrl;
    posterRef.alt = `${movie.Title} poster`;

    posterRef.ifError = () => {
        posterRef.src = "./res/icons/missing-poster.svg";
    }

    cardRef.appendChild(posterRef);

    // Skapa container för att text
    const detailsRef = document.createElement('div');
    detailsRef.className = 'movie-details';

    // Lägga till titel
    const titleRef = document.createElement('h2');
    titleRef.className = 'title';
    titleRef.textContent = movie.Title;
    detailsRef.appendChild(titleRef);

    // imdb rating med stjärna
    const ratingRef = document.createElement('p');
    ratingRef.className = 'imdb-rating';
    ratingRef.textContent = `⭐ ${movie.imdbRating} / 10`;
    detailsRef.appendChild(ratingRef);

    // Info-sektion
    const infoRef = document.createElement('section');
    infoRef.className = 'movie-info';

    // Skapa en lista med info om film
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

    // Plot
    const plotRef = document.createElement('p');
    plotRef.className = 'plot';
    plotRef.textContent = movie.Plot;
    detailsRef.appendChild(plotRef);

    // Trailer-knapp
    const trailerButton = document.createElement('button');
    trailerButton.className = 'trailer-button';
    trailerButton.textContent = 'Watch Trailer';

    trailerButton.addEventListener('click', () => {
        const query = `${movie.Title} offical trailer`;
        const youtubeSearchURL = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
        window.open(youtubeSearchURL, '_blank');
    });

    detailsRef.appendChild(trailerButton);

    // Hjärta
    const heartRef = document.createElement('span');
    heartRef.className = 'favorite-heart far fa-heart';
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

    // Lägg till alla delar i kortet
    cardRef.appendChild(detailsRef);
    cardRef.appendChild(heartRef);
    // Lägg till kortet i container
    container.appendChild(cardRef);
}
