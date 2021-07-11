<?php

    $user = $_POST['usuario'];
    $password = $_POST['senha'];
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $endereco = $_POST['endereco'];
    $cpf = $_POST['cpf'];
    $telefone = $_POST['telefone'];
    $genero = $_POST['genero'];


    echo "<h1>Olá, $nome</h1>";

    echo "<p>Email: $email</p>";
    echo "<p>Endereço: $endereco</p>";
    echo "<p>CPF: $cpf</p>";
    echo "<p>Telefone: $telefone</p>";
    echo "<p>Genero: $genero</p>";
    echo "<p>Usuario: $user</p>";
    echo "<p>Senha: $password</p>";

    echo '<a href="index.html">Voltar</a>';