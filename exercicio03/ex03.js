let nome = prompt("Qual o seu nome?");
let idade = parseInt(prompt("Quantos anos você tem?"));


if (idade < 18) {
    alert("Olá " + nome + ", você ainda não pode fazer aulas de direção.");
} else {
    alert("Olá " + nome + ", seja bem-vindo(a) à nossa escola! Já fez sua matrícula?");
}