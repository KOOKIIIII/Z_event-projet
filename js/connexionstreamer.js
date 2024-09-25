document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM entièrement chargé et analysé");

  //Appel de la fonction 
  displayPopup();

  // Vérification de la session du streamer
  fetch("../php/check_streamer.php")
    .then((response) => response.json())
    .then((data) => {
      console.log("Réponse du serveur:", data);
      if (data.status === "success") {
        // Si le streamer est connecté, mettre à jour le contenu de la page
        const streamerSection = document.querySelector(".streamer-section h2");
        const streamerLink = document.querySelector(
          ".streamer-section .login-link"
        );
        const logoutLink = document.querySelector(
          ".streamer-section .logout-link"
        );
        const streamerSpaceLink = document.querySelector(
          ".streamer-section .streamer-space-link"
        );
        if (
          streamerSection &&
          streamerLink &&
          logoutLink &&
          streamerSpaceLink
        ) {
          console.log("Modification de la section streamer");
          streamerSection.textContent = "Connecté !";
          streamerLink.style.display = "none"; // Masquer le bouton de connexion streamer
          logoutLink.style.display = "inline"; // Afficher le bouton de déconnexion
          streamerSpaceLink.style.display = "inline"; // Afficher le bouton Espace Streamer
        } else {
          console.error("Éléments de la section streamer introuvables");
        }
      }
    })
    .catch((error) => console.error("Erreur:", error));
});

function displayPopup() {
  console.log("Affichage du popup");
  document.getElementById("validation").style.display = "block";
  document.getElementById("overlay").style.display = "block";

  document.getElementById("continuebtn").addEventListener("click", function () {
    console.log("Bouton Continuer cliqué");
    closePopup();
  });

  document.getElementById("backbtn").addEventListener("click", function () {
    console.log("Bouton Retour cliqué");
    window.location.href = "index.html";
  });
}

function closePopup() {
  console.log("Fermeture du popup");
  document.getElementById("validation").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}
