import { homePageSetup } from "./pages/home.js";
import { searchPageSetup } from "./pages/search.js";
import { singleMoviePageSetup } from "./pages/singlemovie.js";
import { favoritesPageSetup } from "./pages/favorites.js";


// document.addEventListener("DOMContentLoaded", () => {
//   if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
//       homePageSetup();

//   } else if (window.location.pathname === '/search.html') {
//       searchPageSetup();

//   } else if (window.location.pathname === '/singlemovie.html') {
//       singleMoviePageSetup();

//   } else if (window.location.pathname === '/favorites.html') {
//       favoritesPageSetup();
//       console.log("favoritesPageSetup körs!");

//   }
// });

document.addEventListener("DOMContentLoaded", () => {
    console.log("setup.js laddas!");

    const path = window.location.pathname.toLowerCase();

    if (path.includes("index.html") || path === "/" || path === "") {
        homePageSetup();
    } else if (path.includes("search.html")) {
        searchPageSetup();
    } else if (path.includes("singlemovie.html")) {
        singleMoviePageSetup();
    } else if (path.includes("favorites.html")) {
        favoritesPageSetup();
        console.log("favoritesPageSetup körs!");
        
    }
});