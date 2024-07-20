// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    // Fonction pour générer un matricule unique
    function generateMatricule() {
        return 'STR' + Math.floor(Math.random() * 100000).toString().padStart(5, '0');
    }

    // Générer automatiquement un matricule pour le streamer
    const matriculeInput = document.getElementById('matricule');
    matriculeInput.value = generateMatricule();

    // Exemple de soumission de formulaire (à compléter selon les besoins)
    const form = document.getElementById('liveForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Formulaire soumis !');
        // Ajoutez ici la logique pour gérer les données du formulaire
    });
});
