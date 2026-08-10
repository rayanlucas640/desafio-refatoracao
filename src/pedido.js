const DESCONTO = 0.10;
const QUANTIDADE_MINIMA_DESCONTO = 3;

const produtos = [
    {
        nome: "Café",
        preco: 8,
        quantidade: 2
    },
    {
        nome: "Pão de Queijo",
        preco: 6,
        quantidade: 3
    },
    {
        nome: "Bolo",
        preco: 10,
        quantidade: 1
    },
    {
        nome: "Suco de Laranja",
        preco: 7,
        quantidade: 4
    }
];

function calcularTotalProduto(produto) {
    let total = produto.preco * produto.quantidade;

    if (produto.quantidade >= QUANTIDADE_MINIMA_DESCONTO) {
        total = total - (total * DESCONTO);
    }

    return total;
}

function calcularTotalPedido() {
    return produtos.reduce((total, produto) => {
        return total + calcularTotalProduto(produto);
    }, 0);
}

function calcularTotalItens() {
    return produtos.reduce((total, produto) => {
        return total + produto.quantidade;
    }, 0);
}

function exibirProduto(produto) {
    const total = calcularTotalProduto(produto);
    console.log(`${produto.nome}: R$ ${total.toFixed(2)}`);
}

function exibirResumo() {
    console.log("\n--- Resumo do Pedido ---");
    console.log(`Total de itens: ${calcularTotalItens()}`);
    console.log(`Total do pedido: R$ ${calcularTotalPedido().toFixed(2)}`);
}

produtos.forEach(exibirProduto);

exibirResumo();