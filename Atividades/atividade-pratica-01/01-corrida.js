function validar(campo) {

    let n = campo.value;

    if ( n.length == 0 || isNaN (parseInt(n)) ) {
        window.alert("O campo possui valor incorreto!");
        campo.value = "";
        campo.focus();
        return false;
    }

    return true;

}

function calcular() {

    let t1 = document.dados.tempo1;
    let t2 = document.dados.tempo2;
    let t3 = document.dados.tempo3;
    let t4 = document.dados.tempo4;
    let t5 = document.dados.tempo5;
    let t6 = document.dados.tempo6;
    
    if (validar(t1) && validar(t2) && validar(t3) && validar(t4) && validar(t5) && validar(t6)) {

        let n1 = document.dados.nome1;
        let n2 = document.dados.nome2;
        let n3 = document.dados.nome3;
        let n4 = document.dados.nome4;
        let n5= document.dados.nome5;
        let n6 = document.dados.nome6;

        var info = [[t1.value, n1.value, "1", "Vencedor(a) !", "1"], 
        [t2.value, n2.value, "2", "-", "2"], 
        [t3.value, n3.value, "3", "-", "3"], 
        [t4.value, n4.value, "4", "-", "4"], 
        [t5.value, n5.value, "5", "-", "5"], 
        [t6.value, n6.value, "6", "-", "6"]]

        for (var i = 0; i < 6; i++){
    
            for (var j = i+1; j < 6; j++){
    
                if (info[i][0] > info[j][0]) {
                    var aux0 = info[i][0];
                    var aux1 = info[i][1];
                    var aux2 = info[i][2];
    
                    info[i][0] = info[j][0];
                    info[i][1] = info[j][1];
                    info[i][2] = info[j][2];
    
                    info[j][0] = aux0;
                    info[j][1] = aux1;
                    info[j][2] = aux2;
                }
            }
        }
    }

    for (var i = 0; i < 6; i++){   
        for (var j = i+1; j < 6; j++){

            if (info[i][0] == info[j][0]) {

                info[j][3] = info[i][3];
                info[j][4] = info[i][4];
            }
        }
    }

    document.dados.tempo11.value = info[0][0];
    document.dados.nome11.value = info[0][1];
    document.dados.largada11.value = info[0][2];
    document.dados.resultado11.value = info[0][3];
    document.dados.posicao11.value = info[0][4];

    document.dados.tempo22.value = info[1][0];
    document.dados.nome22.value = info[1][1];
    document.dados.largada22.value = info[1][2];
    document.dados.resultado22.value = info[1][3];
    document.dados.posicao22.value = info[1][4];

    document.dados.tempo33.value = info[2][0];
    document.dados.nome33.value = info[2][1];
    document.dados.largada33.value = info[2][2];
    document.dados.resultado33.value = info[2][3];
    document.dados.posicao33.value = info[2][4];

    document.dados.tempo44.value = info[3][0];
    document.dados.nome44.value = info[3][1];
    document.dados.largada44.value = info[3][2];
    document.dados.resultado44.value = info[3][3];
    document.dados.posicao44.value = info[3][4];
    
    document.dados.tempo55.value = info[4][0];
    document.dados.nome55.value = info[4][1];
    document.dados.largada55.value = info[4][2];
    document.dados.resultado55.value = info[4][3];
    document.dados.posicao55.value = info[4][4];

    document.dados.tempo66.value = info[5][0];
    document.dados.nome66.value = info[5][1];
    document.dados.largada66.value = info[5][2];
    document.dados.resultado66.value = info[5][3];
    document.dados.posicao66.value = info[5][4];
}