O Typescript adiciona suporte a enums no JavaScript, que permite descrever um valor que é restrito a um determinado conjunto de constantes nomeadas.

Por padrão as constantes tem o valor numérico começando em zero, mas é recomendado atribuir um valor específico a cada uma delas, que pode ser do tipo number ou string.

É uma funcionalidade do Typescript que não se restringe somente ao sistema de tipos do Typescript, por isso, ao utilizarmos enums, é gerado um objeto no javascript para representar esse enum, diferente das interfaces e types que desaparecem ao serem compiladas para javascript.

Por causa disso, podemos referenciar o enum tanto no código javascript, por exemplo, ao atribuir o valor de uma constante do enum a uma variável, ou usa-lá no sistema de tipos.
