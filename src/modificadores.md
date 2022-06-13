Caso você queira deixar uma propriedade de um objeto como opcional, podemos adicionar o modificador opcional após o nome da propriedade, indicado pelo simbolo de interrogação.

Também podemos marcar uma propriedade como readonly, para evitar que ela seja alterada posteriormente.

```typescript
interface User {
  readonly id: number;
  name: string;
  email?: string;
}

const user: User = {
  id: 1,
  name: "Alan",
};

user.id = 2;
```
