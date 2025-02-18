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

export async function searchMovies() {
    try {
        const response = await fetch('http://www.omdbapi.com/?apikey=3e42d96e&');    
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let movies = await response.json();
        oData.topMovieList = movies;
    } catch (error) {
    console.error("Error fetching movies: ", error);
    }
}

// export async function fecthMovieDetails() {  // detaljerad info om specifik film
    
// }