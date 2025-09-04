import { displayFavorites } from "../modules/localStorage.js";

export function favoritesPageSetup() {
    console.log("favoritesPageSetup körs!");
    
    if (typeof displayFavorites === "function") {
        console.log("displayFavorites finns, körs nu...");
        displayFavorites();
    } else {
        console.error("displayFavorites är undefined!");
    }
}
