document.addEventListener("DOMContentLoaded", function () {
  // Fonction pour vérifier la connexion de l'utilisateur
  function checkAdminSession() {
    fetch("../php/check_admin.php")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "error") {
          // Rediriger vers la page de connexion si non connecté
          window.location.href = "logadmin.html";
        } else {
          // Afficher le nom de l'administrateur
          document.getElementById("admin-name").textContent = data.admin;
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la vérification de la session:", error);
      });
  }
  checkAdminSession();
});
