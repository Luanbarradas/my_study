### Valores da propriedade Position

#### static

- valor padrão
- O elemento é posicionado de acordo com o fluxo normal do documento
- O top, right, bottom, left, e z-index propriedades não têm efeito

#### relative

- O elemento é posicionado de acordo com o fluxo normal do documento
- é deslocado em relação a si mesmo com base nos valores de
  top, right, bottom, e left.
- O deslocamento não afeta a posição de nenhum outro elemento

#### absolute

- O elemento é removido do fluxo normal de documentos
- nenhum espaço é criado para o elemento no layout da página
- Ele é posicionado em relação ao seu ancestral posicionado mais próximo,
  se houver; caso contrário, ele é colocado em relação ao inicial
- Sua posição final é determinada pelos valores de top, right, bottom, e left.

#### fixed

- O elemento é removido do fluxo normal de documentos
- nenhum espaço é criado para o elemento no layout da página
- Ele está posicionado em relação ao container inicial block

#### sticky

- O elemento é posicionado de acordo com o fluxo normal do documento
- deslocado em relação ao ancestral de rolagem mais próximo e container block
- Sua posição final é determinada pelos valores de de top, right, bottom e left.
- O deslocamento não afeta a posição de nenhum outro elemento.
