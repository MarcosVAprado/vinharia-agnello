// Função para garantir que o usuário digitou algo
function pedirInformacao(mensagem) {
    let valor;
    do {
      valor = prompt(mensagem);
    } while (valor === null || valor.trim() === '');
    return valor.trim();
  }
  
  // Boas-vindas
  alert("Bem-vindo ao gerenciador de estoque da Agnello's");
  alert("A seguir, cadastre o seu vinho");

  // Coleta de dados
  const nomeVinho = pedirInformacao("Digite o nome do vinho:");
  
  // Validação do tipo de vinho
  let tipoVinho;
  do {
    tipoVinho = pedirInformacao("Digite o tipo do vinho (Tinto, Branco ou Rosé):").toLowerCase();
  } while (
    tipoVinho !== "tinto" &&
    tipoVinho !== "branco" &&
    tipoVinho !== "rosé" &&
    tipoVinho !== "rose" // aceita rosé sem acento
  );
  