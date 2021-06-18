function limparSelect(campo) {
    while( campo.length > 1 ) {
        campo.remove(1);
    }
}

function preencherSelectClasses(data) {

    let classes = document.getElementById("classes");
    limparSelect(classes);

    for( let index in data ) {
        const { id, descricao} = data[index];

        let option = document.createElement("option");
        option.value = id;
        option.innerHTML = descricao;

        classes.appendChild(option);

    }

}

function preencherSelectSubclasses(data) {

    let subclasses = document.getElementById("subclasses");
    limparSelect(subclasses);

    for( let index in data ) {
        const { id, descricao, atividades} = data[index];

        let option = document.createElement("option");
        option.value = id;
        option.atividades = atividades;
        option.innerHTML = descricao;

        subclasses.appendChild(option);

    }

}

function carregarClasses() {

    fetch("https://servicodados.ibge.gov.br/api/v2/cnae/grupos")
        .then(response => response.json())
        .then(data => preencherSelectClasses(data))
        .catch(error => console.error(error))

}

function carregarSubclasses() {

    const classes = document.getElementById("classes");
    const classe_index = classes.selectedIndex;
    const classe_id = classes.options[ classe_index ].value;

    const subclasses = document.getElementById("subclasses");
    limparSelect(subclasses);

    if( classe_id == "") {
        return;
    }

    const url_subclasses = `https://servicodados.ibge.gov.br/api/v2/cnae/grupos/${classe_id}/subclasses`;

    fetch(url_subclasses)
        .then(response => response.json())
        .then(data => preencherSelectSubclasses(data))
        .catch(error => console.error(error))

}

function carregarAtividades() {

    const subclasses = document.getElementById("subclasses");
    
    const subclasse_index = subclasses.selectedIndex;
    const subclasse_atividades = subclasses.options[ subclasse_index ].atividades;

    document.getElementById("atividades").innerHTML = subclasse_atividades;

}