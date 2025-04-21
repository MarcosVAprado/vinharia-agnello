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

  // Capitaliza a primeira letra para exibir bonito no console
  tipoVinho = tipoVinho.charAt(0).toUpperCase() + tipoVinho.slice(1);
  
  // Safra
  let safra;
  do {
    safra = pedirInformacao("Digite o ano da safra:");
  } while (isNaN(safra) || parseInt(safra) <= 0);
  safra = parseInt(safra);
  
// Estoque
let estoque;
do {
  estoque = pedirInformacao("Digite a quantidade em estoque:");
} while (isNaN(estoque) || parseInt(estoque) < 0);
estoque = parseInt(estoque);

// Mensagem de confirmação
alert("Cadastro realizado!");

// Alerta antes da exibição
alert("A seguir, veja os detalhes do vinho no console.");
  
// Classificação da safra
let classificacaoSafra;
if (safra >= 2020) {
  classificacaoSafra = "Vinho jovem";
} else if (safra >= 2015 && safra <= 2019) {
  classificacaoSafra = "Vinho amadurecido";
} else {
  classificacaoSafra = "Vinho antigo";
  }
  
  // Exibição no console
  console.log("======= Cadastro de Vinho =======");
  console.log("Nome: " + nomeVinho);
  console.log("Tipo: " + tipoVinho);
  console.log("Safra: " + safra + " (" + classificacaoSafra + ")");
  console.log("Quantidade em estoque: " + estoque);
  
  // Verificação de estoque
  if (estoque < 5) {
    console.log("⚠️ ESTOQUE BAIXO");
  }
  console.log("=================================");