Classes são basicamente templates para criação de objetos. Eles encapsulam dados e código para trabalhar com esses dados, e são baseadas em prototypes, mas não vamos entrar a fundo nesse tópico.

Podemos criar uma classe utilizando a palavra chave class seguida do nome da classe.

Dentro do bloco de código da classe, podemos declarar propriedades que por padrão são públicas, ou seja, podem ser acessadas de fora da classe.

```typescript
class UserDevschool {
  id: string;

  nome: string;

  constructor(id: string, nome: string) {
    this.id = id;
    this.nome = nome;
  }

  getUppercaseName() {
    return this.nome.toUpperCase();
  }
}
```

```typescript
class UserDevschool {
  constructor(public id: string, public nome: string) {}
}

interface TemMaterias {
  materias: string[];
}

class UserDevschool {
  constructor(public id: string, public nome: string) {}
}

class ProfessorDevschool extends UserDevschool implements TemMaterias {
  materias: string[] = [];

  constructor(id: string, nome: string) {
    super(id, nome);
  }
}
```
