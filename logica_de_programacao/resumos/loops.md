### Estruturas de Controle de Fluxo e Loops

| Estrutura/Método | Descrição                                                                           |
| ---------------- | ----------------------------------------------------------------------------------- |
| for              | Loop que executa um bloco de código um número específico de vezes                   |
| while            | Loop que executa um bloco de código enquanto a condição especificada for verdadeira |
| for...of         | Loop que itera sobre elementos iteráveis, como arrays                               |
| if/else          | Estrutura de controle condicional                                                   |
| &&, \|\|, !      | Operadores lógicos                                                                  |
| break, continue  | Palavras-chave para controlar loops                                                 |

break(ou continue) **para** só o for, return **para** tudo.

#### Exemplos

1. **`for`**: Um loop clássico que permite iterar sobre os elementos de um array usando um índice. (permite executar uma ação repetidamente. Você pode usá-lo para percorrer cada item em uma lista e realizar uma operação específica para cada item. É uma maneira eficiente de lidar com muitos itens sem precisar repetir o mesmo código várias vezes.)

   ```javascript
   let fruits = ["apple", "banana", "cherry"];
   for (let i = 0; i < fruits.length; i++) {
     console.log(fruits[i]);
   }
   // Saída:
   // apple
   // banana
   // cherry
   ```

2. **`while`**: Executa um bloco de código enquanto uma condição especificada for verdadeira.

   ```javascript
   let i = 0;
   let fruits = ["apple", "banana", "cherry"];
   while (i < fruits.length) {
     console.log(fruits[i]);
     i++;
   }
   // Saída:
   // apple
   // banana
   // cherry
   ```

3. **`for...of`**: Itera sobre os valores de um objeto iterável, como um array. (é um jeito fácil de passar por todos os itens de uma lista, como um array, sem ter que se preocupar com números de posição. Em vez de dizer "vá do primeiro item até o último", você está dizendo "vá direto para cada item e faça algo com ele". É como se estivéssemos lendo cada elemento da lista, um por um.)

   ```javascript
   let fruits = ["apple", "banana", "cherry"];
   for (let fruit of fruits) {
     console.log(fruit);
   }
   // Saída:
   // apple
   // banana
   // cherry
   ```

4. **if/else**: O if/else é uma estrutura de controle de fluxo em JavaScript que permite executar diferentes blocos de código com base em uma condição. Aqui está um pequeno resumo:

_if_: O if é usado para verificar se uma condição é verdadeira. Se a condição for verdadeira, o bloco de código dentro do if será executado.

_else_: O else é usado em conjunto com o if para fornecer uma alternativa caso a condição do if seja falsa. Se a condição do if não for verdadeira, o bloco de código dentro do else será executado.

```javascript
let idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
```

5. **&&, \|\|, !**: Os operadores lógicos são usados para combinar ou manipular valores booleanos (verdadeiro ou falso).

- **E lógico (`&&`)**: Retorna verdadeiro se ambas as expressões forem verdadeiras. Caso contrário, retorna falso.

- **OU lógico (`||`)**: Retorna verdadeiro se pelo menos uma das expressões for verdadeira. Retorna falso apenas se ambas as expressões forem falsas.

- **Negação lógica (`!`)**: Inverte o valor de verdadeiro para falso e vice-versa. Por exemplo, `!true` retorna `false` e `!false` retorna `true`.

```javascript
let temperatura = 25;
let diaEnsolarado = true;

if (temperatura > 20 && diaEnsolarado) {
  console.log("Vamos à praia!");
} else {
  console.log("Melhor ficar em casa.");
}
```

```javascript
let feriado = true;
let diaDeFolga = false;

if (feriado || diaDeFolga) {
  console.log("Vou relaxar e aproveitar o dia!");
} else {
  console.log("Preciso trabalhar ou fazer outras atividades.");
}
```

```javascript
let chovendo = false;

if (!chovendo) {
  console.log("Vou sair para passear.");
} else {
  console.log("Melhor ficar em casa.");
}
```

6. **break, continue**:

- `break`: É usado dentro de loops (for, while, do...while, switch) para interromper a execução do loop imediatamente quando uma condição específica é atendida. Ele sai do loop e continua a execução do código após o loop.

- `continue`: Também é usado dentro de loops, mas ao contrário do break, ele não interrompe completamente o loop. Em vez disso, ele pula para a próxima iteração do loop, ignorando qualquer código restante dentro do bloco de loop para essa iteração específica.

- `return`: É usado para sair de uma função e retornar um valor opcional. Quando o return é encontrado em uma função, a execução da função é interrompida e o valor especificado após o return (se houver) é retornado como resultado da chamada da função. O return também pode ser usado para retornar imediatamente de uma função sem fornecer um valor, o que é útil em funções que não retornam nenhum valor específico.

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // Sai do loop quando i for igual a 3
  }
  console.log(i);
}
```

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Pula a execução do restante do código e vai para a próxima iteração
  }
  console.log(i);
}
```

```javascript
function somar(a, b) {
  return a + b;
}

let resultado = somar(3, 4);
console.log(resultado); // Saída: 7
```
