function fnSaudacao(){
    let nomeCompleto = ""
    nomeCompleto = prompt("Informe seu nome completo ")
    alert("Seja bem vindo(a) " + nomeCompleto + " ao meu site!")
    }

function fnTrocarCorDeFundo(){
let cor = prompt("informe uma cor: \n 1 azul \n2 vermelho \n3 preto \n4 vermelho \n5 rosa \n6 laranja")
let corDeFundo = null

if(cor == "1"){
    corDeFundo = "blue"
}else if(cor == "2"){
    corDeFundo = "red"
}else if(cor == "3"){
    corDeFundo = "black"
}else if(cor == "4"){
    corDeFundo = "tomato"
}else if(cor == "5"){
    corDeFundo = "pink"
}else if(cor == "6"){
    corDeFundo = "orange"
}else{
    corDeFundo = "yellow"
}

document.body.style.backgroundColor = corDeFundo
}

function fnMostrarHoraAtual(){
    let agora = new Date(); // Obtém a data e hora atual
    let horaFormatada = agora.toLocaleTimeString(); // Formata para exibição
    alert("Hora atual: " + horaFormatada); // Exibe a hora no alert
}

function fnTrocarTitulo(){
    document.getElementById("titulo").innerText = "XO INSETOS"
}
function fdIdiomaPortogues(){
    document.getElementyById("menu1").innerText = "HOME"
    document.getElementyById("menu2").innerText = "SERVICES"
    document.getElementyById("menu3").innerText = "CONTACT"
}


function fnDestaque1Original(){
    document.getElementById("destaque1").src="imagem/destaque01.jpg"
}

function fnRegistrarContato(){
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let mensagem = document.getElementById("mensagem").value
    let informacoesCompleta = nome + email + mensagem
    document.getElementById("informacoes").innerText = informacoesCompleta
 
}

function fnRegistrarContato(){
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let mensagem = document.getElementById("mensagen").value
    let informacoesCompleta = nome + " - " + email + "<br> " + mensagem
    document.getElementById("informacoes").innerHTML = informacoesCompleta
}

document.getElementById("nome").value = ""
document.getElementById("email").value = ""
document.getElementById("mensagem").value = ""