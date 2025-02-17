function filterServices() {
    const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const serviceCards = document.querySelectorAll('.sevice-card');
    let visibleCards = 0;

    serviceCards.forEach(card => {
        const imageAlt = card.querySelector('img').alt.toLowerCase();
        if (imageAlt.includes(searchInput)) {
            card.style.display = ''; // Show card
            visibleCards++;
        } else {
            card.style.display = 'none'; // Hide card
        }
    });

    // Show or hide the "No results found" message
    const noResultMessage = document.getElementById('noResultMessage');
    if (visibleCards === 0) {
        noResultMessage.style.display = 'block'; // Show message
    } else {
        noResultMessage.style.display = 'none'; // Hide message
    }
}