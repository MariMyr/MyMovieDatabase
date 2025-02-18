import { fetchSearchedMovies, fetchTopMovies, oData } from "./modules/api.js";
import { renderTrailers } from "./modules/caroussel.js";
import { movieCards } from "./components/movieCard.js";
import { setupSearchForm } from "./components/search.js";

async function setupPage() {
    if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
        return; // Hoppa över om vi INTE är på index.html
    }
    console.log('index.html');

    await fetchTopMovies(); // Vänta på att filmerna hämtas

    if (oData.topMovieList.length > 0) {
        movieCards(oData.topMovieList); // Skickar in filmlistan till movieCards()
        const randomMovies = oData.topMovieList.sort(() => 0.5 - Math.random()).slice(0, 5);
        randomMovies.forEach((movie, i) => renderTrailers(movie, i + 1));
    } else {
        console.error("No movielist was found.");
    }
    setupSearchForm();
}

// Kör setupPage enbart på index.html
if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    setupPage();

} else if (window.location.pathname === '/favorites.html') {
    console.log('favorites.html');

} else if (window.location.pathname === '/singleMovie.html') {
    console.log('singleMovie.html');
    let id = localStorage.getItem('singleMovie');
    console.log(id);
    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    let movie = movies.find(movie => movie.imdbID === (id));
    console.log(`Detta är ${movie.Title}s sida`);  

} else if (window.location.pathname === '/search.html') {
    console.log('search.html');

}

async function searchPageSetup() {
    if (window.location.pathname !== '/search.html') {
        return; // Hoppa över om vi INTE är på search.html
    }
    console.log(window.location);
    let params = new URLSearchParams(window.location.search);
    console.log(params);
    let value = params.get('movie');
    console.log(value);

    if (!value) {
        console.error("No search query found.");
        return;
    }

    let movies = await fetchSearchedMovies(value);
    console.log("Movies received:", movies); // Debugga vad som kommer tillbaka

    movieCards(movies); 

    if (!Array.isArray(movies)) {
        console.error("Fetched movies is not an array:", movies);
        return;
    }
}

searchPageSetup();


// async function searchPageSetup() {
//     console.log(window.location);
//     let params = new URLSearchParams(window.location.search);
//     console.log(params);
//     let value = params.get('movie');
//     console.log(value);

//     if (!value) {
//         console.error("No search query found.");
//         return;
//     }

//     try{
//         const response = await fetchSearchedMovies; // API call
//         if (!response.ok){
//             throw new Error("Error fetching movies: " + response.status);
//         }
//         const data = await response.json();

//         const movieList = data.results || data; // Assuming the data has a results array or the data it self is the array.  Adjust to your API's response structure.
      
//         //only if the response is correct start generating the cards
//         movieCards(movieList); // Now movieList should be an array
//     }
//     catch(error){
//         console.error(error)
//     }
// }

// searchPageSetup();

// async function searchPageSetup(searchQuery) {
//     try {
//       const response = await fetch(`http://www.omdbapi.com/?apikey=3e42d96e&s=${searchQuery}`); // Replace with your actual API endpoint
  
//       if (!response.ok) {
//         // Handle HTTP errors (e.g., 404, 500)
//         const message = `HTTP error! status: ${response.status}`;
//         throw new Error(message); 
//       }
      
//       //Parse the data in json
//       const data = await response.json();
  
//       //check if data is what you expect
//       if (!data) {
//         throw new Error("Error: Received empty data from server");
//       }
  
//       //...do something with the data...
//       console.log("Movies fetched successfully:", data);
  
//       //check data
//       if(!Array.isArray(data)){
//         throw new Error("Error: Received data is not an array")
//       }
  
//     } catch (error) {
//       console.error("Error fetching movies:", error.message); // error.message is a safe way to get the error details
//       console.error(error) //print all the error details
      
//       // Optionally, you might want to do something more here, such as:
//       // - Display an error message to the user.
//       // - Retry the fetch after a delay.
//       // - Log the error to a server.
//     }
//   }

//   searchPageSetup();