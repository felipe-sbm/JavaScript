//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 05/04/2024. ECT - UFRN

let num = parseInt(prompt("Insira um valor:"));

if (num > 0) {
    pos = Math.sqrt(num);
    alert(pos);
} else {
    neg = Math.pow(num, 2);
    alert(neg);
}
