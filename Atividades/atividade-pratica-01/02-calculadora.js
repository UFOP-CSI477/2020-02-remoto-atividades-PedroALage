function iniciar(){
    document.dados.tela.value = "";
}

function validarNum(elem) {

    if ( isNaN (parseInt(elem)) ) {
        window.alert("A equação esta incorreta!");
        return false;
    }

    return true;
}

function zerar(elem) {
    document.dados.tela.value = "";
}

function numero(elem) {
    //insere numeros na string
    var s1 = document.dados.tela.value;
    var s2 = s1 + elem;
    document.dados.tela.value = s2;
}

function operador(elem) {
    //insere operadores na string
    var s1 = document.dados.tela.value;
    var s2 = s1 + " " + elem + " ";
    document.dados.tela.value = s2;
}

function calcular() {

    var s1 = document.dados.tela.value;
    var s2 = s1.split(" ");
    var resultado = parseFloat(s2[0]);

    //caso ensira apenas 1 elemento
    if (s2.length < 3){
        window.alert("A equação esta incorreta!");
        document.dados.tela.value = "";
        document.dados.tela2.value = "ERRO";
        return false;
    }

    //valida os numeros da equação
    for (var i=0; i < s2.length; i+=2){

        if( !validarNum(s2[i]) ){
            document.dados.tela.value = "";
            document.dados.tela2.value = "ERRO";
            return false;
        }
    }

    //realiza a operação
    for (var i=1; i < s2.length; i+=2){

        if (s2[i] == '+'){

            resultado = resultado + parseFloat(s2[i+1]);

        }else if (s2[i] == '-'){

            resultado = resultado - parseFloat(s2[i+1]);
            
        }else if (s2[i] == 'x'){

            resultado = resultado * parseFloat(s2[i+1]);
            
        }else {

            resultado = resultado / parseFloat(s2[i+1]);

        }
    }

    document.dados.tela.value = "";
    document.dados.tela2.value = resultado;

}

