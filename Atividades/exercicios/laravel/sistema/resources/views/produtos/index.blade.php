@extends('principal')

@section('conteudo')

<a href="{{ route('produtos.create') }}">Cadastrar</a>

    <table class="table table-bordered">
        <thead class="thead-dark">
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>UM</th>
                <th>Info</th>
            </tr>
        </thead>
        <tbody>

            @foreach($produtos as $e)
                <tr>
                    <td>{{ $e->id }}</td>
                    <td>{{ $e->nome }} </td>
                    <td>{{ $e->um }}</td>
                    <td><a href="{{route('produtos.show', $e->id)}}">Info</a></td>
                </tr>
            @endforeach
        </tbody>
    </table>

@endsection