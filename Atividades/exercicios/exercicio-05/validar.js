function validarLetras(campo, alerta, label) {

    let n = campo.value;

    if ( n.length == 0 || !isNaN (n) ) {
        // Erro
        // Exibir alerta:
        document.getElementById(alerta).style.display = "block";

        // Reporte o campo como inválido
        campo.classList.add("is-invalid");

        // Reportar o label como inválido/atenção:
        document.getElementById(label).classList.add("text-danger");

        // Finalizar
        campo.value = "";
        campo.focus();
        return false;
    }

    // Tudo correto
    document.getElementById(alerta).style.display = "none";
    campo.classList.remove("is-invalid");
    campo.classList.add("is-valid");

    document.getElementById(label).classList.remove("text-danger");

    document.getElementById(label).classList.add("text-success");

    return true;

}

function validarNumeros(campo, alerta, label) {

    let n = campo.value;

    if ( n.length == 0 || isNaN (n) ) {
        // Erro
        // Exibir alerta:
        document.getElementById(alerta).style.display = "block";

        // Reporte o campo como inválido
        campo.classList.add("is-invalid");

        // Reportar o label como inválido/atenção:
        document.getElementById(label).classList.add("text-danger");

        // Finalizar
        campo.value = "";
        campo.focus();
        return false;
    }

    // Tudo correto
    document.getElementById(alerta).style.display = "none";
    campo.classList.remove("is-invalid");
    campo.classList.add("is-valid");

    document.getElementById(label).classList.remove("text-danger");

    document.getElementById(label).classList.add("text-success");

    return true;

}

function validarVazio(campo, alerta, label) {

    let n = campo.value;

    if ( n.length == 0) {
        // Erro
        // Exibir alerta:
        document.getElementById(alerta).style.display = "block";

        // Reporte o campo como inválido
        campo.classList.add("is-invalid");

        // Reportar o label como inválido/atenção:
        document.getElementById(label).classList.add("text-danger");

        // Finalizar
        campo.value = "";
        campo.focus();
        return false;
    }

    // Tudo correto
    document.getElementById(alerta).style.display = "none";
    campo.classList.remove("is-invalid");
    campo.classList.add("is-valid");

    document.getElementById(label).classList.remove("text-danger");

    document.getElementById(label).classList.add("text-success");

    return true;

}


function validarInte() {
    let n1 = document.dados.nome;
    let n2 = document.dados.email;
    let n3 = document.dados.endereco;
    let n4 = document.dados.cpf;
    let n5 = document.dados.telefone;
    let n6 = document.dados.usuario;
    let n7 = document.dados.senha;

    if ( validarLetras(n1, "alerta1", "label1") && validarVazio(n2, "alerta2", "label2") 
    && validarVazio(n3, "alerta3", "label3") && validarNumeros(n4, "alerta4", "label4") 
    && validarNumeros(n5, "alerta5", "label5") && validarVazio(n6, "alerta6", "label6") 
    && validarVazio(n7, "alerta7", "label7") ) {

        return true;
    }
    event.preventDefault();
    
    return false;
}