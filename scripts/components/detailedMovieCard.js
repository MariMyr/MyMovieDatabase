export function detailedMovieCard(movie) {
    console.log('detailedMovieCard() körs');
    const container = document.querySelector('#movieInformation');

    // Skapa kort
    const cardRef = document.createElement('article');
    cardRef.className = 'movie-information';

    // Lägga till hjärta
    const heartRef = document.createElement('span');
    heartRef.className = 'far fa-heart'; // Start med kontur
    heartRef.addEventListener('click', () => {
        heartRef.classList.toggle('fas');
        heartRef.classList.toggle('far'); // Växla mellan klasser
    });
    cardRef.appendChild(heartRef);

    // Lägga till poster
    const posterRef = document.createElement('img');
    posterRef.src = movie.Poster;
    posterRef.alt = `${movie.Title} poster`;
    cardRef.appendChild(posterRef);

    // Lägga till titel
    const titleRef = document.createElement('h3');
    titleRef.textContent = movie.Title;
    cardRef.appendChild(titleRef);

    // Lägga till imdb rating
    const ratingRef = document.createElement('h4');
    ratingRef.textContent = `Imdb-rating: ${movie.imdbRating}`; // Lägga till en stjärna framför css
    container.appendChild(ratingRef);

    // Lägga till year
    const yearRef = document.createElement('p');
    yearRef.textContent = `Year: ${movie.Year}`;
    container.appendChild(yearRef);

    // Lägga till genre
    const genreRef = document.createElement('p');
    genreRef.textContent = `Genre: ${movie.Genre}`;
    container.appendChild(genreRef);

    // Lägga till director
    const directorRef = document.createElement('p');
    directorRef.textContent = `Director: ${movie.Director}`;
    container.appendChild(directorRef);

    // Lägga till actors
    const actorRef = document.createElement('p');
    actorRef.textContent = `Actors: ${movie.Actors}`;
    container.appendChild(actorRef);

    // Lägga till plot
    const plotRef = document.createElement('p');
    plotRef.textContent = `Plot: ${movie.Plot}`;
    container.appendChild(plotRef);

    // Lägg till kortet i container
    container.appendChild(cardRef);


}