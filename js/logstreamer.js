document.getElementById("login").addEventListener("submit", function (event) {
  const pseudo = document.getElementById("pseudo").value;
  const password = document.getElementById("password").value;
  if (!pseudo || !password) {
    alert("Veuillez remplir tous les champs!");
    event.preventDefault();
  }
});
