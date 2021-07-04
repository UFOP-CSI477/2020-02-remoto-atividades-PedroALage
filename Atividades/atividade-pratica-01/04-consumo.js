//cria classe veiculo
function Veiculo() {
    var combustivel;
    var quilometros;

    this.getCombustivel = function () {
        return combustivel;
    };

    this.setCombustivel = function (value) {
        combustivel = value;
    };

    this.getQuilometros = function () {
        return quilometros;
    };

    this.setQuilometros = function (value) {
        quilometros = value;
    };
}

//inicia a string do texto
function iniciar(){
    document.dados.texto.value = "";
    list = [];
}

//calcula os valores finais
function calcularMedia() {

    var toltalCom = 0;
    var totalQui = 0;
    var mediaCom = 0;
    var mediaQui = 0;
    var mediaDes = 0;
    var separa = '\n***********************************************************\n';
    var s1 = document.dados.texto.value;

    for (var i=0; i < list.length; i++){

        toltalCom += parseFloat(list[i].getCombustivel());
        totalQui += parseFloat(list[i].getQuilometros());
    }

    mediaCom = toltalCom / list.length;
    mediaQui = totalQui / list.length;

    mediaDes = mediaQui / mediaCom;



    document.dados.texto.value = s1 + separa + 'Quantidade total de combustível utilizada: ' + toltalCom.toFixed(2) + '\nQuantidade total de quilômetros rodados: ' + totalQui.toFixed(2) + '\nMedia de consumo de combustível: ' + mediaCom.toFixed(2) + '\nMedia de quilômetros rodados: ' + mediaQui.toFixed(2) + '\nMedia de desempenho em quilômetros por litro (km/l): ' + mediaDes.toFixed(2) + separa;
}

//calcula o desempenho individual
function carregarDados() {
    
    var s1 = document.dados.texto.value;
    var d1 = document.dados.combustivel.value;
    var d2 = document.dados.quilometros.value;
    var d3 = d2 / d1;

    var veiculo = new Veiculo();
    veiculo.setCombustivel(d1);
    veiculo.setQuilometros(d2);

    list.push(veiculo)

    document.dados.combustivel.value = '';
    document.dados.quilometros.value = '';

    document.dados.texto.value = s1 + '\nQuantidade de combustível: ' + d1 + '\nQuantidade de quilômetros rodados: ' + d2 + '\nDesempenho em quilômetros por litro (km/l): ' + d3.toFixed(2) + '\n';

}