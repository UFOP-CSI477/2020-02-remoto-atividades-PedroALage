<?php

    require 'connection.php';

    $nome = $_POST['nome'];
    $um = $_POST['um'];

    if(empty($nome) || empty($um) || strlen($um) > 3 || strlen($nome) > 100) {
        echo '<div><a href="produtosViewInsert.php">Voltar</a></div>';
        die("<script>alert('Erro ao inserir o produto');</script>");
    }
    
    try {

        $connection->beginTransaction();

        $stmt = $connection->prepare("INSERT INTO produtos (nome, um) VALUES (:nome, :um)");

        $stmt->bindParam(':nome', $nome);
        $stmt->bindParam(':um', $um);

        $stmt->execute();

        $connection->commit();

        header('Location: index.php');
        exit();
    } catch(Exception $e) {
        $connection->rollBack();
        die("Erro ao inserir produto: " . $e->getMessage());
    }