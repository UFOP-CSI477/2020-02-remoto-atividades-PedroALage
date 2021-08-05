@extends('principal')

@section('conteudo')

    <table class="table table-bordered">
        <thead class="thead-dark">
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>UM</th>
            </tr>
        </thead>
        <tbody>

            @foreach($produtos as $e)
                <tr>
                    <td>{{ $e->id }}</td>
                    <td>{{ $e->nome }} </td>
                    <td>{{ $e->um }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>

@endsection