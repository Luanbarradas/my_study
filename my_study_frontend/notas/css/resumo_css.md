# Resumo de CSS.

Comentários em CSS `/* */`

## Sintaxe

- **Sintaxe:** `seletor {propriedade: valor;}`

## CSS Externo

```html
<link rel="stylesheet" type="text/css" href="arquivo.css" />
```

## CSS Interno

```html
<style type="text/css">
  seletor {
    propriedade: valor;
  }
</style>
```

## CSS em Linha

```html
<tag style="propriedade: valor;"></tag>
```

<hr>

## Uso Geral

- **class:** Termo precedido por um ponto `.`
- **ID:** Termo precedido por um `#`
- **div:** Elemento para dividir o layout
- **span:** Formatação em linha
- **color:** Cor do texto
- **cursor:** Muda o cursor do mouse
- **display:** `block`, `inline`, `list-item`, `none`
- **overflow:** Quando o conteúdo transborda do elemento
  - Opções: `visible`, `hidden`, `scroll`, `auto`
- **visibility:** Opções: `visible`, `hidden`

<hr>

## Modelos de Caixa

- **height**: Define a altura do elemento.
- **width**: Define a largura do elemento.
- **border**: Define a borda da caixa do elemento.
  - **border-bottom**: Define a borda inferior da caixa.
  - **border-left**: Define a borda esquerda da caixa.
  - **border-right**: Define a borda direita da caixa.
  - **border-top**: Define a borda superior da caixa.
- **margin**: Define o espaçamento externo ao redor do elemento.
  - **margin-top**: Espaçamento externo no topo do elemento.
  - **margin-right**: Espaçamento externo à direita do elemento.
  - **margin-bottom**: Espaçamento externo na parte inferior do elemento.
  - **margin-left**: Espaçamento externo à esquerda do elemento.
- **padding**: Define o espaçamento interno entre o conteúdo e a borda do elemento.
  - **padding-top**: Espaçamento interno no topo do elemento.
  - **padding-right**: Espaçamento interno à direita do elemento.
  - **padding-bottom**: Espaçamento interno na parte inferior do elemento.
  - **padding-left**: Espaçamento interno à esquerda do elemento.
- **border-width**: Define a largura da borda.
- **border-style**: Define o estilo da borda.

  - `solid`: Borda sólida.
  - `dashed`: Borda tracejada.
  - `dotted`: Borda pontilhada.
  - `double`: Borda dupla.
  - `groove`: Borda entalhada.
  - `ridge`: Borda em relevo.
  - `inset`: Borda entalhada.
  - `outset`: Borda em relevo.
  - `none`: Sem borda.
  - `hidden`: Sem borda, ocupando espaço.

  ## Para Caixas

- **background**: Define o fundo da caixa.
- **font**: Define a fonte do texto dentro da caixa.
- **list-style**: Define o estilo da lista dentro da caixa.

## List

- **list**: Define uma lista.
- **list-style**: Muda o tipo de bullet dos itens de lista (`disc`, `circle`, `square`, `decimal`, `lower-roman`, `upper-roman`, `lower-alpha`, `upper-alpha`, `none`).
- **list-style-position**: Muda a posição do bullet (`inside`, `outside`).
- **list-style-image**: Define uma imagem como bullet.

## Backgorund

- **background-color**: Muda a cor do background.
- **background-image**: Define uma imagem de background.
- **background-repeat**: Define como a imagem de background é repetida.
  - Opções: `repeat`, `no-repeat`, `repeat-x`, `repeat-y`.
- **background-attachment**: Define se o background rola com a página ou fica fixo.
  - Opções: `scroll`, `fixed`.
- **background-position**: Define a posição da imagem de background.
  - Opções: `(x y)`, `top`, `center`, `bottom`, `left`, `right`.

## Para Fontes

- **font-style:** Opções: `italic`, `normal`
- **font-variant:** Opções: `normal`, `small-caps`
- **font-weight:** Opções: `bold`, `normal`, `lighter`, `bolder`, integer `[100-900]`
- **font-size:** Tamanho da fonte
  - Opções: `normal`, tamanho em pixels, em, pt, etc.
