document.getElementById("login").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(this);

  const name = formData.get("name");
  const password = formData.get("password");
  if (!name || !password) {
    alert("Veuillez remplir tous les champs!");
    return;
  }

  this.submit();
});
