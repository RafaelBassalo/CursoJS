const produtos = [
    { id: 1, nome: "Detergente", preco: 5.99 },
    { id: 2, nome: "Sabão em Pó", preco: 12.49 },
    { id: 3, nome: "Água Sanitária", preco: 8.99 },
    { id: 4, nome: "Esponja de Aço", preco: 3.50 },
];

function listarProdutos() {
    console.log("Produtos disponíveis:");
    produtos.forEach((produto) => {
        console.log(`${produto.id}. ${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
    });
}

function adicionarAoCarrinho(carrinho, idProduto, quantidade) {
    const produto = produtos.find((p) => p.id === idProduto);
    if (produto) {
        carrinho.push({ ...produto, quantidade });
        console.log(`${produto.nome} adicionado ao carrinho.`);
    } else {
        console.log("Produto não encontrado.");
    }
}

function exibirCarrinho(carrinho) {
    console.log("Carrinho de compras:");
    let total = 0;
    carrinho.forEach((item) => {
        const subtotal = item.preco * item.quantidade;
        total += subtotal;
        console.log(`${item.nome} - Quantidade: ${item.quantidade} - Subtotal: R$ ${subtotal.toFixed(2)}`);
    });
    console.log(`Total: R$ ${total.toFixed(2)}`);
}

// Exemplo de uso
const carrinho = [];
listarProdutos();
adicionarAoCarrinho(carrinho, 1, 2);
adicionarAoCarrinho(carrinho, 3, 1);
exibirCarrinho(carrinho);