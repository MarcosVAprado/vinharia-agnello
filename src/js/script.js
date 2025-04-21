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