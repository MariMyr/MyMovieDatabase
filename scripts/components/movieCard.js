export function movieCards(movieList) {
    console.log('movieCards() körs');
    const container = document.querySelector('#cardContainer');

    movieList.forEach(movie => {
        // skapa ett kort
        const cardRef = document.createElement('article');
        cardRef.addEventListener('click', () => {
            localStorage.setItem('singleMovie', (movie.imdbID));
        })
        cardRef.className = 'movie-card'; // Lägg gärna till en klass för styling

        // Lägg till titel
        const titleRef = document.createElement('h3');
        titleRef.textContent = movie.Title;
        cardRef.appendChild(titleRef);

        // Lägg till hjärta
        const heartRef = document.createElement('span');
        heartRef.className = 'far fa-heart'; // Start med kontur
        heartRef.addEventListener('click', () => {
            heartRef.classList.toggle('fas');
            heartRef.classList.toggle('far'); // Växla mellan klasser
        });
        cardRef.appendChild(heartRef);

        // Lägg till kortet i container
        container.appendChild(cardRef);

        // Lägg till Poster
        const posterRef = document.createElement('img');
        posterRef.src = movie.Poster;
        posterRef.alt = `${movie.Title} poster`;
        cardRef.appendChild(posterRef);

        // Klick-händelse för att gå till en ny sida
        posterRef.addEventListener('click', () => {
            window.location.href = `singleMovie.html?id=${movie.imdbID}`; // ändra så man får upp mer infor? Bara id nu?
        })

        // Lägg till kortet i container
        container.appendChild(cardRef);
    });
}
