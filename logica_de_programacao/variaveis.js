/* const = Para declarar variáveis imutáveis, ou seja, cujo conteúdo não pode ser mais alterado posteriormente.

let =  Para declarar variáveis mutáveis, ou seja, cujo conteúdo pode ser alterado posteriormente.

var = é parecido com o let (criado antes da existencia de const e let), porém quando a variável não foi definida ainda o código é executado. -- não usar “var”, é facil de ocasionar erros dificeis, bugs inesperados --
*/

// -----------------------------------------------------------------------------------------------------------------

/* Tipos de dados: string, number, boolean, null, undefined, (bigInt e symbol)
let number = 10;
let string = "Olá, mundo!";
let boolean = true;
let array = [1, 2, 3];
let object = { chave: "valor" };
*/

// string template = console.log(`texto exemplo ${nomeVariavel}`);

// -----------------------------------------------------------------------------------------------------------------

/* Operadores aritméticos:

=   soma
-   subtração
'*' multiplicação
/   divisão

*/

// ------------------------------------------------------------------------------------------------------------------

/* // exercício simples de variável - 
let varA = "A"; //B
let varB = "B"; //C
let varC = "C"; //A

let varD = varA;

varA = varB;
varB = varC;
varC = varD;

console.log(varA, varB, varC); */
