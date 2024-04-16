### Variáveis e Tipos de Dados

| Conceito  | Descrição                                    |
| --------- | -------------------------------------------- |
| const     | Declara variáveis imutáveis                  |
| let       | Declara variáveis mutáveis (escopo de bloco) |
| var       | Declara variáveis mutáveis (escopo global)   |
| --------- | -------------------------------------------- |
| string    | Representa texto                             |
| number    | Representa números                           |
| boolean   | Representa verdadeiro ou falso               |
| null      | Representa um valor nulo                     |
| undefined | Representa um valor indefinido               |

`const =` Para declarar variáveis imutáveis, ou seja, cujo conteúdo não pode ser mais alterado posteriormente.

`let =` Para declarar variáveis mutáveis, ou seja, cujo conteúdo pode ser alterado posteriormente, a variável só é acessível dentro do bloco de código em que foi declarada.

`var =` Para declarar variáveis mutáveos, mesmo dentro de um bloco de código (por exemplo, dentro de uma função), a variável pode ser acessada fora desse bloco, o que pode causar confusão e bugs. **Não usar**

### Operadores e Estruturas de Controle

| Conceito        | Descrição                         |
| --------------- | --------------------------------- |
| +, -, \*, /     | Operadores aritméticos            |
| +=, -=, \*=, /= | Operadores de atribuição          |
| %               | Operador de módulo                |
| x++, ++x        | Operadores de incremento          |
| --x, x--        | Operadores de decremento          |
| >, <, >=, <=    | Operadores de comparação          |
| ==, !=          | Operadores de igualdade           |
| ===, !==        | Operadores de identidade          |
| &&              | Operador lógico E (AND)           |
| \|\|            | Operador lógico OU (OR)           |
| !               | Operador lógico NOT (negação)     |
| if/else         | Estrutura de controle condicional |
| ? :             | Operador ternário                 |

#### Tipos de dados: string, number, boolean, null, undefined, (bigInt e symbol)

```javascript
let number = 10;
let string = "Olá, mundo!";
let boolean = true;
let array = [1, 2, 3];
let object = { chave: "valor" };
```

```javascript
string template = console.log(`texto exemplo ${nomeVariavel}`);
```

#### Exercício simples de variável -

```javascript
let varA = "A"; //B
let varB = "B"; //C
let varC = "C"; //A

let varD = varA;

varA = varB;
varB = varC;
varC = varD;

console.log(varA, varB, varC);
```
