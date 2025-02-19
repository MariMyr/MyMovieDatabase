export function detailedMovieCard(movie) {
    console.log('detailedMovieCard() körs');

    const container = document.querySelector('#movieInformation');
    container.innerHTML = '';

    // Skapa huvudcontainer för filmen
    const cardRef = document.createElement('article');
    cardRef.className = 'singleMovie-card';

    // Lägga till poster
    const posterRef = document.createElement('img');
    posterRef.src = movie.Poster;
    posterRef.alt = `${movie.Title} poster`;
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

    trailerButton.addEventListener('click', ()=> {
        const query = `${movie.Title} offical trailer`;
        const youtubeSearchURL = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
        window.open(youtubeSearchURL, '_blank');
    });
   
    detailsRef.appendChild(trailerButton);

    // Hjärta (favorit-knapp)
    const heartRef = document.createElement('span');
    heartRef.className = 'favorite-heart far fa-heart'; // Börjar som "tomt" hjärta
    heartRef.addEventListener('click', () => {
        heartRef.classList.toggle('fas'); // Fylld ikon
        heartRef.classList.toggle('far'); // Tom ikon
    });

    // Lägg till alla delar i kortet
    cardRef.appendChild(detailsRef);
    cardRef.appendChild(heartRef);
    // Lägg till kortet i container
    container.appendChild(cardRef); 
}
