<?php

require __DIR__ . '/db.php';

$data = json_decode(file_get_contents('php://input'), true);

$sql = "INSERT INTO todos (title) VALUES (?)";
$stmt = $pdo->prepare($sql);
$stmt->execute([$data['title']]);

