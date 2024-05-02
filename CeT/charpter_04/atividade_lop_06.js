//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 05/04/2024. ECT - UFRN

//Enunciado:
/* -- Compara com 20 parte 2

Vamos retomar o exemplo da comparação com 20. Agora vamos fazer um programa que identifica se
um dado número é menor, igual ou maior que 20 e exibe o resultado na saída.
São 3 comparações diferentes!

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída: |
|---------------------|-------------------|
| 20                  | Igual             |
|---------------------|-------------------|
| -20                 | Menor             |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
7120 alunos visualizaram a atividade.
Autor(a): rudsondant@gmail.com */

let num = parseInt(prompt("Insira um valor:"));

if (num == 20) {
  alert("igual");
}
if (num > 20) {
  alert("maior");
}
if (num < 20) {
  alert("menor");
}
