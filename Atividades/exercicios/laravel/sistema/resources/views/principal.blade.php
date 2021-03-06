<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="icon" href="https://raw.githubusercontent.com/twbs/icons/main/icons/basket3-fill.svg">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

    <!-- https://fonts.google.com/specimen/Secular+One?sidebar.open=true&selection.family=Secular+One //-->
    <link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet">

    <style type="text/css">
        .logo {
            font-family: 'Secular One', sans-serif;
        }
    </style>

    <title>Sistema de Vendas</title>
</head>
<body>

    <div class="container-fluid">
        <!-- https://getbootstrap.com/docs/4.5/components/navbar/ //-->
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand logo" href="{{route('principal')}}">
                <!-- https://icons.getbootstrap.com/icons/basket3-fill/ //-->
                <img src="https://raw.githubusercontent.com/twbs/icons/main/icons/basket3-fill.svg" alt="Logo">
            Produtos
            </a>

            <ul class="nav">
                <li class="nav-item"><a class="nav-link" href="{{route('principal')}}">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="{{route('produtos.index')}}">Produtos</a></li>
            </ul>
        </nav>

        @if(session('mensagem'))

            <div class="alert alert-success">
                {{ session('mensagem') }}
            </div>

        @endif

        @yield('conteudo')
    </div>

</body>
</html>