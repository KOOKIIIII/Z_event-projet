document.addEventListener("DOMContentLoaded", function () {
  // Fonction pour vérifier la connexion de l'utilisateur
  function checkStreamerSession() {
    fetch("../php/check_streamer.php")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "error") {
          // Rediriger vers la page de connexion si non connecté
          window.location.href = "logstreamer.html";
        } else {
          // Afficher le nom de l'administrateur
          document.getElementById("streamer-name").textContent = data.streamer;
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la vérification de la session:", error);
      });
  }

  checkStreamerSession();
});
