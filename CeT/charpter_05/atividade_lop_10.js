//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 05/04/2024. ECT - UFRN

//Enunciado:
/* -- Divisível por 3 e por 4 ao mesmo tempo. --

(questão 8) Faça um programa que recebe um número e informa se ele divisível por
3 e por 4 ao mesmo tempo. Use o principio da divisibilidade que você viu no problema dos
números pares e impares. Só que dessa vez, não dois testes juntos: o número deve ser divisível
por 3 ao mesmo tempo que é divisível por 4. Os número 12 e 24 são exemplos disso.
Caso o número não seja, informe : não é divisível pelos 2.

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída:       |
|---------------------|-------------------------|
| 12                  | divisível por 3 e por 4 |
|---------------------|-------------------------|
| 20                  | não é divisível pelos 2 |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
8198 alunos visualizaram a atividade.
Autor(a): rudsondant@gmail.com */

let num = parseFloat(prompt("Insira um número:"));

if (num % 3 === 0 && num % 4 === 0) {
  alert("divisível por 3 e por 4");
} else {
  alert("não é divisível pelos 2");
}
