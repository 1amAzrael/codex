const searchInput = document.getElementById('searchInput');
const divs = document.querySelectorAll('.tag');

searchInput.addEventListener('input', function() {
    const searchTerm = this.value.trim().toLowerCase();
    divs.forEach(div => {
        const text = div.textContent.toLowerCase();
        const isVisible = text.includes(searchTerm);
        div.classList.toggle('visible', isVisible);
        div.classList.toggle('hidden', !isVisible);
    });
});