<?php

    require_once 'connection.php';

    //Controller -> Model
    $produtos = $connection->query("SELECT * FROM produtos");

    //view
    require 'produtosView.php';