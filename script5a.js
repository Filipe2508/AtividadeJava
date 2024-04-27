function solicitarData() {
  var data = prompt("Digite a data no formato dd/mm/aaaa:");

  while (!isValidDate(data)) {
      alert("Formato de data inválido. Por favor, tente novamente.");
      data = prompt("Digite a data no formato dd/mm/aaaa:");
  }

  var partes = data.split("/");
  var dia = parseInt(partes[0], 10);
  var mes = parseInt(partes[1], 10) - 1; 
  var ano = parseInt(partes[2], 10);

  var dataAtual = new Date();
  var dataDigitada = new Date(ano, mes, dia);

  var diasFaltantes = Math.floor((dataDigitada - dataAtual) / (1000 * 60 * 60 * 24));
  var mesesFaltantes = Math.floor(diasFaltantes / 30.44);
  var anosFaltantes = Math.floor(mesesFaltantes / 12);

  document.write(`Dias faltantes: ${diasFaltantes}<br>`);
  document.write(`Meses faltantes: ${mesesFaltantes}<br>`);
  document.write(`Anos faltantes: ${anosFaltantes}<br>`);
}

solicitarData();