document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams);
  const message = urlParams.get("message");

  if (message) {
    let alertMessage = "";

    switch (message) {
      case "success":
        alertMessage = "Connexion réussie !";
        break;
      case "error":
        alertMessage = "Nom d'utilisateur ou mot de passe incorrect.";
        break;
      case "email_sent":
        alertMessage = "Un email avec votre mot de passe a été envoyé.";
        break;
      case "email_error":
        alertMessage = "Erreur lors de l'envoi de l'email.";
        break;
    }

    alert(alertMessage);
  }
});
