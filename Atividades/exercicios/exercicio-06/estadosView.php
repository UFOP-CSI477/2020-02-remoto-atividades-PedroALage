<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de estados</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
</head>
<body>

    <h1 class="text-center">Tabela dos Estados</h1>

    <?php

        echo  '<div class="container">';

        echo '<table class="table table-bordered text-center table-primary table-striped table-hover">';

            echo '<thead class="table-dark">';

                echo '<tr>';
                    echo '<th>ID</th>';
                    echo '<th>Nome</th>';
                    echo '<th>Sigla</th>';
                echo '</tr>';

            echo '</thead>';

            echo '<tbody>';

                while($e = $estados->fetch()) {

                    echo '<tr>';
                        echo '<td>' .$e["id"] .'</td>';
                        echo '<td>' .$e["nome"] .'</td>';
                        echo '<td>' .$e["sigla"] .'</td>';
                    echo '</tr>';
                }

            echo '</tbody>';

        echo '</table>';

        echo '</div>';
    ?>

</body>
</html>