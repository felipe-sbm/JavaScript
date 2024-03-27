//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 15/03/2024. ECT - UFRN

//Enunciado:
/*

-- Média Ponderada --

Faça um algoritmo que leia as 3 notas de um aluno e calcule a média final deste aluno.
Considera que a média é ponderada e que o peso de cada nota é: 2, 3 e 5, respectivamente.
Nessa questão você vai precisar usar o operador + para somar os valores das notas.
Você já deve nesse momento ter feito a questão do Bom dia, onde você usou o operador + para juntar texto. Isso foi legal,
mas quando você tentar usar o operador + para somar valores vai descobrir que algo da errado na sua conta. Isso ocorre porque o comando prompt( )
transforma tudo  que você digita em um caractere. Ele transforma para facilitar para você juntar caracteres, mas em compensação isso mata o processo de somar.
Para corrigir isso, você vai ter que transformar o que sai do prompt( ) em um número. Para isso você pode usar as funções parseInt( )
(que transforma um carácter num inteiro) ou parseFloat( ) (que transforma um carácter num número real). Para usar elas, basta fazer assim:

var x;
x = parseFloat(prompt( ));

Com isso, o que sair de prompt( ) se torna um número real automaticamente. 

Exemplo de entrada:
5
6
4

Exemplo de saída:
4.8

Exemplo de entrada:
6
6
6
Exemplo de saída:
6

12929 alunos realizaram a atividade.
Autor(a): orivaldo@gmail.com

*/

var numero1 = parseFloat(prompt("Informe o primeiro número:"));
var numero2 = parseFloat(prompt("Informe o primeiro número:"));
var numero3 = parseFloat(prompt("Informe o primeiro número:"));

let media = ((numero1*2) + (numero2*3) + (numero3*5))/10;

console.log(media);
