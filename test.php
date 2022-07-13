<?php
// N'OUBLIEZ PAS DE VOUS CONNECTER A LA BASE DE DONNEES

// On prépare la requête
$sql = "SELECT * FROM villes";
$stmt = $dbh->prepare($sql);
$stmt->execute();
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

// On transforme le tableau PHP en json
$retour = json_encode($results);

// On retourne le tableau à la fonction appelante
echo $retour; 