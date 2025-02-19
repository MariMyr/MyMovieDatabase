export const oData = { topMovieList: [] };

export async function fetchTopMovies() {
    try {
        const response = await fetch('https://santosnr6.github.io/Data/favoritemovies.json');    
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let movies = await response.json();
        oData.topMovieList = movies;
        localStorage.setItem('movies', JSON.stringify(movies)); // Spara i localStorage
    } catch (error) {
    console.error("Error fetching movies: ", error);
    }
}

export async function fetchSearchedMovies(searchQuery) {
    if (!searchQuery) {
        console.error("No search query provided.");
        return [];
    }
    try {
    const response = await fetch(`http://www.omdbapi.com/?apikey=3e42d96e&s=${searchQuery}*`);    
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();
        return data.Search || []; // Returnerar endast listan av filmer
    } catch (error) {
    console.error("Error fetching movies: ", error);
    return [];
    }
}

export async function fetchSingleMovie(imdbID) {  // detaljerad info om specifik film
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=3e42d96e&i=${imdbID}&plot=full`)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let movie = await response.json();
        return movie;
    } catch (error) {

    }
}