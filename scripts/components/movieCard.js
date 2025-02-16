export function movieCards(movieList) {

    const container = document.querySelector('#cardContainer');
    movieList.forEach(movie => {
        // skapa ett kort
        const cardRef = document.createElement('article');
        cardRef.className = 'movie-card'; // Lägg gärna till en klass för styling

        // Lägg till titel
        const titleRef = document.createElement('h3');
        titleRef.textContent = movie.Title;
        cardRef.appendChild(titleRef);

        // Lägg till Poster
        const posterRef = document.createElement('img');
        posterRef.src = movie.Poster;
        posterRef.alt = `${movie.Title} poster`;
        cardRef.appendChild(posterRef);

        // Lägg till kortet i container
        container.appendChild(cardRef);
    });
}
