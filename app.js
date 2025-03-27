/*alert("Olá, seja bem vindo!")
console.log("Posso escrever aqui também")
console.log(10+2)
console.log(10-2)
console.log(10*2)
console.log(10/2)
alert(10+2)
console.log(parseFloat("10")+2)
console.log("10"-2)
console.log("10"*2)
console.log("10"/2)
console.log("10"+2)
console.log("João" +" " + "Paulo")*/

console.log("Fran")
console.log(27)
console.warn("atenção")
console.error("um erro")
/*
3 formas de criar váriaveis
var
let - - > vamos usar essa
const
*/
let nome = "Fran"
let idade = 27
let telefone = null
console.log(nome, idade)
nome = "Franciele Araujo"
console.log(nome)

let nomeCompleto = ""
nomeCompleto = prompt("Informe seu nome completo")
console.log(nomeCompleto)
//alert("Seja bem vindo(a) " + nomeCompleto)
//document.write("Seja bem vindo(a) " + nomeCompleto)
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









