// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const date = document.getElementById('date');
    const thematique = document.getElementById('thematique');
    const streamer = document.getElementById('streamer');

    const items = document.querySelectorAll('.content .item');

    function filterItems() {
        const value1 = date.value;
        const value2 = thematique.value;
        const value3 = streamer.value;

        items.forEach(item => {
            const hasdate = value1 === 'all' || item.classList.contains(value1);
            const hasthematique = value2 === 'all' || item.classList.contains(value2);
            const hasstreamer = value3 === 'all' || item.classList.contains(value3);

            if (hasdate && hasthematique && hasstreamer) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    }

    date.addEventListener('change', filterItems);
    thematique.addEventListener('change', filterItems);
    streamer.addEventListener('change', filterItems);

    // Initial call to display all items
    filterItems();
});
