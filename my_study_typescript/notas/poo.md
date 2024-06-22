# Programação Orientada a Objetos.

Um paradigma da programação assim como a programação estruturada.

### Programação estruturada:

1. Sequências - Comandos a serem executados.
2. Condições - Sequências que só devem ser executadas se uma condição for cumprida.
   ex: if/else, switch...
3. Repetições - Sequências que decem ser executadas se uma condição for satisfeita.
   ex: for/while...

- Estrutura: como seguir uma receita, é feita passo a passo.
- Ex: Construir uma cidade de lego em que tem uma ordem para fazer cada parte da cidade, como cada bloco vai formar algo, como ruas, casas...
- Característica:

1. Usa funções para cada tarefa.
2. faz uma coisa de cada vez, seguindo uma instrução.

### POO:

- Estrutura: Usa objetos que possuem dados.
- Ex: Os objetos (carro, cachorro, pessoa) têm suas próprias caracteristicas
- Carro:
  - Ações(métodos): "Andar", "Buzinar" e "Freiar".
  - Coisas(atributos): "Cor", "Marca" e "Modelo".
- Característica:

1. Usa objetos que combinam ações (o que podem fazer) e coisas (características).
2. Cada objeto sabe como fazer suas próprias ações.

## Pilares da POO:

### Abstração:

- Foca nos detalhes essenciais, escondendo detalhes complexos.
- Ex: Um cachorro pode latir, não importa como é esse latido e como funciona internamente.

### Encapsulamento:

- Agupa dados e métodos dentro de um objeto.
- Protege os dados de acesso direto.
- Ex: Um carro não pode ser freiado de fora dele.

### Herança:

- Cria novas classes a partir de classes existentes.
- Reutiliza código.
- Ex: classe "Cachorro" que herda da classe "Animal".

### Polimorfismo:

- Trata objetos de diferentes classes de maneira uniforme.
- Ex: um método "fazerSom" que funcionaria tanto para cachorro(latir) quanto para gato(miar).

### Diferença de uma Classe para um Objeto:

classe:

