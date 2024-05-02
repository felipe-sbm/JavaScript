//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 05/04/2024. ECT - UFRN

//Enunciado:
/* -- Compara com 20 --

Vamos avançar agora para um teste que tem duas situações. Você vai comparar um número, que nesse exemplo
será 20. Se for maior ou igual a 20, você vai imprimir a frase "maior ou igual". Se for menor que 20, você 
vai imprimir "menor". Nessa questão você pode usar if para cada condição a ser testada. Só será executada 
a condição que for verdade. Para usar o maior ou igual use o símbolo >=, conforme o exemplo abaixo.

if (x >= 20) {
  alert();
}

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída: |
|---------------------|-------------------|
| 21                  | maior ou igual    |
|---------------------|-------------------|
| 10                  | menor             |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
6460 alunos visualizaram a atividade.
Autor(a): rudsondant@gmail.com */

let num = parseInt(prompt("Insira um valor:"));

if (num >= 20) {
    alert("maior ou igual");
} else {
    alert("menor");
}
