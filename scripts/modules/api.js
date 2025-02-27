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

export async function fetchSearchedMovies(searchQuery) {
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=3e42d96e&s=${searchQuery}*`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();

        if (data.Response === "False") {
            throw new Error(`OMDb API error: ${data.Error}`);
        }

        return data.Search || [];
    } catch (error) {
        console.error("Error fetching movies: ", error);
        return [];
    }
}

export async function fetchSingleMovie(imdbID) {
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=3e42d96e&i=${imdbID}&plot=full`)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let movie = await response.json();
        if (movie.Response === "False") {
            throw new Error(`OMDb API error: ${movie.Error}`);
        }
        return movie;
    } catch (error) {
        console.error("Error fetching movie: ", error);
        return null;
    }
}

