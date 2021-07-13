<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inserir produto</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

</head>
<body>

<h1 class="text-center">Inserir Produto</h1>

    <div class="conteiner text-center">

        <form action="produtosControllerInsert.php" method="post">

            <div class="form-group mx-auto">
                <div class="row p-2">

                    <div class="col-2">
                        <label for="nome">Nome / Descrição:</label>
                    </div>
                    <div class="col-8">
                        <input class="form-control" type="text" name="nome" id="nome"></input>
                    </div>

                </div>
            </div>

            <div class="form-group mx-auto">
                <div class="row p-2">

                    <div class="col-2">
                        <label for="UM">Unidade de medida:</label>
                    </div>
                    <div class="col-1">
                        <input type="text" class="form-control" name="um" id="um"></input>
                    </div>

                </div>
            </div>

            <div class="form-group mx-auto">
                <div class="row p-2">

                    <div class="col-2">
                        <input type="submit" value="Inserir" class="btn btn-primary">
                    </div>

                </div>
            </div>
            
        </form>

    </div>
    
</body>
</html>