Além dos tipos primitivos, o TypeScript possui suporte a referenciar strings, number e booleans específicos, e chamamos esses tipos de literais.

Geralmente encontramos esses tipos literais quando declaramos valores primitivos utilizando const, pois o Typescript sabe que esses valores nunca vão ser alterados, então ele atribui o tipo literal ao invés do tipo primitivo.

Podemos considerar que o tipo boolean é a união de todos os tipos literais possíveis de boolean, e podemos exemplificar isso fazendo a união do tipo literal true com o tipo false, resultando no tipo equivalente ao boolean.

Os tipos literais não são muito úteis sozinhos, mas são muito úteis quando utilizados em uniões de tipo, para restringir os valores possíveis similar a um enum, e também habilitar a função de auto-complete, como aqui no caso da função checkConfirmation.

Objetos literais por padrão não recebem valores literais, mas podemos forçar isso utilizando as palavras chave `as const` após a declaração do objeto, tornando todas as propriedades do objeto em readonly e utilizando os tipos literais ao invés dos primitivos.

```typescript
const a = "a";

const positivo = true;

const negativo = false;

type bool = true | false;

const um = 1;

function checkConfirmation(input: "y" | "n"): boolean {
  return input === "y";
}

const alan = {
  nome: "Alan",
  professor: true,
};
```
