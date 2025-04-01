let cotacaoDolar = prompt("Digite a cotação do dólar:");
let valorDolares = prompt("Digite o valor em dólares:");
let valorReais = cotacaoDolar * valorDolares;
alert("O valor de " + valorDolares + " dólares equivale a R$ " + valorReais.toFixed(2));