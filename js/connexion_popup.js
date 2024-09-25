displayPopup();

export function displayPopup() {
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
