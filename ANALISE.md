Análise do Código Original

## 1. Código duplicado

As funções `totalCafe()`, `totalPao()` e `totalBolo()` possuem praticamente a mesma estrutura. Todas calculam o preço multiplicando quantidade pelo preço, aplicam o desconto e exibem o resultado.

Isso gera repetição de código e dificulta futuras alterações.

## 2. Regra de desconto duplicada

A regra de desconto de 10% para compras com 3 ou mais unidades aparece dentro das três funções.

Caso o percentual de desconto precise ser alterado, seria necessário modificar vários trechos do código.

## 3. Nomes de variáveis pouco claros

Variáveis como `n1`, `p1`, `q1`, `n2`, `p2` e `q2` não deixam claro o que representam.

Nomes como `nome`, `preco` e `quantidade` tornam o código mais fácil de compreender.

## 4. Baixa escalabilidade

O código possui uma função específica para cada produto.

Se a loja tivesse 20 produtos, seria necessário criar diversas funções semelhantes, aumentando a quantidade de código e dificultando a manutenção.

## 5. Responsabilidades misturadas

As funções realizam mais de uma responsabilidade: calculam o valor do produto e também exibem o resultado no console.

Uma organização melhor seria separar o cálculo da apresentação dos dados.

## 6. Falta de uma estrutura de dados adequada

Os produtos estão armazenados em várias variáveis individuais.

Um array de objetos seria mais adequado para representar os produtos, pois permitiria adicionar ou remover itens de maneira mais simples.

## 7. Valores fixos espalhados pelo código

Os valores `0.10` e `3`, referentes ao desconto e à quantidade mínima de produtos, estão diretamente dentro das condições.

Esses valores deveriam ser armazenados em constantes com nomes descritivos, facilitando futuras alterações.