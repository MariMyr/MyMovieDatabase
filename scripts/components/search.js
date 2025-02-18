export function setupSearchForm() {
    const formRef = document.querySelector('#searchForm');
    const inputRef = document.querySelector('#searchInput');

    inputRef.addEventListener('submit', (event) => {
        console.log(event.target.value.toLowerCase());
    });

    formRef.addEventListener('submit', (event) => {
        event.preventDefault();
        window.location.href = `search.html?movie=${inputRef.value}`;
    })
}
