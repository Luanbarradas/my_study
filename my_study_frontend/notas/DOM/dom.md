# Resumo sobre o DOM (Documento Object Model)

1. **O que é o DOM (Documento Object Model)**:
   O DOM é uma interface de programação para documentos HTML, XML e SVG. Ele representa a estrutura do documento como um conjunto de objetos, permitindo que os programas manipulem a estrutura, estilo e conteúdo do documento de forma dinâmica.

2. **Tag Script**:
   A tag `<script>` é usada para incorporar ou referenciar código JavaScript em um documento HTML. Pode ser usada para incluir scripts diretamente na página ou para vincular arquivos externos contendo código JavaScript.

3. **Ordem de execução**:
   Os scripts contidos na tag `<script>` são executados na ordem em que aparecem no documento HTML, a menos que a execução seja interrompida ou retardada por eventos assíncronos como carregamento de recursos externos.

4. **Selecionando elementos**:
   Para selecionar elementos do DOM, os desenvolvedores usam métodos como `getElementById`, `getElementsByClassName`, `getElementsByTagName`, `querySelector` e `querySelectorAll`.

5. **Manipulando propriedades**:
   Uma vez que um elemento é selecionado, suas propriedades podem ser manipuladas usando JavaScript. Por exemplo, pode-se alterar o conteúdo de um elemento (propriedade `innerHTML`), modificar seu estilo (propriedade `style`), ou adicionar classes (propriedade `classList`), entre outras ações.

6. **Ver propriedade do elemento**:
   Para visualizar as propriedades de um elemento no console do navegador, pode-se usar `console.log()` para exibir informações sobre o elemento.

7. **Evento de clique**:
   Os eventos são ações que ocorrem no documento, como cliques do mouse, pressionamentos de tecla, carregamento da página, etc. O evento de clique (`click`) é acionado quando um elemento é clicado pelo usuário. É possível atribuir funções a serem executadas quando esse evento ocorre, permitindo a interatividade dinâmica com a página web.

# Manipulação de Estilos

## Alterando o Estilo de um Elemento

Para alterar o estilo de um elemento HTML usando JavaScript, você pode acessar a propriedade `style` do elemento e definir os estilos desejados. Por exemplo:

```javascript
document.getElementById("meuElemento").style.color = "red";
```

## Exemplos Práticos de Manipulação de Estilos

- Alterar cores, tamanhos e fontes de texto dinamicamente.
- Mostrar ou ocultar elementos definindo a propriedade `display`.
- Animar elementos modificando propriedades como `opacity` e `transform`.

# Eventos e Manipuladores de Eventos

## Conceitos dos Eventos e Suas Aplicações

Eventos são ações que ocorrem em um documento HTML, como cliques do mouse, pressionamentos de tecla ou carregamento da página. Os eventos permitem que você crie interatividade dinâmica em uma página web.

## Criação e Implementação de Manipuladores de Eventos

Você pode adicionar manipuladores de eventos a elementos HTML usando JavaScript. Por exemplo, para adicionar um manipulador de evento de clique a um botão:

```javascript
document.getElementById("meuBotao").addEventListener("click", minhaFuncao);
function minhaFuncao() {
  // Código a ser executado quando o botão for clicado
}
```

# Trabalhando com Atributos de HTML

## Como Recuperar Atributos de Elementos HTML

Você pode acessar os atributos de elementos HTML usando JavaScript. Por exemplo, para obter o valor do atributo `href` de um link:

```javascript
var link = document.getElementById("meuLink");
var href = link.getAttribute("href");
```

## Definir, Modificar e Remover Atributos de Elementos HTML

Além de recuperar atributos, você pode definir, modificar e remover atributos de elementos HTML. Por exemplo:

```javascript
// Definir um atributo
elemento.setAttribute("atributo", "valor");

// Modificar um atributo
elemento.setAttribute("atributo", "novoValor");

// Remover um atributo
elemento.removeAttribute("atributo");
```

## Selecionando Elementos

1. `getElementById`

   Procura o elemento pelo #id

   - Ex:

   ```javascript
   document.getElementById("meu-id-elemento");
   ```

2. `getElementsByClassName`

   Retorna um array de classes.

   - Ex:

   ```javascript
   document.getElementsByClassName("meus-elementos");
   ```

3. `getElementsByTagName`

   Acessar o elemento através de uma tag específica (tbm traz um array).

   - Ex:

   ```javascript
   document.getElementsByTagName("div");
   ```

4. `querySelector`

   Retorna um elemento com o seletor escolhido(id, class, tag...)

   - Ex:

   ```javascript
   document.querySelector("elemento");
   ```

5. `querySelectorAll`

   Retorna um array do seletor escolhido.

   - Ex:

   ```javascript
   document.querySelectorAll("meus-elementos");
   ```
