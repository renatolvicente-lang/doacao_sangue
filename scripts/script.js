document.getElementById("form_doacao").addEventListener("submit", function(e){
    e.preventDefault();


    let objetos = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        idade: document.getElementById("idade").value,
        peso: document.getElementById("peso").value,
        cidade: document.getElementById("cidade").value,
        estado: document.getElementById("estado").value,
        tipo_s: document.getElementById("tipo_s").value,
        data: idade.split("/"),
        v_idade: data[2] - hoje,
        verif_nome: nome.split(" "),
    };


    


    //let data = idade.split("/"); separa a data a partir do "/" e armazena no array data
    //let v_idade = data[2] - hoje;

    if(objetos.v_idade < 16 ) return alert("idade invalida!");
    
    //let verif_nome = nome.split(" "); separa o nome a partir do " " e armazena no array verif_nome

    if(objetos.verif_nome.length < 2) return alert("Nome invalido!");
    

    if(!objetos.email.includes("@")) return alert("Informe um email valido!");
    
    if(objetos.v_idade < 16) return alert("idade invalida para doação!");
    
    if(objetos.peso < 50) return alert("peso invalido para doação!");
    
    if(objetos.cidade.length == 0) return alert("Informe a cidade!!");
    
    if(objetos.estado.length == 0) return alert("Informe o estado!!"); 
    
    if(isNaN(objetos.telefone))return alert("Informe um telefone valido!!");

    
    if(objetos.tipo_s == "" || objetos.tipo_s == "0") return alert("Selecione seu tipo sanguineo");
    
    let button = document.getElementById("button").addEventListener("click", function(c_color){// executa uma função que muda a cor do botão ao clicar nele
        button.style.backgroundColor = 'white';
    });
});