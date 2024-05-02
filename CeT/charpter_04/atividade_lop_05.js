//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 05/04/2024. ECT - UFRN

//Enunciado:
/* -- O quadrado ou raiz --

Vamos continuar praticando o uso do if. Nesse novo exemplo você deve implemente um programa que
recebe um número real e calcula: o quadrado do número, caso ele seja um número negativo, ou sua raiz
quadrada, caso contrário. Temos novamente duas condições. Mas agora vamos avaliar elas de um forma 
ligeiramente diferente. Existe uma estrutura chamada "else" que pode ser colocada logo abaixo de um if.
O else serve para executar uma ação quando a expressão no if tiver resultado falso. Usando o else você 
não precisa escrever um segundo if com uma expressão que seja o contrário do primeiro if. Parece confuso,
mais veja o exemplo abaixo. Se x for maior que 0 vai ser impresso o texto positivo. Senão for maior que 0 
(else é senão em inglês), vai cair no else e nesse caso não vai acontecer nada. Mais volte para questão, e 
tente usar o if com else para recebe um número real e calcula: o quadrado do número, caso ele seja um número 
negativo, ou sua raiz quadrada, caso contrário.

if (x > 0) {
    alert("positivo")
} else {
    ...
}

,,..,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída: |
|---------------------|-------------------|
| 9                   | 3                 |
|---------------------|-------------------|
| -1                  | 1                 |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
7946 alunos visualizaram a atividade.
Autor(a): rudsondant@gmail.com */

let num = parseInt(prompt("Insira um valor:"));

if (num > 0) {
    pos = Math.sqrt(num);
    alert(pos);
} else {
    neg = Math.pow(num, 2);
    alert(neg);
}
