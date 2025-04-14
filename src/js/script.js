// Função para validar entrada
function solicitarInformacao(mensagem) {
    let entrada;
    do {
        entrada = prompt(mensagem);
        if (!entrada) {
            alert("Entrada inválida. Por favor, preencha o campo.");
        }
    } while (!entrada);
    return entrada;
}
 
// Coleta das informações
const nomeVinho = solicitarInformacao("Digite o nome do vinho:");
const tipoVinho = solicitarInformacao("Digite o tipo do vinho (Tinto, Branco, Rosé):");
const safraVinho = parseInt(solicitarInformacao("Digite o ano da safra do vinho:"), 10);
const quantidadeEstoque = parseInt(solicitarInformacao("Digite a quantidade em estoque:"), 10);
 
// Verificação de estoque
let mensagemEstoque = quantidadeEstoque < 5 ? "ESTOQUE BAIXO" : "Estoque adequado";
 
// Classificação da safra
let classificacaoSafra;
if (safraVinho >= 2020) {
    classificacaoSafra = "Vinho jovem";
} else if (safraVinho >= 2015 && safraVinho < 2020) {
    classificacaoSafra = "Vinho amadurecido";
} else {
    classificacaoSafra = "Vinho antigo";
}
 
// Exibição das informações
alert("Cadastro realizado! Veja os detalhes no console.");
 
console.log("Detalhes do Vinho Cadastrado:");
console.log(`Nome do Vinho: ${nomeVinho}`);
console.log(`Tipo: ${tipoVinho}`);
console.log(`Safra: ${safraVinho}`);
console.log(`Classificação da Safra: ${classificacaoSafra}`);
console.log(`Quantidade em Estoque: ${quantidadeEstoque}`);
console.log(`Status do Estoque: ${mensagemEstoque}`);