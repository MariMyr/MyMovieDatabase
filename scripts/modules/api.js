
export const oData = { topMovieList: [] };

export async function fetchTopMovies() {
    try {
        const response = await fetch('https://santosnr6.github.io/Data/favoritemovies.json');    
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let movies = await response.json();
        oData.topMovieList = movies;
    } catch (error) {
    console.error("Error fetching movies: ", error);
    }
}
export async function movieCards() {
    // Vänta på att API:et ska hämta filmen innan renderingen
    await fetchTopMovies();

    const container = document.querySelector('#cardContainer');
    oData.topMovieList.forEach(movie => {
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
        posterRef.alt = `${movie.title} poster`;
        cardRef.appendChild(posterRef);

        // Lägg till kortet i container
        container.appendChild(cardRef);
    });
}
