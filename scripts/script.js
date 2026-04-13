document.getElementById("form_doacao").addEventListener("submit", function(e){
    e.preventDefault();


    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;
    let peso = document.getElementById("peso").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;
    

    let tipo_s = document.getElementById("tipo_s").value;


    let data = idade.split("/"); //separa a data a partir do "/" e armazena no array data
    let v_idade = data[2] - hoje;

    if(v_idade < 16 ) return alert("idade invalida!");
    
    let verif_nome = nome.split(" "); //separa o nome a partir do " " e armazena no array verif_nome

    if(verif_nome.length < 2) return alert("Nome invalido!");
    

    if(!email.includes("@")) return alert("Informe um email valido!");
    
    if(v_idade < 16) return alert("idade invalida para doação!");
    
    if(peso < 50) return alert("peso invalido para doação!");
    
    if(cidade.length == 0) return alert("Informe a cidade!!");
    
    if(estado.length == 0) return alert("Informe o estado!!"); 
    
    if(!telefone === 0 )return alert("Informe um telefone valido!!");
    let button = document.getElementById("button").addEventListener("click", function(c_color){
        button.style.backgroundColor = 'white';
    });

    if(tipo_s == "" || tipo_s == "0") return alert("Selecione seu tipo sanguineo");
});