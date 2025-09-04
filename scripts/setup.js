import { homePageSetup } from "./pages/home.js";
import { searchPageSetup } from "./pages/search.js";
import { singleMoviePageSetup } from "./pages/singlemovie.js";
import { favoritesPageSetup } from "./pages/favorites.js";


document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
      homePageSetup();

  } else if (window.location.pathname === '/search.html') {
      searchPageSetup();

  } else if (window.location.pathname === '/singlemovie.html') {
      singleMoviePageSetup();

  } else if (window.location.pathname === '/favorites.html') {
      favoritesPageSetup();
  }
});