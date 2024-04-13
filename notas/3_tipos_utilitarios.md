## Tipos Utilitários

Bibliotecas prontas no TS que servem para manipular tipos e adcionar funcionalidades. Tipos utilitários também devem ser escritos com a primeira letra maiúscula.

### Partial

Aceita parte do tipo informado, faz com que não seja obrigátorio informar todas as propriedades dentro do tipo (Inlcusive é possivel passar um objeto vazio que irá contar como se tivesse passado parte do tipo).

_ex_:

```ts
type Usuario = {
  nome: string;
  idade?: number;
  email: string;
};

const cadastrarUsuario = (usuario: Partial<Usuario>) => {
  return usuario;
};

cadastrarUsuario({
  nome: "Luan",
  // note que mesmo o email sendo obriatório no type, não é necessário passá-lo pois estamos usando o Partial na função.
});

// cadastrarUsuario({}) --> é aceito o objeto vazio.
```

### Required

Todas as propriedades do tipo informado são **obrigatórias**.
_ex_:

```ts
type Usuario = {
  nome: string;
  idade?: number;
  email: string;
};

const cadastrarUsuario = (usuario: Required<Usuario>) => {
  return usuario;
};

cadastrarUsuario({
  nome: "Luan",
  idade: 24, // veja que a idade é obrigatória por conta do uso do Required.
  email: "luan@exemplo.com",
});
```

O uso de `Required` em uma função específica pode ser preferível quando nem todas as propriedades são obrigatórias em um tipo, mas é necessário que todas sejam informadas em uma função particular. Dessa forma, em vez de modificar a definição do tipo de objeto em todas as funções que o utilizam, podemos tornar todos os campos obrigatórios apenas na função em questão, garantindo consistência e facilitando a manutenção do código.

### Readonly

As propriedades do objeto são apenas para leitura.

_ex_:

```ts
type Usuario = {
  nome: string;
  idade?: number;
  email: string;
};

const luan: Readonly<Usuario> = {
  nome: "Luan",
  email: "luan@email.com",
};

luan.nome = "Luan Barradas"; // Não será possível modificar pois serve apenas para leitura.
```

Uma boa situação para usar `Readonly` é quando temos alguma informação que queremos ler mas não modificar.

### Record

O **Record** é um tipo utilitário mais complexo que os anteriores, nele são passadas duas informações, as chaves e o tipo:

`Record<keys, type>`

As chaves devem ter uma propriedade deste objeto com o tipo passado.

```ts
type Carro = {
  ano: number;
  cor: string;
};

type Marca = "gol" | "palio" | "fusca";

const carros: Record<Marca, Carro> = {
  gol: {
    ano: 2021,
    cor: "branco"
  }
  palio: {
    ano: 2013,
    cor: "preto"
  }
  fusca: {
    ano: 2005,
    cor: "azul"
  }
} // enquanto não tiver as 3 propriedades(Marca) não forem preenchidas com o tipo(Carro) Objeto(carros) não estará completo.

```

### Pick

Define as chaves que serão obrigatórias (útil quando você deseja criar um novo tipo com base em um tipo existente, mas precisa incluir apenas um subconjunto das propriedades originais).

`Pick<type, keys>`

```ts
type Usuario = {
  nome: string;
  idade: number;
  email: string;
};

type Keys = "nome" | "email"; // nome e email são obrigatórios.

const luan: Pick<Usuario, Keys> = {
  nome: "Luan",
  email: "luan@email.com",
  // Não posso colocar a idade aqui porque ela não está definida no Pick.
};
```

### Omit

Cria um novo tipo excluindo uma ou mais propriedades específicas de um tipo existente ( útil quando você deseja criar um novo tipo com base em um tipo existente, mas deseja remover algumas propriedades específicas desse novo tipo).

`Omit<type, keys>`

```ts
type Usuario = {
  nome: string;
  idade: number;
  email: string;
};

type Keys = "idade"; // Idade não deve ser passada.

const luan: Pick<Usuario, Keys> = {
  nome: "Luan",
  email: "luan@email.com",
  // Não posso colocar a idade aqui porque ela foi removida pelo Omit.
};
```

### Exclude

Remove um tipo específico de uma lista de tipos. Por exemplo, se você tem uma lista de tipos como `A | B | C`, e você quer remover `A`, você pode usar `Exclude<A, A | B | C>` para obter apenas `B | C`.

`Exclude<unionType, excludedMembers>`

_ex_:

```ts
type ex1 = Exclude<"a" | "b" | "c", "a" | "b">; // no fim fica só o "c"

type ex2 = Exclude<boolean | string | number, number>; // retirará o number.
```

### Extract

É o contrário de Exclude, o Extract seleciona um tipo específico de uma lista de tipos. Por exemplo, se você tem uma lista de tipos como `A | B | C`, e você quer apenas `A`, você pode usar Extract`<A, A | B | C>` para obter apenas A.

`Extract<type, union>`

_ex_:

```ts
type ex1 = Extract<"a" | "b" | "c", "a" | "b">; // vai ficar "a" e "b"

type ex2 = Extract<number | number[] | boolean, number>; // ficará apenas o number
```

### NonNullable

NonNullable transforma um tipo que **pode ser** null ou undefined em um tipo que **não pode** ser null ou undefined. Por exemplo, se você tem um tipo `string | null | undefined`, aplicar NonNullable a ele resultará apenas em `string`.

`NonNullable<type>`

```ts
type ex1 = NonNullable<number | string[] | null | undefined>; // vai retirar o null e o undefined
```

### ReturnType

### Tipos de manipulação de strings
