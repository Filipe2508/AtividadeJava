function alterarAparencia() {
  const agora = new Date();
  const hora = agora.getHours();

  // Definindo as cores de fundo e texto baseadas na hora
  const estilos = {
      manha: { bg: "white", texto: "black" },
      tarde: { bg: "yellow", texto: "black" },
      noite: { bg: "dark", texto: "white" },
      madrugada: { bg: "blue", texto: "white" }
  };

  // Selecionando o estilo baseado na hora
  let estiloAtual;
  if (hora >= 6 && hora < 12) {
      estiloAtual = estilos.manha;
  } else if (hora >= 12 && hora < 18) {
      estiloAtual = estilos.tarde;
  } else if (hora >= 18 && hora < 24) {
      estiloAtual = estilos.noite;
  } else {
      estiloAtual = estilos.madrugada;
  }

  // Aplicando os estilos ao corpo do documento
  document.body.style.backgroundColor = estiloAtual.bg;
  document.body.style.color = estiloAtual.texto;
}

// Chama a função para alterar a aparência da página imediatamente
alterarAparencia();
