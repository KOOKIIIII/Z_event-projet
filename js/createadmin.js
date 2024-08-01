document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const message = urlParams.get("message");

  if (message) {
    let alertMessage = "";

    switch (message) {
      case "creation_failed":
        alertMessage = "Échec de la création de l'administrateur.";
        break;
      case "no_user":
        alertMessage =
          "Aucun utilisateur trouvé. Veuillez créer un administrateur.";
        break;
    }

    alert(alertMessage);
  }
});
