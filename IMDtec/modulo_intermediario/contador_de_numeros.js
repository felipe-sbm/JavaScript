function contarDigitos(numero) {
  if (numero === 0) {
    return 0;
  } else {
    const proximoNumero = Math.floor(numero / 10);
    return 1 + contarDigitos(proximoNumero);
  }
}
