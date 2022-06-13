Assinaturas de funções também podem ser tipadas.

Por exemplo, aqui temos 4 funções que fazem operações matemáticas e sempre recebem dois argumentos do tipo number. Podemos então criar um tipo para representar essa assinatura de função.

```typescript
const sum = (x: number, y: number) => x + y;

const multiply = (x: number, y: number) => x * y;

const division = (x: number, y: number) => x / y;

const subtraction = (x: number, y: number) => x - y;
```

```typescript
type ArithmeticFunction = (x: number, y: number) => number;

const sum: ArithmeticFunction = (x, y) => x + y;

const multiply: ArithmeticFunction = (x, y) => x * y;

const division: ArithmeticFunction = (x, y) => x / y;

const subtraction: ArithmeticFunction = (x, y) => x - y;
```
