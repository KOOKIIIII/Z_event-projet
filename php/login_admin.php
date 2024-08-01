<?php
session_start();
require 'connexion_db.php'; // Inclusion du fichier de connexion à la base de données

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['login'])) {
        // Partie Connexion Admin
        $name = $_POST['name'];
        $password = $_POST['password'];
        
        $query = "SELECT * FROM admin_users WHERE name = ?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("s", $name);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows == 0) {
            // 1er Cas : Aucun utilisateur trouvé
            header("Location: ../html/createadmin.html?message=no_user");
            exit();
        } else {
            $user = $result->fetch_assoc();
            if ($user && password_verify($password, $user['password'])) {
                // 2ème Cas : Connexion réussie
                $_SESSION['admin'] = $user['name'];
                header("Location: ../html/espaceadmin.html?message=success");
                exit();
            } else {
                // 3ème Cas : Informations incorrectes
                header("Location: ../html/logadmin.html?message=error");
                exit();
            }
        }
    }
} else {
    echo "Aucune donnée envoyée via POST";
}

$conn->close();
?>
