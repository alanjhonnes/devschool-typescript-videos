# Typescript - Introdução

O Typescript é uma linguagem de programação com base no Javascript para adicionar sintaxe de tipos ao JavaScript.

O Typescript é composto pela linguagem em si, e por um compilador, responsável por validar o código o transforma-lo em Javascript.

O sistema de tipagem do Typescript diversas funcionalidades no editor de código, como auto-complete, validação do código e navegação entre tipos.

Veja que aqui no Visual Studio Code, o próprio editor de código está fazendo uso do Typescript para reconhecer os tipos das variáveis e o auto-complete listando as propriedades e métodos disponíveis de cada uma. Isso é um recurso do Typescript chamado inferência de tipo, que permite o Typescript reconhecer qual o tipo de determinada variável de acordo com os valores que são atribuidos a ela, diminuindo a quantidade de código que precisamos escrever para fazer uso do sistema de tipos.

```javascript
let str = "abc";

let numbr = 10;

let bool = true;

function soma(x, y) {
  return x + y;
}
```

Percebam que na função, o Typescript não consegue inferir automaticamente o tipo dos argumentos nem o retorno da função, por isso é necessário utilizar a sintaxe de tipos de forma explicita para declaração de funções.

Vamos agora alterar a extensão do arquivo para .ts. Agora vamos adicionar os tipos de forma explicita nas variáveis e argumentos da função, fazemos isso colocando dois pontos após a variável ou argumento, seguido pelo nome do tipo.

```typescript
let str: string = "abc";

let numbr: number = 10;

let bool: boolean = true;

function soma(x: number, y: number) {
  return x + y;
}
```

Com os argumentos da função soma definidos, o tipo de retorno da função é automaticamente inferido pelo Typescript, mas podemos tipar de forma explicita o retorno para garantir que o tipo não vai mudar caso alteremos a implementação da função.

```typescript
function soma(x: number, y: number): number {
  return x + y;
}
```

Utilizando ctrl+click em algum método ou propriedade nativa da linguagem, automaticamente somos levados para a declaração em arquivos com a extensão d.ts, que são arquivos do Typescript específicos para tipagem, e esses arquivos servem para definir toda a documentação e tipagem básica da linguagem, vale a pena dar uma conferida neles para verem diversos exemplos de tipos.

////
O compilador é altamente configurável, podendo deixar a validação mais restrita ou mais flexível, facilitando a migração de código Javascript para Typescript em fases.

```

```