![molde-funko](<https://d1a87ut6isnmlv.cloudfront.net/thumb-img//C_vnXEFRKxLURDax_t5fa2Yhs7I=/927x1277:2218x2728/328x369/filters:watermark(/ca_logo.png,center,5,10)/produtos/da/d5/M4126.jpg>)

objeto:

![funkos](https://www.lojatoyscollections.com.br/cdn/shop/products/Screenshot_3_2acca351-b913-4069-b40e-2ccf16651f1b_1200x1200.png?v=1662662187)

#### Sobre encapsulamento da classe:

1. public:

- Acesso: Propriedades e métodos são acessíveis de qualquer lugar (dentro e fora da classe).
- Uso: Este é o modificador padrão. Ideal para membros que devem estar disponíveis para qualquer parte do código.

2. protected:

- Acesso: Propriedades e métodos são acessíveis dentro da classe que os define e nas suas subclasses.
- Uso: Utilizado para membros que devem ser acessíveis e potencialmente modificáveis por subclasses, mas não fora delas.

3. private:

- Acesso: Propriedades e métodos são acessíveis apenas dentro da classe que os define.
- Uso: Ideal para membros que devem ser completamente encapsulados e não acessíveis ou modificáveis fora da classe.

  **Benefícios:**
  Encapsulamento: Esconde a complexidade interna e protege a integridade dos dados.
  Modularidade: Promove uma organização lógica do código, facilitando manutenção e compreensão.
  Segurança: Reduz o risco de uso inadequado das partes internas da classe, garantindo uma interface pública clara e bem definida.

#### Diferença em código:

```ts
// Objeto:

// Definição do tipo para o objeto
type Pessoa = {
  nome: string;
  idade: number;
};

// Criação do objeto
const pessoa: Pessoa = {
  nome: "João",
  idade: 30,
};
```

```ts
// Classe:
class Pessoa {
  // Propriedades da classe
  private nome: string;
  private idade: number;

  // Construtor da classe
  constructor(nome: string, idade: number, cidade: string) {
    this.nome = nome;
    this.idade = idade;
  }

  // Método para definir o nome
  public setNome(nome: string): void {
    this.nome = nome;
  }
}

// Criação de uma instância da classe Pessoa
const pessoa = new Pessoa("Maria", 25);

// Atualizando informações da pessoa
pessoa.setNome("Joana");
```

#### Método constructor:

É um método especial que é chamado automaticamente quando uma nova instância de uma classe é criada. O propósito principal do constructor é inicializar o objeto, configurando seus valores iniciais e executando qualquer lógica necessária durante a criação do objeto.

1. Funções do constructor
   Inicialização de Propriedades:
   O constructor permite que você inicialize as propriedades da instância da classe com valores passados como argumentos ou com valores padrão.

2. Configuração Inicial:
   Permite que você execute qualquer configuração ou lógica inicial que precise ser feita quando o objeto é criado.

3. Herança e Superclasse:
   Em classes que utilizam herança, o constructor da subclasse pode chamar o constructor da superclasse usando a função super(), garantindo que a parte da instância definida pela superclasse seja corretamente inicializada.

#### O uso de this.

This é uma referência ao objeto atual que está sendo criado ou manipulado. Usar `this.algumaCoisa` dentro de um método, incluindo o construtor, refere-se à propriedade `algumaCoisa` desse objeto específico.

**Por que usar this.?**

1. Desambiguação:
   Quando o nome do parâmetro do método ou do construtor é o mesmo que o nome da propriedade da classe, this é usado para distinguir entre a propriedade da classe e o parâmetro.

2. Acesso à Instância:
   this permite que você acesse e modifique as propriedades e métodos da instância atual da classe.

EX:

```ts
class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    // Tentar usar 'nome' diretamente aqui iria se referir ao parâmetro, não à propriedade da classe.
    nome = nome; // Não faz nada útil
    idade = idade; // Não faz nada útil
  }
}
```

```ts
class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome; // Atribui o valor do parâmetro 'nome' à propriedade 'nome' da instância da classe
    this.idade = idade; // Atribui o valor do parâmetro 'idade' à propriedade 'idade' da instância da classe
  }
}
```

## Herana e classes:

Em herança, as classes envolvidas geralmente recebem nomes específicos para esclarecer suas funções e relações. Os termos mais comuns são:

1. Classe Base (ou Superclasse): A classe original de onde outras classes derivam suas propriedades e métodos. Pode ser chamada também de Classe Pai ou Classe Mãe.

2. Classe Derivada (ou Subclasse): A classe que herda as propriedades e métodos da classe base. Pode ser chamada também de Classe Filha.

`extends` e `super` são utilizados no contexto de herança de classes para definir e utilizar a relação entre classes base (superclasses) e classes derivadas (subclasses).

**extends**
A palavra-chave extends é usada para criar uma classe que herda de outra classe. Quando uma classe é definida como uma extensão de outra, ela herda todas as propriedades e métodos da classe base, permitindo a reutilização de código e a implementação de comportamento específico na subclasse.

**super()**
A palavra-chave super é usada para chamar o construtor e métodos da classe base a partir da subclasse. Isso é especialmente útil no construtor da subclasse para inicializar a parte da classe base da subclasse.

EX:

```ts
// Class Pai

export type Animal = {
  nome: string;
  peso: number;
};

export class Mamifero {
  public nome: string;
  public peso: number;

  constructor(animal: Animal) {
    this.nome = animal.nome;
    this.peso = animal.peso;
  }

  public comer(): string {
    return "Animal Comendo";
  }
}
```

```ts
// class filha

// import serve para importar a classe pai para onde a classe filha estiver nos arquivos
import { Mamifero, Animal } from "./Mamifero";

// extends é o que "extende" a classe pai para a filha
export class Cachorro extends Mamifero {
  constructor(animal: Animal) {
    // é muito importante colocar o super para que realmente funcione a ligação entre "pai e filho"
    super(animal);
  }

  public latir() {
    return "Cachorro Latindo";
  }
}
```

```ts
// class filha
import { Mamifero, Animal } from "./Mamifero";

export class Baleia extends Mamifero {
  // o construtor deve ter os parâmetros da super classe
  constructor(animal: Animal) {
    // o super deve ter todos os parâmetros da super classe
    super(animal);
  }

  public nadar() {
    return "Baleia Nadando";
  }
}
```

## Polimorfismo:

Polimorfismo é um conceito fundamental na programação orientada a objetos que permite que objetos de diferentes classes sejam tratados como objetos da mesma classe base. Isso é conseguido através da herança e da implementação de métodos comuns nas subclasses. Existem dois tipos principais de polimorfismo:

1. **Polimorfismo em Tempo de Compilação (ou Sobrecarga de Métodos):** Permite que múltiplos métodos tenham o mesmo nome, mas com diferentes parâmetros. O compilador decide qual método chamar com base no número e tipo de argumentos fornecidos.

2. **Polimorfismo em Tempo de Execução (ou Sobrescrita de Métodos):** Permite que uma subclasse forneça uma implementação específica de um método que já foi definido na sua superclasse. Isso é utilizado para permitir que uma classe derivada tenha um comportamento específico para métodos comuns.

No contexto de polimorfismo em tempo de execução, os métodos que são sobrescritos nas subclasses são chamados através de uma referência da classe base, permitindo o comportamento específico da subclasse ser executado.

**Exemplo de Polimorfismo em Tempo de Execução:**

```ts
// Definindo a classe base
export type Animal = {
  nome: string;
  peso: number;
};

export class Mamifero {
  public nome: string;
  public peso: number;

  constructor(animal: Animal) {
    this.nome = animal.nome;
    this.peso = animal.peso;
  }

  public emitirSom(): string {
    return "Som de Mamífero";
  }
}
```

```ts
// Definindo a subclasse Cachorro
import { Mamifero, Animal } from "./Mamifero";

export class Cachorro extends Mamifero {
  constructor(animal: Animal) {
    super(animal);
  }

  // Sobrescrevendo o método emitirSom da classe base
  public emitirSom(): string {
    return "Cachorro Latindo";
  }
}
```

```ts
// Definindo a subclasse Baleia
import { Mamifero, Animal } from "./Mamifero";

export class Baleia extends Mamifero {
  constructor(animal: Animal) {
    super(animal);
  }

  // Sobrescrevendo o método emitirSom da classe base
  public emitirSom(): string {
    return "Baleia Emitindo Sons";
  }
}
```

```ts
// Utilizando polimorfismo
import { Mamifero } from "./Mamifero";
import { Cachorro } from "./Cachorro";
import { Baleia } from "./Baleia";

const animais: Mamifero[] = [
  new Cachorro({ nome: "Rex", peso: 20 }),
  new Baleia({ nome: "Willy", peso: 30000 }),
];

animais.forEach((animal) => {
  console.log(`${animal.nome}: ${animal.emitirSom()}`);
});
```

Neste exemplo, a lista de `animais` contém objetos de diferentes classes (`Cachorro` e `Baleia`), mas todos são tratados como objetos da classe base `Mamifero`. Quando o método `emitirSom` é chamado, o comportamento específico da subclasse é executado devido à sobrescrita de métodos, demonstrando polimorfismo em tempo de execução.

## Interfaces:

Interfaces são uma forma poderosa de definir contratos em TypeScript. Elas permitem que você defina a estrutura que um objeto deve seguir sem especificar a implementação. Isso promove a flexibilidade e a reusabilidade de código.

Interfaces podem ser usadas para garantir que uma classe ou um objeto adere a uma determinada estrutura. Aqui estão alguns conceitos importantes relacionados a interfaces:

1. **Definição de Interface:** Uma interface define um conjunto de propriedades e métodos que um objeto deve ter. Não inclui a implementação desses métodos.

2. **Implementação de Interface:** Uma classe pode implementar uma ou mais interfaces, garantindo que ela fornece a implementação dos métodos e propriedades definidos nas interfaces.

### Convenção de Nomes para Interfaces

Por convenção, os nomes das interfaces geralmente começam com a letra "I" maiúscula. Isso ajuda a distinguir interfaces de outras entidades, como classes e tipos.

**Exemplo de Uso de Interfaces:**

```ts
// Definindo a interface
export interface IAnimal {
  nome: string;
  peso: number;

  emitirSom(): string;
}
```

```ts
// Implementando a interface na classe Cachorro
export class Cachorro implements IAnimal {
  public nome: string;
  public peso: number;

  constructor(nome: string, peso: number) {
    this.nome = nome;
    this.peso = peso;
  }

  // Implementando o método da interface
  public emitirSom(): string {
    return "Cachorro Latindo";
  }
}
```

```ts
// Implementando a interface na classe Baleia
export class Baleia implements IAnimal {
  public nome: string;
  public peso: number;

  constructor(nome: string, peso: number) {
    this.nome = nome;
    this.peso = peso;
  }

  // Implementando o método da interface
  public emitirSom(): string {
    return "Baleia Emitindo Sons";
  }
}
```

```ts
// Utilizando as classes que implementam a interface
import { IAnimal } from "./IAnimal";
import { Cachorro } from "./Cachorro";
import { Baleia } from "./Baleia";

const animais: IAnimal[] = [
  new Cachorro("Rex", 20),
  new Baleia("Willy", 30000),
];

animais.forEach((animal) => {
  console.log(`${animal.nome}: ${animal.emitirSom()}`);
});
```

Neste exemplo, a interface `IAnimal` define que um objeto deve ter as propriedades `nome` e `peso`, e o método `emitirSom`. As classes `Cachorro` e `Baleia` implementam essa interface, garantindo que elas fornecem uma implementação para o método `emitirSom` e possuem as propriedades `nome` e `peso`.

### Vantagens das Interfaces

1. **Reusabilidade:** Interfaces permitem que diferentes classes implementem a mesma interface, promovendo a reusabilidade de código.

2. **Flexibilidade:** Ao programar contra interfaces em vez de classes concretas, você pode facilmente alterar a implementação sem afetar o código que usa essas interfaces.

3. **Documentação:** Interfaces servem como uma documentação clara do que uma classe deve fornecer, tornando o código mais legível e fácil de entender.

4. **Type Safety:** Interfaces ajudam a garantir que um objeto ou classe adere a uma determinada estrutura, proporcionando segurança de tipos e reduzindo erros.

### Classes Abstratas

**Usos:**

1. **Herança:** Use classes abstratas quando há um relacionamento claro de herança entre as classes. Uma classe abstrata pode fornecer uma implementação parcial que outras classes podem herdar e completar.
2. **Métodos Compartilhados:** Use classes abstratas para definir métodos e propriedades comuns que várias subclasses devem compartilhar. Uma classe abstrata pode ter tanto métodos implementados quanto não implementados (abstratos).
3. **Forçar Implementação:** Se você quiser garantir que certas subclasses forneçam implementações específicas, use métodos abstratos na classe abstrata.

**Exemplo:**

```ts
// Definindo uma classe abstrata
export abstract class Mamifero {
  public nome: string;
  public peso: number;

  constructor(nome: string, peso: number) {
    this.nome = nome;
    this.peso = peso;
  }

  // Método abstrato (sem implementação)
  public abstract emitirSom(): string;

  // Método não abstrato (com implementação)
  public dormir(): string {
    return `${this.nome} está dormindo`;
  }
}

// Implementando a classe abstrata em uma subclasse
export class Cachorro extends Mamifero {
  constructor(nome: string, peso: number) {
    super(nome, peso);
  }

  public emitirSom(): string {
    return "Cachorro Latindo";
  }
}
```

### Quando Usar Interface vs. Classe Abstrata

- **Interface:**

  - Quando você precisa definir um contrato sem fornecer nenhuma implementação.
  - Quando diferentes classes, que não têm um relacionamento de herança, devem seguir o mesmo conjunto de regras.
  - Quando você precisa que uma classe implemente múltiplos contratos (interfaces).

- **Classe Abstrata:**
  - Quando você quer fornecer uma implementação parcial que outras classes devem herdar e completar.
  - Quando existe um relacionamento claro de herança e compartilhamento de comportamento entre a classe base e suas subclasses.
  - Quando você quer garantir que certas subclasses forneçam implementações específicas para métodos abstratos.

### Exemplo Comparativo

```ts
// Usando Interface
export interface IVoador {
  voar(): void;
}

export class Passaro implements IVoador {
  public voar(): void {
    console.log("Pássaro voando");
  }
}

export class Aviao implements IVoador {
  public voar(): void {
    console.log("Avião voando");
  }
}

// Usando Classe Abstrata
export abstract class Mamifero {
  public nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  public abstract emitirSom(): void;

  public dormir(): void {
    console.log(`${this.nome} está dormindo`);
  }
}

export class Cachorro extends Mamifero {
  public emitirSom(): void {
    console.log("Cachorro Latindo");
  }
}

export class Gato extends Mamifero {
  public emitirSom(): void {
    console.log("Gato Miando");
  }
}
```

Neste exemplo, a interface `IVoador` define um contrato para qualquer classe que deve implementar a funcionalidade de voar, enquanto a classe abstrata `Mamifero` fornece um comportamento comum para todos os mamíferos, além de exigir que subclasses implementem o método `emitirSom`.

## Generics

Generics em TypeScript permitem criar componentes que funcionam com diferentes tipos de dados, proporcionando flexibilidade e reutilização de código sem perder a segurança de tipos.

### Vantagens dos Generics

1. **Reutilização de Código:** Permitem criar componentes que funcionam com qualquer tipo de dado.
2. **Segurança de Tipos:** Garantem que os tipos corretos sejam usados, prevenindo erros.
3. **Flexibilidade:** Facilitam a criação de funções e classes que trabalham com diversos tipos.

### Exemplos Simples

#### Função Genérica

```ts
// Função genérica que retorna o valor passado
function identidade<T>(valor: T): T {
  return valor;
}

// Uso da função genérica
let numero = identidade<number>(10); // número
let texto = identidade<string>("Olá"); // string
```

#### Classe Genérica

```ts
// Classe genérica que armazena um valor
class Caixa<T> {
  private conteudo: T;

  constructor(conteudo: T) {
    this.conteudo = conteudo;
  }

  public obterConteudo(): T {
    return this.conteudo;
  }
}

// Uso da classe genérica
let caixaDeNumero = new Caixa<number>(100);
let caixaDeTexto = new Caixa<string>("Texto na caixa");
```

### Quando Usar Generics

- **Funções e Métodos:** Para trabalhar com diferentes tipos de dados de forma segura.
- **Classes e Interfaces:** Para criar estruturas que podem armazenar qualquer tipo de dado.

Generics são fundamentais para escrever código TypeScript flexível e reutilizável.
