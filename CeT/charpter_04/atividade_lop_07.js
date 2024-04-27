//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 05/04/2024. ECT - UFRN

let num1 = parseInt(prompt("Insira um número:"));
let num2 = parseInt(prompt("Insira um número:"));
let num3 = parseInt(prompt("Insira um número:"));

if (num1 < num2 && num1 < num3){
 alert(num1);
} if (num2 < num1 && num2 < num3){
 alert(num2);
} if (num3 < num1 && num3 < num2){
 alert(num3);
}
