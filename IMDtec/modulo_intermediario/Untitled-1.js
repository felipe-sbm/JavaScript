// Primeiro ele vai peguntar qual será o valor de X que o usuário quer
let x = prompt("Digite o valor de x:");

// Agora ele vai calcular
let resultado = 3 * x * 9/4 - ((Math.pow(2/3, 2) + 2) / Math.sqrt(4/9));

// Cria uma string contendo a equação e o resultado
let equacao = "3x(9/4) - [(2/3)^2 + 2] / √(4/9) = " + resultado;

// Exibe a equação e o resultado na página HTML
document.write("<h1>Equação resolvida:</h1>");
document.write("<p>" + equacao + "</p>");