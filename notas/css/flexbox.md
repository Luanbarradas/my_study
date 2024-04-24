# Flexbox

### justify-content:

**flex-start**: Itens se alinham à esquerda do container.
**flex-end**: Itens se alinham à direita do container.
**center**: Itens se alinham no centro do container.
**space-between**: Itens se alinham com distância igual entre eles.
**space-around**: Itens se alinham com distância igual em torno deles.

### align-items:

**flex-start**: Itens se alinham na parte de cima do container.
**flex-end**: Itens se alinham na parte de baixo do container.
**center**: Itens se alinham no centro vertical do container.
**baseline**: Items se alinham na linha da base do container.
**stretch**: Itens se esticam para preencher o container.

### align-self:

Podemos aplicar para itens individuais. Esta propriedade aceita os mesmos valores que align-items e seus valores são usados para o item específico.

### flex-direction:

**row**: Itens são posicionados na mesma direção do texto.
**row-reverse**: Itens são posicionados na direção oposta à do texto.
**column**: Itens são posicionados de cima para baixo.
**column-reverse**: Itens são posicionados de baixo para cima.

### flex-wrap:

**nowrap**: Todos os itens são apertados em uma única linha.
**wrap**: Itens se separam em linhas adicionais.
**wrap-reverse**: Itens se separam em linhas adicionais em reverso.

### flex-flow:

Uma propriedade criada para combinar o flex-direction e flex-wrap, já que ambas são usadas juntas com frequência.
O valor das duas propriedades são separados por um espaço.

_ex_: flex-flow: row wrap;

### align-content:

**flex-start**: Linhas são agrupadas no topo do container.
**flex-end**: Linhas são agrupadas no fundo do container.
**center**:Linhas são agrupadas no centro vertical do container.
**space-between**: Linhas são posicionadas com espaço igual entre elas.
**space-around**: Linhas são posicionadas com espaço igual em torno delas.
**stretch**: Linhas se esticam para preencher o container.

### Order:

Permite alterar a ordem em que os itens flexíveis são exibidos dentro do contêiner, independentemente de sua ordem no código HTML.
