<?php
require 'connexion_db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = 1;
    $name = htmlspecialchars($_POST['name']);
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

    $stmt = $conn->prepare("INSERT INTO admin_users (id, name, password) VALUES (?, ?, ?)");
    if ($stmt === false) {
        die("Erreur lors de la préparation de la requête : " . $conn->error);
    }
    $stmt->bind_param("iss", $id, $name, $password);

    if ($stmt->execute()) {
        echo "Nouvel administrateur créé avec succès !";
        header("Location: ../html/logadmin.html");
        exit();
    } else {
        echo "Erreur : " . $stmt->error;
    }
    $stmt->close();
} else {
    header("Location: ../html/createadmin.html");
    exit();
}

$conn->close();
?>
