//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 05/04/2024. ECT - UFRN

//Enunciado:
/* -- Compara com 10 --

Já aprendemos a comparar se um número é maior que outro e também se ele menor que outro. Mas e se
quisermos comparar quando ele é exatamente igual? Nesse caso a expressão dentro do if não seria mais
uma inequação. Ela passa a ser uma comparação entre dois valores. Vamos imaginar um problema onde 
você deve comparar se o valor de uma variável é exatamente igual a 10. Vamos usar nesse exemplo o 
operador ==. Ele é usado para comparar o valor de duas elementos. Veja abaixo como fica um if com uma 
comparação para saber se uma variável x é exatamente igual a 10! Complete o código criando a variável x 
e usando um prompt( ) para deixar que o programa digite um valor para x. Se o valor de x for realmente 
igual a 10, imprima na tela a frase "igual".

if (x == 10) {
    alert("igual");
}

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída: |
|---------------------|-------------------|
| 10                  | Igual             |
|---------------------|-------------------|
| 11                  |                   |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
5951 alunos visualizaram a atividade.
Autor(a): rudsondant@gmail.com */

let dez = parseFloat(prompt("Insira um valor:"));

if (dez == 10) {
    alert("igual");
}
