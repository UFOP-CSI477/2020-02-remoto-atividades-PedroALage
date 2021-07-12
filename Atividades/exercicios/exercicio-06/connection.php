<?php

    //configuracao
    $dbfile = "./db/database.sqlite";

    $strConnection  = "sqlite:" . $dbfile;

    $connection = new PDO($strConnection);