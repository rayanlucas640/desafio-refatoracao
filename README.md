# Desafio de Refatoração — Sistema de Pedidos

## Objetivo

Este projeto tem como objetivo aplicar técnicas de refatoração em um sistema de pedidos de uma loja.

O código original funcionava corretamente, porém apresentava problemas de organização, repetição de código, nomes pouco claros e dificuldade para adicionar novos produtos.

A refatoração foi realizada mantendo o funcionamento esperado do sistema e tornando o código mais organizado, reutilizável e fácil de manter.

## Problemas encontrados

Durante a análise do código original foram identificados:

- Código duplicado nas funções dos produtos;
- Regra de desconto repetida;
- Variáveis com nomes pouco claros;
- Funções específicas para cada produto;
- Dificuldade para adicionar novos produtos;
- Falta de uma estrutura de dados adequada;
- Valores fixos espalhados pelo código;
- Mistura entre cálculo e exibição dos resultados.

Os problemas identificados estão detalhados no arquivo `ANALISE.md`.

## Refatorações realizadas

Foram aplicadas as seguintes melhorias:

- Substituição de nomes como `n1`, `p1` e `q1` por nomes descritivos;
- Criação de uma estrutura de dados utilizando array de objetos;
- Criação de uma função reutilizável para calcular o total de cada produto;
- Centralização da regra de desconto em constantes;
- Utilização de `forEach` para processar os produtos;
- Separação das responsabilidades de cálculo e exibição;
- Utilização de funções específicas para calcular o total do pedido e a quantidade total de itens.

## Novo produto

Após a refatoração, foi solicitado um novo produto:

- Suco de Laranja
- Preço: R$ 7,00
- Quantidade: 4

O produto foi adicionado diretamente ao array, sem necessidade de criar uma nova função.

## Desafio extra

Também foram implementadas:

- Quantidade total de itens do pedido;
- Valor total do pedido;
- Função responsável por exibir o resumo do pedido.

## Resultado

Após as alterações, o sistema continua funcionando corretamente e apresenta:

```text
Café: R$ 16.00
Pão de Queijo: R$ 16.20
Bolo: R$ 10.00
Suco de Laranja: R$ 25.20

--- Resumo do Pedido ---
Total de itens: 10
Total do pedido: R$ 67.40