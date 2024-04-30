## Tipagens

### Tipos Primitivos

#### String

```ts
let nome: string = "João";
```

#### Number

```ts
let idade: number = 12;
```

#### Boolean

```ts
let maiorIdade: boolean = true;
```

#### Any

Obs. Muito cuidado ao usar Any, por ele ser _qualquer coisa_ pode dar os erros de falta de tipagem igual o JS.

```ts
let qualquerCoisa = "Raymundo" || 18 || false;
```

#### Undefined

```ts
let sobrenome;

console.log(typeof sobrenome);
```

### Tipagem de Listas

Colocar "[]" após os tipos já conhecidos, ex:

```ts
let nomes: string[] = ["joao", "matheus", "rose", "renato", "maria"];

let numeros: number[] = [1, 4, 10, 44, 100];

let b: boolean[] = [true, false, false, true];
b = [];

let c: any[] = ["luan", 24, true];
```

### Tipagem de Objetos

```ts
let usuario: { nome: string; idade: number; ativo: boolean; a: any } = {
  nome: "lucas",
  idade: 32,
  ativo: true,
  a: {
    a: [123, "abc"],
  },
};
```

Um array de objetos seria ":{nome: string, idade: number}[]"

### Tipagem de dados em funções

```ts
function imprimir(nome: string): string {
  return "luan";
}

const imprimirMaiorIdade = (idade: number): boolean => {
  /* pode ter mais de um parâmetro */
  if (idade < 18) {
    return false;
  }
  return true;
};

imprimir([123, "abc"]); // 123 dará erro pois a função só recebe strings
```

### Mais tipos

#### Unknown

É um tipo de dado bem restrito. Pode utilizá-lo quando não tiver certeza do tipo de dado que virá do front. Serve para permitir a utilização dos dados e deve, em seguida, ser convertido para o tipo que deve ser recebido na aplicação.

```ts
//função de exemplo para converter de JSON para array
const json = JSON.stringify(["Guido", "Vidal", "Dani", "Ruli"]);

function converterJSON(info: string): unknown {
  return JSON.parse(info);
}

const jsonConvertido = converterJSON(json) as string[];
// as string[] diz ao TS que o jsonConvertido deve ser um array

console.log(jsonConvertido[1]);
```

#### União de tipos

Usar dois tipos em uma variável.

_ex simples_:

```ts
let algumaCoisa: number | boolean;
algumaCoisa = true;
```

Bons motivos para usar isso:

```ts
const cadastroUsuarios = (usuarios: { nome: string } | { nome: string }[]) => {
  return usuarios;
};

const usuario = {
  nome: "João",
};

const usuarios = [
  {
    nome: "Maria",
  },
  {
    nome: "José",
  },
];

cadastroUsuarios(usuario); // será aceito tanto usuario quanto usuarios
```

_Obs. Não usar a torto e a direito se não no fim será um Any._

#### Parâmetros Opcionais

Para falar que um parâmetro é opcional deve-se colocar `?` na hora de informar o seu tipo.

_Ex_:

```ts
// o parâmetro nome será OBRIGATÓRIO e o parâmetro valor será OPCIONAL
const cadastro = (info: { nome: string; valor?: number }) => {
  console.log(`Você cadastrou ${info.nome} de valor ${info.valor}`);
};

cadastro({
  nome: "Gol",
});

// Você cadastrou Gol de valor undefined
```

_Obs. Ao informar um parâmetro opcional é dada a permissão ao TS de retornar um valor undefined_

Quando o parâmetro for opcional e o TS não tiver certeza se será passado o objeto dentro dele, ocorrerá um erro:

```ts
// aqui info é opcional - não apresentará erro de imediato mas essa função não irá funcionar.
const cadastro = (info?: { nome: string; valor?: number }) => {
  console.log(`Você cadastrou ${info.nome}`);
};

cadastro({
  nome: "Gol",
});

// erro: o objeto possivelmente é undefined
```

É possível certificar ao TS que será passado o Objeto do Parâmetro com `!`

```ts
const cadastro = (info?: { nome: string; valor?: number }) => {
  console.log(`Você cadastrou ${info!.nome}`);
};

// se no fim das contas eu não passar esse objeto aqui em baixo vai dar erro de qualquer jeito.
// não usar essa ! a toa.
cadastro({
  nome: "Gol",
});

// ! -> non null assertion
```

#### Tuplas

Um array que pode ter mais de um tipo.

```ts
let informacoes: [string, number, boolean];

informacoes = ["lohan", 57, false];
// passar na mesma ordem da tupla se não vai dar erro por não serem o mesmo tipo.
```

_Obs. Cuidado com a quantidade de elementos diferentes dentro das tuplas para não virarem um Any._

#### Type Narrowing

O estreitamento.

Os métodos devem ser globais em relação ao que foi passado.

```ts
const cadastro = (cpf: string | number) => {
  cpf.toUpperCase(); // Não funciona por ser um método apenas de strings.

  cpf.toFixed(); // Não funciona por ser um método apenas de numbers.
};
```

Para conseguir usar um método especifico é bom fazer validações.

```ts
const cadastro = (cpf: string | number) => {
  let resultado: string | number;
  if (typeof cpf === "string") {
    resultado = cpf.toUpperCase();
  } else {
    resultado = cpf.toFixed(2);
  }

  console.log(resultado);
};

cadastro("00012323111");
```

#### Void e Never

Uma função **Void** não retorna nenhum valor, sendo utilizada apenas para realizar ações ou operações sem a necessidade de retorno de um dado específico.

_Ex:_

```ts
const teste = () => {
  console.log("função sem retorno");
  return;
};
```

Uma função **Never** também não retorna valor, no entanto, ela lança uma exceção e interrompe a execução do programa de forma definitiva, indicando um ponto de falha que não pode ser tratado de maneira tradicional.

```ts
const validarErro = () => {
  throw new Error("função never");
};
```

#### Type

Type é uma forma de criar tipos estruturados. (uma das funcionalidades mais importantes do TS)
<br>
O código feito até então tem dificil manutenção e legibilidade. Ex:

```ts
const cadastro = (info: {
  nome: string;
  idade: number;
  email: string;
  cpf: string;
}) => {};
```

Por convenção um Type se escreve com a letra inicial maiúscula. Ex:

```ts
type Email = string;
// ou
type Usuario = { nome: string; idade: number; email: string; cpf: string };
```

Usando o Type o código de cadastro vai ficar:

```ts
const cadastro = (info: Usuario) => {};

// trona-se possível utilizar em outras funções

const cadastro2 = (info: Usuario) => {};
```

É possivel passar um tipo dentro de outro.

```ts
type Email = string;
type Endereco = {
  rua: string;
  cep: string;
};
type Usuario = {
  nome: string;
  idade: number;
  email: Email;
  cpf: string;
  endereco: Endereco;
};

const cadastro = (info: Usuario) => {
  info.endereco.cep;
};
```

#### Tipos Literais

Quando se define uma string qualquer como um tipo de dado.

```ts
type Transacao = {
  numero: number;
  validade: string;
  cvv: number;
  nome: string;
  tipo: "credito" | "debito"; // tipo só poderá ser um desses dois. Até se colocar "Credito" ou "Debito" vai dar errado.
};
```
