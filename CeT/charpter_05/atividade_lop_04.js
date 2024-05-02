//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 05/04/2024. ECT - UFRN

//Enunciado:
/* -- MC novamente com 2 decisões --

Refaça o código da questão "IMC simples com 2 decisões", mas vamos usar outro comando para decidir
a se o imc está acima do normal: else! Veja a estrutura abaixo para usar como base.

if (inequação) {
    ...
}
    else{
    ...​
}

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída: |
|---------------------|-------------------|
| 80                  | Acima do normal   |
| 1.70                |                   |
|---------------------|-------------------|
| 50                  | Normal            |
| 1.70                |                   |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
7425 alunos visualiazram a atividade.   
Autor(a): rudsondant@gmail.com */

let mas = parseFloat(prompt("Insira o valor da sua massa em KG:"));
let alt = parseFloat(prompt("Insira a sua altura em metros:"));

var imc = mas / Math.pow(alt, 2);

if (imc >= 25) {
  alert("Acima do normal");
} else {
  alert("Normal");
}
