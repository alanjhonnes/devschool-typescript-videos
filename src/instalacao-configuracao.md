# Typescript - Instalação e configuração de projetos

Podemos instalar o TypeScript globalmente utilizando `npm install --global typescript`,
após instalado, teremos acesso ao comando `tsc`, que é a abreviação de TypeScript Compiler.

Rodando ele em uma pasta sem o arquivo tsconfig.json, vemos essa mensagem de informação do TypeScript.

Para inicializarmos a configuração do projeto, devemos executar `tsc --init`, que vai criar o arquivo tsconfig.json com as configurações recomendadas.

Abrindo o arquivo, podemos ver diversas configurações separadas por tipo e com uma breve explicação à direita.

A parte de Projeto são configurações relacionadas a projetos que se relacionam a outros projetos de Typescript.

A parte de Linguagem e ambiente são configurações relacionadas a versão e configuração do Javascript do ambiente e as bibliotecas disponíveis.

A parte de Módulos são configurações relacionadas a parte de modulos, imports, exports, e o tipo de módulo javascript utilizado.

A parte de suporte a JavaScript são configurações relacionadas ao uso de arquivos Javascript dentro de projetos Typescript.

A parte de Emit são configurações relacionadas aos arquivos gerados após serem compilados pelo Typescript.

A parte de Interoperatividade são configurações relacionados ao suporte de código feito de diferentes formas.

A parte de Checagem de tipagem é muito importante, são as configurações relacionados ao sistema de tipagem do Typescript.

A última parte é relacionada a checagem de tipagem de bibliotecas nativas ou de terceiros.

Além de instalar o typescript globalmente, é importante que ele faça parte das dependências de desenvolvimento do projeto, podemos fazer isso rodando o comando `npm install --save-dev typescript`

Esse comando vai instalar o typescript na pasta node_modules do projeto e o typescript ficará registrado como dependência de desenvolvimento no arquivo package.json. Podemos então criar um script do projeto com o comando de build, executando o tsc.
