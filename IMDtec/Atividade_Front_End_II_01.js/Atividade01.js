function calculadora_de_datas() {
  var idadeEmDias = 400;

  let anos = Math.trunc(idadeEmDias / 365);
  let meses = Math.trunc((idadeEmDias % 365) / 30);
  let dias = idadeEmDias % 30;

  console.log(anos + " ano(s)");
  console.log(meses + " mes(es)");
  console.log(dias + " dia(s)");
}

calculadora_de_datas();