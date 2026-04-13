document.getElementById("form_doacao").addEventListener("submit", function(e){
    e.preventDefault();


    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;
    let peso = document.getElementById("peso").value;


    if(!email.includes("@")) return alert("Informe um email valido!");
    if(idade < 16) return alert("idade invalida para doação!");
    if(peso < 50) return alert("peso invalido para doação!");
});