# Introdução

## O que é o TypeScript?

É um **superset** do JavaScript criado pela Microsoft (alguns chamam de linguagem apesar de não ser uma). O TS adiciona features como **tipagem estática** ao JavaScript e **necessita ser transpilado** para ser utilizado no browser ou até mesmo no nodejs.

O typescript deve ser usado para evitar erros de mudanças de tipos em variáveis e obter retornos inesperados (o TS aponta erros durante o desenvolvimento da aplicação, o que traz mais segurança ao código).

_Ex de erros de tipagem dinâmica:_

```
function sum(a, b) {
    return a + b;
}

sum(10, 10); // 20
sum('2', '2'); // 22 👈 está retornando a concatenação de uma string!

```

#### O que é o PropType e por que não usá-lo ao invés do Typescript?

PropTypes é uma biblioteca que só faz a checagem de tipos em props de componentes React.js. O TS é mais poderoso por ser um _superset_ do JS.

Outras diferenças importantes entre PropType e Typescript:

1. O momento em que a checagem de tipos acontece;
2. A severidade com que os erros são tratados;
3. A forma como declaramos os estruturas/esquemas com os tipos;

O PropTypes faz a checagem de tipos em tempo de execução (quando a aplicação está rodando, sendo executada). São tratados como alertas, tendo uma checagem passíva que pode ser ignorada pelo desenvolvedor.

O TypeScript a checagem de tipos acontece em tempo de compilação (quando o código-fonte em TypeScript é compilado para JavaScript) e é possível configurar no `tsconfig.json` o comportamento em caso de erros, se mais permissivo ou menos dependendo do projeto.

### Transpilar:

Transformar o código de `typescript.ts` para `javascript.js`

**Todo código TS é transpilado para JS.**

O TS serve para desenvolver mas para ser executado no servidor deve ser transpilado para JS.

# Instalação do Typescript.

`npm install -g typescript`

- O TS será instalado _globalmente_ no PC (Dessa forma não será preciso instalar no projeto).

`npm install typescript`

- O TS será instalado _localmente_ (Instalação feita no projeto).

_Obs. Instalando o TS globalmente haverá a possibilidade de erro de versão, a versão instalada localmente e globalmente podem ser distintas. Portanto, intalar o TS localmente faz com que cada colaborador possua a mesma versão evitando inconsistências na aplicação._

_Obs 2. Dá para instalar como dependência de desenvolvimento_

- Assim como o NodeJs possue CLI (Command Line Interface) o `npm` o Typescript possue o `tsc`.

o tsc é usado quando o TS é instalado globalmente, caso contrário pode-se usar o `npx tsc`

#### Utilização do Typescript em projetos.

1. `npm install typescript`

2. `npx tsc --init`

Quando inicializado cria-se uma pasta chamada `tsconfig.json` (parece com a package.json do node só q do TS).

`index.js` para o javascript - `index.ts` para o typescript.

**Para transpilar o código** deve ser usar "npx ts 'nomdeDoArquivo.ts'"
ex: `npx ts index.ts`

**Para rodar um código TS sem transpilar**: `npm install -D ts-node`

#### Ordem de instalação e configuração do projeto com Typescript:

1. `npm init -y`
2. `npm install -D typescript`
3. `npm install -D ts-node`
4. `npx tsc --init`
