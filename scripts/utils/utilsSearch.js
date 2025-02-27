import { fetchSearchedMovies } from "../modules/api.js";

export function setupSearchForm() {
    const formRef = document.querySelector('#searchForm');
    const inputRef = document.querySelector('#searchInput');

    formRef.addEventListener('submit', (event) => {
        event.preventDefault();
        window.location.href = `search.html?movie=${inputRef.value}`;
    })
    autocompleteList(inputRef);
}

function autocompleteList(inputRef) {
    const datalistRef = document.querySelector('#searchSuggestions');

    inputRef.addEventListener('input', async () => {
        const query = inputRef.value.trim().toLowerCase();

        if (query.length < 3) {
            datalistRef.innerHTML = '';
            return;
        }
        try {
            const movies = await fetchSearchedMovies(query);
            datalistRef.innerHTML = '';
            movies.forEach(movie => {
                const option = document.createElement('option');
                option.value = movie.Title;
                datalistRef.appendChild(option);
            });
        } catch (error) {
            console.log('Error fetching autocomplete data:', error);
        }
    });
}