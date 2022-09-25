# Vue 3 Starter Kit

Boilerplate para Vue 3 usado para novos projetos com alto padrão de qualidade de software.

<br>

## Features
  - [Vue 3](https://github.com/vuejs/core);
    - [Vue Router](https://github.com/vuejs/vue-router);
    - Nova Sintaxe [`<script setup>` ](https://github.com/vuejs/rfcs/pull/227) para Vue 3;
    - [Vue Formor](https://github.com/Vanilla-IceCream/vue-formor);
    - [Vue i18n](https://kazupon.github.io/vue-i18n/);
  - [Vite](https://vitejs.dev/);
  - [Pinia](https://pinia.vuejs.org/);
  - [Vitest](https://vitest.dev/);
  - [ESLint](https://eslint.org/);
  - [Prettier](https://prettier.io/);
  - [Dependabot](https://github.com/dependabot);
  - [GitHub Actions](https://github.com/features/actions);
  - [Netlify](https://www.netlify.com/);
  - [Heroku](https://www.heroku.com/home);
  - [Husky](https://typicode.github.io/husky/#/);
  - [Commitlint](https://github.com/conventional-changelog/commitlint);
  - [Semantic Release](https://github.com/semantic-release/semantic-release);
  - [Coveralls](https://coveralls.io/);
  - [Axios](https://github.com/axios/axios);
  - [Lodash](https://lodash.com/);
  - [Quasar Framework](https://quasar.dev/);
  - [Tailwind CSS](https://tailwindcss.com/);
  - [SASS](https://sass-lang.com/);
  - [Iconify](https://iconify.design/);
  - [Unplugin Icons](https://github.com/antfu/unplugin-icons);

<br>

## Dependências
- ### Node
  ```sh
  ^16.17.0
  ```

<br>

- ### NPM
  ```sh
  ^8.19.1
  ```

<br>

## Scripts
- ### Instalar Pacotes
  ```sh
  npm install
  ```

<br>

- ### Limpar Pacotes
  ```sh
  npm run clear
  ```

<br>

- ### Subir Servidor de Desenvolvimento
  ```sh
  npm run dev
  ```

<br>

- ### Verificar Lint de Arquivos
  ```sh
  npm run lint
  ```

<br>

- ### Formatar Lint de Arquivos
  ```sh
  npm run prettier
  ```

<br>

- ### Rodar Testes em Loop
  ```sh
  npm run dev-unit
  ```

<br>

- ### Rodar Testes e Gerar Arquivo de Cobertura
  ```sh
  npm run unit
  ```

<br>

- ### Buildar para Produção
  ```sh
  npm run build
  ```

<br>

- ### Subir Servidor de Produção
  ```sh
  npm run start
  ```

<br>

## Commits

### Tipos de Commits

- #### FIX
  Usamos para sinalizar tratamento de correções de bugs.
  ```sh
  git commit -m "fix(CARD-123): some message"
  ```
<br>

- #### FEAT
  Usamos para sinalizar adições de novas funcionalidades ou de quaisquer outras novas implantações ao código.
  ```sh
  git commit -m "feat(CARD-123): some message"
  ```
<br>

- #### CHORE
  Usamos para sinalizar atualização de tarefas que não ocasionam alteração no código de produção, mas mudanças de ferramentas, mudanças de configuração e bibliotecas.
  ```sh
  git commit -m "chore(CARD-123): some message"
  ```
<br>

- #### REFACTOR
  Usamos para sinalizar quaisquer mudanças que sejam executados no código, porém não alterem a funcionalidade final da tarefa impactada.
  ```sh
  git commit -m "refactor(CARD-123): some message"
  ```
<br>

- #### DOCS
  Usamos para sinalizar inclusão ou alteração somente de arquivos de documentação.
  ```sh
  git commit -m "docs(CARD-123): some message"
  ```
<br>

- #### PERF
  Usamos para sinalizar alteração de código que melhora o desempenho.
  ```sh
  git commit -m "perf(CARD-123): some message"
  ```
<br>

- #### STYLE
  Usamos para sinalizar alterações referentes a formatações na apresentação do código que não afetam o significado do código, como por exemplo: espaço em branco, formatação, ponto e vírgula ausente etc.
  ```sh
  git commit -m "style(CARD-123): some message"
  ```
<br>

- #### TEST
  Usamos para sinalizar inclusão de testes ausentes ou corrigindo testes existentes nos processos de testes automatizados.
  ```sh
  git commit -m "test(CARD-123): some message"
  ```
<br>

- #### BUILD
  Usamos para sinalizar alterações que afetam o sistema de construção ou dependências externas.
  ```sh
  git commit -m "build(CARD-123): some message"
  ```
<br>

- #### CI
  Usamos para sinalizar alterações em nossos arquivos e scripts de configuração de CI.
  ```sh
  git commit -m "ci(CARD-123): some message"
  ```
<br>

- #### ENV
  Usamos para sinalizar alterações em arquivos de configuração em processos e métodos de integração contínua (CI), como parâmetros em arquivos de configuração.
  ```sh
  git commit -m "env(CARD-123): some message"
  ```
<br>

- #### BREAKING CHANGE
  Usamos no rodapé do commit para sinalizar alterações em que é necessário gerar uma nova versão major.
  ```sh
  git commit -m "feat(CARD-123): some message

  BREAKING CHANGE: footer with multiple lines
  but still no line is too long"
  ```
<br>

### Problemas Comuns

- #### Escopo do Tipo
  Por padrão usamos o tipo e número do card no escopo do tipo do commit:
  ```sh
  git commit -m "fix: some message" # ERRO

  git commit -m "fix(CARD-123): some message" # OK
  ```
<br>

- #### Tipo do Commit
  O commit deve pertencer aos tipos:
  ```
  build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test
  ```

  ```sh
  git commit -m "foo(CARD-123): some message" # ERRO

  git commit -m "fix(CARD-123): some message" # OK
  ```
<br>

- #### Case do Tipo
  O tipo deve ser em minúsculo (lowcase):
  ```sh
  git commit -m "FIX(CARD-123): some message" # ERRO

  git commit -m "fix(CARD-123): some message" # OK
  ```
<br>

- #### Tipo Vazio
  O tipo do commit é obrigatório:
  ```sh
  git commit -m "(CARD-123): some message" # ERRO

  git commit -m "fix(CARD-123): some message" # OK
  ```
<br>

- #### Case do Título
  O título deve iniciar em minúsculo (lowcase):
  ```sh
  git commit -m "fix(CARD-123): Some message" # ERRO

  git commit -m "fix(CARD-123): Some Message" # ERRO

  git commit -m "fix(CARD-123): SomeMessage" # ERRO

  git commit -m "fix(CARD-123): SOMEMESSAGE" # ERRO

  git commit -m "fix(CARD-123): some message" # OK

  git commit -m "fix(CARD-123): some Message" # OK
  ```
<br>

- #### Título Vazio
  O título do commit é obrigatório:
  ```sh
  git commit -m "fix(CARD-123):" # ERRO

  git commit -m "fix(CARD-123): some message" # OK
  ```
<br>

- #### Ponto Final no Título
  O título do commit não deve terminar com ponto final:
  ```sh
  git commit -m "fix(CARD-123): some message." # ERRO

  git commit -m "fix(CARD-123): some message" # OK
  ```
<br>

- #### Tamanho Máximo do Titulo do Commit
  O título do commit não deve ter mais que 100 caracteres:
  ```sh
  git commit -m "fix(CARD-123): some message that is way too long and breaks the line max-length by several characters" # ERRO

  git commit -m "fix(CARD-123): some message" # OK
  ```
<br>

- #### Quebra de Linha do Rodapé
  O rodapé deve ter uma linha em branco antes:
  ```sh
  git commit -m "fix(CARD-123): some message
  BREAKING CHANGE: It will be significant" # WARN

  git commit -m "fix(CARD-123): some message

  BREAKING CHANGE: It will be significant" # OK
  ```
<br>

- #### Tamanho Máximo do Rodapé do Commit
  O rodapé do commit não deve ter mais que 100 caracteres:
  ```sh
  git commit -m "fix(CARD-123): some message

  BREAKING CHANGE: footer with multiple lines
  has a message that is way too long and will break the line rule 'line-max-length' by several characters" # ERRO

  git commit -m "fix(CARD-123): some message

  BREAKING CHANGE: footer with multiple lines
  but still no line is too long" # OK
  ```
<br>

- #### Quebra de Linha do Conteúdo
  O conteúdo deve ter uma linha em branco antes:
  ```sh
  git commit -m "fix(CARD-123): some message
  body" # WARN

  git commit -m "fix(CARD-123): some message

  body" # OK
  ```
<br>

- #### Tamanho Máximo do Conteúdo do Commit
  O conteúdo do commit não deve ter mais que 100 caracteres:
  ```sh
  git commit -m "fix(CARD-123): some message

  body with multiple lines
  has a message that is way too long and will break the line rule 'line-max-length' by several characters" # ERRO

  git commit -m "fix(CARD-123): some message

  body with multiple lines
  but still no line is too long" # OK
  ```

<br>

## Semantic Release
O Semantic Release é um conjunto de regras que muitas bibliotecas seguem ao determinar como incrementar seus números de versão. Uma versão semântica sempre consistirá em três números separados por decimais que indicam a versão principal, secundária e a de correção. O formato do versionamento semântico é a seguinte: MAJOR_VERSION.MINOR_VERSION.PATCH_VERSION. Isso significa que a seguinte versão semântica 1.14.2 indica: MAJOR_VERSION 1, MINOR_VERSION 14 e PATCH_VERSION 2.

Agora, isso é ótimo, mas o que exatamente significam as diferentes versões? Aqui está uma citação direta da documentação para versionamento semântico:

> `MAJOR:` Versão quando você faz alterações de API incompatíveis;

> `MINOR:` Versão quando você adiciona funcionalidade de maneira compatível com versões anteriores;

> `PATCH:` Versão quando você faz correções de bugs compatíveis com versões anteriores.

<br>

- ### PATCH
  Como a documentação diz, uma versão de patch só deve ser atualizada quando correções de bugs compatíveis com versões anteriores forem introduzidas. As versões de patch geralmente são incrementadas quando bugs são descobertos entre lançamentos menores que precisam ser corrigidos rapidamente.

<br>

- ### MINOR
  A versão secundária é um pouco mais complexa, pois será incrementada sempre que uma nova funcionalidade for adicionada e compatível com versões anteriores. Por exemplo, se houvesse uma biblioteca matemática que adicionasse a capacidade de calcular seno e cosseno, a versão secundária dessa biblioteca precisaria ser incrementada quando esses novos recursos fossem lançados. Também é importante redefinir a versão do patch sempre que uma nova versão secundária for lançada. Por exemplo, se uma biblioteca estiver na versão `2.3.6` e uma nova versão secundária for lançada, o novo número de versão será `2.4.0`.

<br>

- ### MAJOR
  O último número de versão, a versão principal, só deve ser incrementado quando alterações importantes forem introduzidas. Isso pode ser uma grande mudança, como reescrever toda a biblioteca, ou pequenas mudanças, como retrabalhar um único componente da biblioteca. O importante é que sempre que uma alteração importante for introduzida, a versão principal do aplicativo deve ser incrementada. A versão secundária e a versão do patch também precisam ser redefinidas assim que a versão principal for incrementada. Por exemplo, se uma biblioteca estiver fazendo uma atualização de versão principal de `1.12.6`, a nova versão será `2.0.0`.

<br>

- ### Como Usar?
  O Semantic Release faz o versionamento de maneira automática no CI. Mantenha as mensagens de commits padronizadas! Pois ele se baseia no tipo do commit para fazer o incremento de versão.

  Para gerar uma versão MAJOR, utilize o [BREAKING CHANGE](#BREAKING-CHANGE) no rodapé do commit. Assim, será gerado uma nova versão MAJOR com base nesse commit.

<br>

## Husky
O Husky é uma ferramenta que nos permite facilmente configurar hooks do Git e executar scripts que queremos em certos estágios.

Usamos o Husky nesse projeto para verificar a padronização de commits (Commitlint), códigos (ESLint e Prettier) e rodar os testes unitários (Vitest).

> `PRE-COMMIT:` Antes de fazer o commit ele faz a padronização do código (Prettier), salva e verifica a padronização do commit (Commitlint). Caso ele perceba que o commit está fora do padrão ou se não conseguir padronizar o código ele não permitirá o commit;

> `PRE-PUSH:` Antes de fazer o push ele verifica a padronização do código (ESLint) e roda os testes unitários (Vitest). Caso ele perceba que algum teste falhou ou se o código não está padronizado ele não permitirá o push.

<br>

## Coveralls
A Coveralls é um serviço para ajudá-lo a rastrear a cobertura de seu código ao longo do tempo e garantir que todo o seu novo código seja totalmente coberto.

Usamos a Coveralls nesse projeto para análise da cobertura de testes a cada pull request aberto. Não se preocupe em rodar nenhum script! O próprio CI irá gerar o relatório de cobertura e irá enviar para a [Coveralls](https://coveralls.io/). Basta acessar o sistema deles através de email e senha.

<br>

## GitHub Actions
O GitHub Actions é uma plataforma de integração contínua e entrega contínua (CI/CD) que permite automatizar seu pipeline de compilação, teste e implantação.

Usamos o Actions nesse projeto para o flow de pipeline. Nele rodamos testes unitários, verificação de padronização de commit e código. Além disso, ele é responsável por gerar a release através do [Semantic Release](#Semantic-Release).

As Actions são acionadas quando criamos um pull request ou quando executamos um push na branch master:

> `PULL REQUEST:` Ao criar um pull request é verificado a padronização de todos os commits da branch de origem, se todos os testes unitários estão passando e se o código da branch de origem está padronizado. Além disso, é enviado para a Coveralls o relatório de cobertura dos testes unitários. Caso alguma verificação falhe, não será possível executar o merge;

> `PUSH NA MASTER:` Quando fazemos um push na master, seja diretamente ou através de um pull request, executará o script de criação de release através do [Semantic Release](#Semantic-Release). Ele irá alterar o arquivo CHANGELOG, package.json e criará uma TAG para a versão.

<br>
