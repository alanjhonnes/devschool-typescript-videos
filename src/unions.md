O Typescript possui suporte a uniões de tipos, gerando um tipo que engloba dois ou mais tipos.

Podemos representar a união de tipos com uma pipe entre os tipos a serem unidos.

```typescript
export type StringOrBoolean = string | boolean;

let strOrBool: StringOrBoolean;
```

```typescript
export type StringOrBoolean = string | boolean;
```
