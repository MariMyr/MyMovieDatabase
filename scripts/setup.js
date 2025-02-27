import { homePageSetup } from "./pages/home.js";
import { searchPageSetup } from "./pages/search.js";
import { singleMoviePageSetup } from "./pages/singleMovie.js";
import { favoritesPageSetup } from "./pages/favorites.js";


if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    homePageSetup();

} else if (window.location.pathname === '/search.html') {
    searchPageSetup();

} else if (window.location.pathname === '/singleMovie.html') {
    singleMoviePageSetup();

} else if (window.location.pathname === '/favorites.html') {
    favoritesPageSetup();
}
