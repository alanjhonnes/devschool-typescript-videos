É sempre recomendável criar tipos para representar os objetos da sua aplicação.

Aqui temos um objeto que possui as propriedades name, age, e isProfessor, e o Typescript consegue inferir corretamente o tipo do objeto por inferência, mas é ideal sempre trabalharmos com tipos explicitos quando estamos criando objetos literais.

```typescript
const person = {
  name: "Alan",
  age: 32,
  isProfessor: true,
};
```

Para criarmos esse tipo, podemos utilizar a palavra chave `interface` e dentro das chaves colocamos a tipagem de cada propriedade.

```typescript
interface Pessoa {
  name: string;
  age: number;
  isProfessor: boolean;
}

const person: Pessoa = {
  name: "Alan",
  age: 32,
  isProfessor: true,
};
```

Também é possível utilizarmos a palavra chave `type` ao invés de interface nesse caso, mas ela é um pouco menos flexível pois não permite outros tipos com o mesmo nome de adicionar novas propriedades a ela, por exemplo, no caso de uma biblioteca, então use interface sempre que possível.

```typescript
type Pessoa = {
  name: string;
  age: number;
  isProfessor: boolean;
};
```
