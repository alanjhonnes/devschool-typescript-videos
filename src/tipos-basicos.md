Os tipos primitivos do Typescript são os mesmos das primitivas do Javascript:

string, number, boolean, null, undefined, symbol e bigint.

Temos também os tipos especiais:

any, usado para desabilitar a checagem de tipos, deixando ser atribuido qualquer valor à variável e acessar qualquer propriedade.

unknown, que deixa atribuir qualquer valor a variável, mas que força o usuário a verificar o tipo antes de usar.

never, que representa um tipo que não deve existir, indicando um erro

object, que representa qualquer valor não primitivo

void, que indica a ausência de valor, como uma função que não retorna nada.

Os tipos null e undefined só existem e são levados em consideração no sistema de tipos se a opção de strictNullsChecks estiver habilitada, caso contrário, null e undefined passam a fazer parte de todos os outros tipos, por exemplo, passa a ser possível atribuir null ou undefined para uma variável de tipo string, o que não é recomendado, por isso, sempre tente utilizar o typescript com a opção de strict ou strictNullsChecks habilitada.
