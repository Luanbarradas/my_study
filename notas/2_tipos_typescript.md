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