- **font-family:** Especifica a família da fonte

## Para Caixas de Texto

- **letter-spacing:** Espaçamento entre as letras
- **line-height:** Altura da entrelinha
- **text-align:** Alinhamento horizontal do texto
- **text-decoration:** Opções: `blink`, `line-through`, `none`, `overline`, `underline`
- **text-indent:** Identação do texto
- **text-transform:** Opções: `capitalize`, `lowercase`, `uppercase`
- **vertical-align:** Alinhamento vertical
- **word-spacing:** Espaço entre as palavras

## Propriedades Herdadas

- **azimuth**
- **border-collapse**
- **border-spacing**
- **caption-side**
- **color**
- **cursor**
- **direction**
- **empty-cells**
- **font**
- **letter-spacing**
- **line-height**
- **list-style**
- **page**
- **quotes**
- **speak**
- **text-align**
- **text-indent**
- **text-transform**
- **word-spacing**
- **white-space**

## Seletores

- `*`: Define propriedade para TODOS os elementos.
- `<tag>`: Define para todas as tags especificadas.
- `tag *`: TUDO dentro da tag receberá as características.
- `tag tag`: Elemento dentro de elemento (Exemplo: `div span`).
- `tag, tag`: Agrupa vários elementos para a mesma característica (Exemplo: `div, p, h1, h2, h3`).
- `tag > tag`: Seleciona elemento que é filho direto de outro (Exemplo: `div > span`).
- `tag + tag`: Seleciona todo elemento que é precedido por outro (Exemplo: `div + p`).
- `.nome`: Todos elementos com a classe determinada.
- `#nome`: Todos elementos com a identificação determinada.
- `tag#nome`: Especifica elemento com classe ou identificação determinada.
- `tag.nome`: Seleciona tag com determinado atributo.
- `tag[atributo]`: Seleciona tag com atributo específico.
- `tag[atributo="valor"]`: Seleciona tag com atributo com um valor específico.
- `tag[atributo~="valor"]`: Especifica o valor de uma tag que tenha um atributo com diversos valores separados com espaços.

## Pseudo-Selectors

- `:hover`: Seleciona um elemento quando o cursor do mouse está sobre ele.
- `:active`: Seleciona um elemento quando ele está sendo clicado.
- `:focus`: Seleciona um elemento quando ele está em foco.
- `:link`: Seleciona um link não visitado.
- `:visited`: Seleciona um link já visitado.
- `:first-line`: Seleciona a primeira linha de um elemento.
- `:first-letter`: Seleciona a primeira letra de um elemento.

## Position

- `clear`: O elemento ignora o float de outros elementos.
  - Opções: `both`, `left`, `right`, `none`.
- `float`: O elemento flutua para a esquerda ou direita.
  - Opções: `left`, `right`, `none`.
- `left`: Desloca o elemento pela esquerda.
  - Opções: `auto`, valores numéricos (por exemplo, `10px`, `20%`).
- `top`: Desloca o elemento pelo topo.
  - Opções: `auto`, valores numéricos (por exemplo, `10px`, `20%`).
- `position`: Define o método de posicionamento de um elemento.
  - Opções: `static`, `relative`, `absolute`.
- `z-index`: Muda a ordem de empilhamento dos elementos.
  - Opções: `auto`, números inteiros (números maiores ficam por cima).

## Unidades

### Numerais

- `%`: Porcentagem.
- `em`: Relativo ao tamanho da fonte do elemento pai.
- `pt`: Pontos (1/72 polegadas).
- `px`: Pixels.

### Keywords

- `bolder`: Define uma fonte mais negrito do que o pai.
- `lighter`: Define uma fonte mais fina do que o pai.
- `larger`: Define uma fonte maior do que o pai.
- `normal`: Define uma fonte com peso ou tamanho padrão.

## Media Types

- `all`
- `braille`
- `embossed`
- `handheld`
- `print`
- `projection`
- `screen`
- `speech`
- `tty`
- `tv`
