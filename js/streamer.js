function showSection(sectionId) {
    var sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    var activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';
}

// Show the accueil section by default
document.addEventListener('DOMContentLoaded', function() {
    showSection('accueil');
});
