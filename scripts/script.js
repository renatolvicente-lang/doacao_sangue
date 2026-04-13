document.getElementById("form_doacao").addEventListener("submit", function(e){
    e.preventDefault();


    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;
    let peso = document.getElementById("peso").value;
    let cidade = document.getElementById("cidade").value;

    
    let data = idade.split("/");
    let v_idade = data[2] - hoje;

    if(v_idade < 16 ) return alert("idade invalida!");
    
    let verif_nome = nome.split(" ");

    if(verif_nome.length < 2) return alert("Nome invalido!");
    

    if(!email.includes("@")) return alert("Informe um email valido!");
    if(v_idade < 16) return alert("idade invalida para doação!");
    if(peso < 50) return alert("peso invalido para doação!");
    if(cidade.length == 0) alert("Informe a cidade!!");

});