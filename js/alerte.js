

function afficherPopup() {
    document.getElementById("loginalerte").style.display = "block";
    document.getElementById("overlay_bis").style.display = "block";
  
    document.getElementById("accept").addEventListener("click", function () {
      const userInput = document.getElementById('userInput').value;
        alert('Vous avez saisi : ' + userInput);
      masquerPopup();
    });
  
    document.getElementById("cancel").addEventListener("click", function () {
      masquerPopup();
    });
  }
  
  const alertes = document.querySelectorAll(".alerte");

  alertes.forEach (alerte => {
    alerte.addEventListener("click", function() {
        afficherPopup();
    });
  });


  document.querySelectorAll("alerte").addEventListener("click", function () {
    afficherPopup();
  });
  
  function masquerPopup() {
    document.getElementById("loginalerte").style.display = "none";
    document.getElementById("overlay_bis").style.display = "none";
  }


