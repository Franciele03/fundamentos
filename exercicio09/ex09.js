let salario = parseFloat(prompt("Digite o seu salário:"));
let reajuste = parseFloat(prompt("Digite a porcentagem de reajuste:"));


let aumento = (salario * reajuste) / 100;


let salarioReajustado = salario + aumento;


alert("Salário original: R$ " + salario.toFixed(2) + "\nReajuste: " + reajuste + "%\nSalário reajustado: R$ " + salarioReajustado.toFixed(2));