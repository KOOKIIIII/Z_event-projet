let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    // Valider que l'index est dans les limites valides
    if (index < 0 || index >= totalSlides) {
        console.error("Index de slide invalide");
        return;
    }

    // Réinitialiser l'affichage de toutes les slides
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    // Afficher la slide actuelle
    slides[index].style.display = 'block';
}

// Afficher la première slide au chargement
showSlide(currentSlide);

// Fonction pour aller à la slide suivante
function nextSlide() {
    currentSlide++;
    if (currentSlide >= totalSlides) {
        currentSlide = 0; // Revenir à la première slide
    }
    showSlide(currentSlide);
}

// Fonction pour aller à la slide précédente
function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Aller à la dernière slide
    }
    showSlide(currentSlide);
}


