function calcular(a, b, c) {
  let delta = b * b - 4 * a * c;

  if (delta < 0) {
    console.log("Impossível calcular");
    return;
  }

  let x1 = (-b + Math.sqrt(delta)) / (2 * a);
  let x2 = (-b - Math.sqrt(delta)) / (2 * a);

  console.log("x1 =", x1);
  console.log("x2 =", x2);
}

// exemplos que a atividade forneceu.

calcular(1, -1, -2);
calcular(10, 3, 5);
calcular(10, 20.1, 5.1);
calcular(0, 20, 5);
