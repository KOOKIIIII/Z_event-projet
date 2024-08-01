<?php
session_start();
require 'connexion_db.php'; // Inclusion du fichier de connexion à la base de données

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['login']) && $_POST['login'] === 'streamer_login') {
    // Partie Connexion Streamer
    $pseudo = htmlspecialchars($_POST['pseudo']);
    $password = $_POST['password'];

    // Requête pour vérifier l'utilisateur dans la table streamers
    $query = "SELECT * FROM streamers WHERE pseudo = ?";
    $stmt = $conn->prepare($query);
    if ($stmt === false) {
        die("Erreur lors de la préparation de la requête : " . $conn->error);
    }
    $stmt->bind_param("s", $pseudo);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 0) {
        // 1er Cas : Aucun utilisateur trouvé
        header("Location: ../html/logstreamer.html?message=no_user");
        exit();
    } else {
        $user = $result->fetch_assoc();
        if ($user && $password === $user['password']) { // Comparaison en clair
            // 2ème Cas : Connexion réussie
            $_SESSION['streamer'] = $user['pseudo'];
            header("Location: ../html/espacestreamer.html?message=success");
            exit();
        } else {
            // 3ème Cas : Mot de passe incorrect
            header("Location: ../html/logstreamer.html?message=error");
            exit();
        }
    }
    $stmt->close();
} else {
    echo "Aucune donnée envoyée via POST";
}

$conn->close();
?>
