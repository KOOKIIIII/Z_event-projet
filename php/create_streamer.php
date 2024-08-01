<?php
session_start();
require 'connexion_db.php'; // Inclusion du fichier de connexion à la base de données

// Fonction pour générer un mot de passe aléatoire
function generatePassword($length = 12) {
    // Définir les caractères possibles
    $characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
    
    // Initialiser le mot de passe
    $pwd = '';
    
    // Obtenir la longueur des caractères possibles
    $charactersLength = strlen($characters);
    
    // Générer le mot de passe
    for ($i = 0; $i < $length; $i++) {
        $pwd .= $characters[rand(0, $charactersLength - 1)];
    }
    
    return $pwd;
}

// Fonction pour envoyer un email (assurez-vous que cette fonction est correctement définie dans votre projet)
function sendEmail($to, $subject, $message) {
    $headers = "From: no-reply@yourdomain.com\r\n";
    $headers .= "Reply-To: no-reply@yourdomain.com\r\n";
    $headers .= "Content-type: text/html\r\n";

    return mail($to, $subject, $message, $headers);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Partie Enregistrement Streamer
    $name = htmlspecialchars($_POST['name']);
    $firstname = htmlspecialchars($_POST['firstname']);
    $pseudo = htmlspecialchars($_POST['pseudo']);
    $age = (int)htmlspecialchars($_POST['age']); // Convertir en integer
    $email = htmlspecialchars($_POST['email']);
    $password = generatePassword(); // Générer un mot de passe aléatoire

    $stmt = $conn->prepare("INSERT INTO streamers (name, firstname, pseudo, age, email, password) VALUES (?, ?, ?, ?, ?, ?)");
    if ($stmt === false) {
        die("Erreur lors de la préparation de la requête : " . $conn->error);
    }
    $stmt->bind_param("sssiss", $name, $firstname, $pseudo, $age, $email, $password);

    if ($stmt->execute()) {
        // Enregistrement réussi
        $subject = "Votre nouveau mot de passe";
        $message = "Bonjour $firstname,<br><br>Votre compte a été créé avec succès. Voici votre mot de passe : <strong>$password</strong><br><br>Veuillez le changer après votre première connexion.<br><br>Cordialement,<br>L'équipe.";
        if (sendEmail($email, $subject, $message)) {
            header("Location: ../html/espaceadmin.html?message=email_sent");
        } else {
            header("Location: ../html/espaceadmin.html?message=email_error");
        }
        exit();
    } else {
        echo "Erreur : " . $stmt->error;
    }
    $stmt->close();
} else {
    echo "Aucune donnée envoyée via POST";
}

$conn->close();
?>
