## Introdução ao React

### O que é o react?

- Uma biblioteca javascript desenvolvida pelo Facebook para criar intercafes de usuário dinâmicas.

- Permite a construção de componentes reutilizáveis que podem ser combinados para criar aplicações complexas.

#### Problemas que resolve:

- Interação com a DOM: Abstrai a manipulação direta da DOM, tornando-a mais eficiente e simples.

- Reutilização de código: Componentes podem ser reutilizados em diferentes partes do aplicativo, promovendo DRY (Don't Repeat Yourself).

- Códigos Reativos: Facilita a criação de interfaces que reagem automaticamente às mudanças de estado.

#### Virtual DOM:

- Mantém uma representação em memória da DOM real e sincroniza as mudanças de forma eficiente.

- Esse processo de atualização eficiente é chamado de "reconciliação".

#### HTML vs JSX

tags que são abertas no `html` devem ser fechadas no `jsx`.
ex:
`<img src = "">` -> `html`
`<img src = ""/>` -> `jsx`

Class e For possuem outro nome por já serem palavras reservadas do `javascript`

class = className
for = htmlFor

Estilos inline do css tem nomes case sensitive e devem estar entre chaves.

`<div style = {{backgroundColor: 'red'}}></div>`

### Fundamentos do React

#### Componentes:

Os blocos de construção do React, responsáveis por isolar funcionalidades e permitir a reutilização de código.

Existem dois tipos principais de componentes: **funcionais** (escritos como funções) e **de classe** (escritos como classes ES6).

ex de componentes funcionais:

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

ex de componentes de classe:

```js
function Welcome extends React.Component {
 render(){
   return <h1>Hello, {this.props.name}</h1>
 }
}
```

#### Props:

- Propriedades passadas para componentes que permitem a comunicação e o compartilhamento de dados.

- As props são imutáveis, ou seja, não podem ser alteradas pelo componente que as recebe.

ex: `<Welcome name="Sara" />` passa a prop `name` com o valor "Sara".

#### Prop Key:

- Utilizada ao renderizar listas para identificar de forma única cada elemento.

  - Ajuda o React a manter a eficiência ao atualizar listas.
  - Exemplo:
    ```javascript
    const items = ["Item1", "Item2", "Item3"];
    const listItems = items.map((item, index) => <li key={index}>{item}</li>);
    ```

- **Renderização Condicional:**
  - Renderiza componentes ou elementos com base em condições específicas.
  - Exemplo:
    ```javascript
    const isLoggedIn = true;
    return isLoggedIn ? <LogoutButton /> : <LoginButton />;
    ```

### Ferramentas

- **Vite:**
  - Uma ferramenta que facilita a configuração inicial de projetos React, permitindo começar rapidamente sem configurar tudo do zero.
  - Inclui uma estrutura de pastas e as bibliotecas necessárias já instaladas.
  - Comando para criar um novo projeto: `npm create vite@latest my-app -- --template react-ts`.
