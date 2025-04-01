let cotacaoDolar = parseFloat(prompt("Digite a cotação do dólar:"));
let valorDolares = parseFloat(prompt("Digite o valor em dólares:"));


let valorReais = cotacaoDolar * valorDolares;


alert("O valor de " + valorDolares + " dólares equivale a R$ " + valorReais.toFixed(2));