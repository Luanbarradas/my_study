### Etapas importantes para inicialização e configuração do projeto

#### Ordem de instalação e configuração do projeto com Typescript:

1. `npm init -y`
2. `npm install -D typescript ts-node nodemon`
3. `npm install express pg knex`
4. `npx tsc --init`

#### Configuração do projeto

1. Criar pasta `src` e o `index.ts` para o projeto.

2. configurar o `tsconfig.json`:

```ts
{
  "compilerOptions": {
    "target": "ES2018",
    "lib": ["ES2018"],
    "module": "commonjs",
    "moduleResolution": "node",
    "typeRoots": ["./src/@types"],
    "resolveJsonModule": true,
    "allowJs": true,
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitAny": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}

```

3. Confiurar o script no `package.json`:

```ts
 "scripts": {
    "dev": "nodemon --exec ts-node ./src/index.ts"
  },

```

#### Biblioteca de tipos do Express

O express é tipo como uma biblioteca implicitamente "any" o que dará erro com o "strict" e "noImplicitAny". Para que não dê mais erro é necessário instalar a biblioteca de tipos do express:

`npm install -D @types/express`

#### Configuração do Knex e Dotenv

Criar o arquivo de conexão `conexao.ts` e importar e configurar o knex:

```ts
import conexao from "knex";

export const knex = conexao({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, // se der erro por entender que não é um numero coloque: Number(process.env.DB_PORT)
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
  },
});
```

Criar um `.env` para não ter suas informações expostas (não se esqueça de instalar o "dotenv").

```ts
// Configure de acordo com as informações do seu proprio projeto

DB_HOST = "localhost";
DB_PORT = 5432;
DB_USER = "postgres";
DB_PASS = "postgres";
DB_DATABASE = "database_projeto";
```
