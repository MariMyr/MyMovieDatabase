// import { fetchTopMovies, oData } from "./modules/api.js";

// export async function movieCards() {
//     // Vänta på att API:et ska hämta filmen innan renderingen
//     await fetchTopMovies();

//     const container = document.querySelector('#cardContainer');
//     oData.topMovieList.forEach(movie => {
//         // skapa ett kort
//         const cardRef = document.createElement('article');
//         cardRef.className = 'movie-card'; // Lägg gärna till en klass för styling

//         // Lägg till titel
//         const titleRef = document.createElement('h3');
//         titleRef.textContent = movie.title;
//         cardRef.appendChild(titleRef);

//         // Lägg till Poster
//         const posterRef = document.createElement('img');
//         posterRef.src = movie.poster;
//         poster.alt = `${movie.title} poster`;
//         cardRef.appendChild(posterRef);

//         // Lägg till kortet i container
//         container.appendChild(cardRef);
//     });
// }
