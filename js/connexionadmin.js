document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM entièrement chargé et analysé");



  // Vérification de la session de l'administrateur
  fetch("../php/check_admin.php")
    .then((response) => response.json())
    .then((data) => {
      console.log("Réponse du serveur:", data);
      if (data.status === "success") {
        // Si l'administrateur est connecté, mettre à jour le contenu de la page
        const adminSection = document.querySelector(".admin-section h2");
        const adminLink = document.querySelector(".admin-section .login-link");
        const logoutLink = document.querySelector(
          ".admin-section .logout-link"
        );
        const adminSpaceLink = document.querySelector(
          ".admin-section .admin-space-link"
        );
        if (adminSection && adminLink && logoutLink && adminSpaceLink) {
          console.log("Modification de la section admin");
          adminSection.textContent = "Connecté !";
          adminLink.style.display = "none"; // Masquer le bouton de connexion admin
          logoutLink.style.display = "inline"; // Afficher le bouton de déconnexion
          adminSpaceLink.style.display = "inline"; // Afficher le bouton Espace Administrateur
        } else {
          console.error("Éléments de la section admin introuvables");
        }
      }
    })
    .catch((error) => console.error("Erreur:", error));
});

