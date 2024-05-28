### Eventos da DOM

#### Conceitos Fundamentais

1. **O que são eventos na DOM?**

   - **Eventos** são ações ou ocorrências que acontecem no navegador e podem ser capturadas e tratadas pelo JavaScript. Eles são essenciais para criar interatividade nas páginas web.

2. **Como os eventos funcionam na DOM?**
   - A DOM (Document Object Model) representa a estrutura do documento HTML como uma árvore de objetos. Quando algo acontece no navegador, como um clique ou uma tecla pressionada, um evento é disparado. Você pode capturar esses eventos e executar funções específicas usando manipuladores de eventos.

#### Principais Tipos de Eventos

1. **Clique (`click`)**

   - Disparado quando um elemento é clicado.

   ```javascript
   document.getElementById("myButton").addEventListener("click", function () {
     alert("Button clicked!");
   });
   ```

2. **Mudança (`change`)**

   - Disparado quando o valor de um elemento de formulário é alterado.

   ```javascript
   document.getElementById("myInput").addEventListener("change", function () {
     console.log("Input value changed to:", this.value);
   });
   ```

3. **Mouseover (`mouseover`)**

   - Disparado quando o ponteiro do mouse passa sobre um elemento.

   ```javascript
   document
     .getElementById("myElement")
     .addEventListener("mouseover", function () {
       this.style.backgroundColor = "yellow";
     });
   ```

4. **Tecla Pressionada (`keypress`)**

   - Disparado quando uma tecla é pressionada.

   ```javascript
   document.addEventListener("keypress", function (event) {
     console.log("Key pressed:", event.key);
   });
   ```

5. **Tecla para Baixo (`keydown`)**

   - Disparado quando uma tecla é pressionada para baixo.

   ```javascript
   document.addEventListener("keydown", function (event) {
     console.log("Key down:", event.key);
   });
   ```

6. **Tecla para Cima (`keyup`)**

   - Disparado quando uma tecla é liberada.

   ```javascript
   document.addEventListener("keyup", function (event) {
     console.log("Key up:", event.key);
   });
   ```

7. **Foco (`focus`)**
   - Disparado quando um elemento ganha foco.
   ```javascript
   document.getElementById("myInput").addEventListener("focus", function () {
     console.log("Input focused");
   });
   ```

### Happy Eyes e Protocolo HTTP

#### Happy Eyes

- **Happy Eyes** é uma técnica ou conceito que enfatiza a divisão de conteúdo e tarefas em partes menores e mais gerenciáveis, para facilitar a aprendizagem e a compreensão. Isso é especialmente útil em cursos complexos como o de desenvolvimento full stack.

#### Protocolo HTTP

1. **O que é HTTP?**

   - HTTP (HyperText Transfer Protocol) é o protocolo usado para transmitir dados na web. Ele define como as mensagens são formatadas e transmitidas, e como os servidores e navegadores devem responder a várias solicitações.

2. **Estrutura de uma Requisição HTTP**
   - **Métodos HTTP**: GET, POST, PUT, DELETE, etc.
   - **URL**: O endereço do recurso.
   - **Cabeçalhos**: Informações adicionais enviadas com a requisição.
   - **Corpo**: Dados enviados com a requisição, principalmente em métodos POST e PUT.

### Formato JSON

1. **O que é JSON?**

   - JSON (JavaScript Object Notation) é um formato leve de intercâmbio de dados, fácil para humanos lerem e escreverem, e fácil para máquinas analisarem e gerarem.

   ```json
   {
     "name": "John",
     "age": 30,
     "city": "New York"
   }
   ```

2. **Uso do JSON**
   - Amplamente usado em APIs para enviar dados entre servidor e cliente.
   - Facilita a leitura e manipulação de dados em JavaScript.

### Cloody

- **Cloody** parece ser um conceito ou ferramenta específica. Preciso de mais contexto para fornecer uma explicação detalhada.

### Sincronismo e JSON Placeholder

1. **Sincronismo**

   - Refere-se à forma como operações são executadas na programação. Em JavaScript, você pode ter operações síncronas (executadas uma após a outra) e assíncronas (executadas independentemente, permitindo outras operações continuarem).

2. **Utilização do JSON Placeholder**
   - JSON Placeholder é um serviço de API falso para testes e prototipagem rápida. Você pode usar endpoints para simular operações CRUD.
   ```javascript
   fetch("https://jsonplaceholder.typicode.com/posts")
     .then((response) => response.json())
     .then((data) => console.log(data));
   ```

### APIs, Bibliotecas, NPM, CDNs, Axios, JSON Server, Local Storage, Autenticação e Token JWT

1. **APIs (Application Programming Interfaces)**

   - Conjunto de regras que permitem a comunicação entre diferentes sistemas. APIs permitem que diferentes software se comuniquem entre si.

2. **Bibliotecas**

   - Conjunto de funcionalidades reutilizáveis que facilitam o desenvolvimento, como jQuery, Lodash, etc.

3. **NPM (Node Package Manager)**

   - Gerenciador de pacotes para o Node.js, usado para instalar e gerenciar dependências de projetos JavaScript.

4. **CDNs (Content Delivery Networks)**

   - Redes de servidores distribuídos que entregam conteúdo da web de forma eficiente, reduzindo o tempo de carregamento.

5. **Axios**

   - Biblioteca JavaScript para fazer requisições HTTP, simplificando as operações de GET, POST, etc.

   ```javascript
   axios
     .get("https://jsonplaceholder.typicode.com/posts")
     .then((response) => console.log(response.data));
   ```

6. **JSON Server**

   - Ferramenta para criar um servidor REST simples e rápido para prototipagem e testes.

   ```bash
   npx json-server --watch db.json
   ```

7. **Local Storage**

   - Armazenamento local no navegador que permite salvar dados persistentes do lado do cliente.

   ```javascript
   localStorage.setItem("name", "John Doe");
   console.log(localStorage.getItem("name"));
   ```

8. **Autenticação e Token JWT (JSON Web Token)**
   - **Autenticação**: Processo de verificar a identidade de um usuário.
   - **JWT**: Token seguro para transmitir informações entre partes, usado frequentemente para autenticação.
   ```javascript
   const token = jwt.sign({ userId: 123 }, "secretKey", { expiresIn: "1h" });
   ```

### Sass

1. **O que é Sass?**

   - Sass (Syntactically Awesome Style Sheets) é um pré-processador CSS que adiciona funcionalidades como variáveis, aninhamento, mixins, herança, entre outros.

2. **Importância e Uso do Sass**

   - Facilita a escrita e manutenção de CSS, permitindo código mais limpo e organizado.

3. **Funcionalidades do Sass**

   - **Variáveis**: Permitem armazenar valores reutilizáveis.
     ```scss
     $primary-color: #333;
     body {
       color: $primary-color;
     }
     ```
   - **Mixins**: Permitem reutilizar blocos de código.
     ```scss
     @mixin border-radius($radius) {
       -webkit-border-radius: $radius;
       -moz-border-radius: $radius;
       border-radius: $radius;
     }
     .box {
       @include border-radius(10px);
     }
     ```
   - **Aninhamento**: Facilita a leitura do CSS.
     ```scss
     nav {
       ul {
         margin: 0;
         padding: 0;
         list-style: none;
       }
     }
     ```

4. **Sass META e Documentação**
   - É importante consultar a documentação oficial do Sass para exemplos mais avançados e melhores práticas.
