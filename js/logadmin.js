// script.js
document.getElementById('login').addEventListener('submit', function(event) {
    const emil = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (!email || !password) {
        alert("Veuillez remplir tous les champs!");
        event.preventDefault();
    }
});
