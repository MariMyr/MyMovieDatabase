export function setupSearchForm() {
    const formRef = document.querySelector('#searchForm');
    const inputRef = document.querySelector('#searchInput');

    formRef.addEventListener('submit', (event) => {
        event.preventDefault();
        window.location.href = `search.html?movie=${inputRef.value}`;
    })
}
