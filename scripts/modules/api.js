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
