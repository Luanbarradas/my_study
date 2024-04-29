# Informações sobre Tags de Formulário HTML

As tags de formulário são usadas para coletar informações do usuário.

## Tags de Formulário

- `<form>`: Define um formulário.
- `<input>`: Define um controle de entrada.
- `<button>`: Define um botão.
- `<select>`: Define uma lista suspensa (dropdown).
- `<option>`: Define uma opção em uma lista suspensa.
- `<label>`: Define um rótulo para um controle de entrada.
- `<textarea>`: Define uma área de texto multilinha.
- `<fieldset>`: Agrupa controles de formulário logicamente.
- `<legend>`: Define uma legenda para um elemento `<fieldset>`.
- `<optgroup>`: Define um grupo de opções em uma lista suspensa.
- `<input type="checkbox">`: Define uma caixa de seleção (checkbox).
- `<input type="radio">`: Define um botão de opção (radio).
- `<input type="submit">`: Define um botão de envio de formulário.
- `<input type="reset">`: Define um botão de reset do formulário.
- `<input type="file">`: Define um controle de upload de arquivo.
- `<input type="password">`: Define um campo de senha.
- `<input type="number">`: Define um campo numérico.
- `<input type="date">`: Define um campo de data.
- `<input type="email">`: Define um campo de email.
- `<input type="tel">`: Define um campo de telefone.
- `<input type="url">`: Define um campo de URL.
- `<input type="color">`: Define um seletor de cores.
- `<input type="range">`: Define um controle de faixa (slider).
- `<input type="search">`: Define um campo de pesquisa.
- `<input type="time">`: Define um campo de hora.

## Exemplo de Uso de Formulário

```html
<form action="/submit" method="post">
  <label for="username">Nome de Usuário:</label>
  <input type="text" id="username" name="username" required /><br />

  <label for="password">Senha:</label>
  <input type="password" id="password" name="password" required /><br />

  <input type="submit" value="Enviar" />
  <input type="reset" value="Limpar" />
</form>
```
