📚 Catálogo de Livros Angular (livros-angular)

Este projeto, desenvolvido em Angular CLI v20.3.3, implementa um Catálogo de Livros Funcional baseado no conceito de Módulos e Injeção de Dependência. O projeto simula uma aplicação de gerenciamento de dados (CRUD básico) utilizando serviços para armazenar os dados em memória (mock).

💻 Funcionalidades Implementadas

O projeto foi estruturado seguindo os princípios de Componentes, Serviços e Roteamento, com foco na arquitetura do Angular.

1. Estrutura de Dados e Lógica (Serviços)

    • Classes de Entidade: Definição das classes Livro (incluindo autores: string[]) e Editora.

    • Serviços (Controladores): ControleLivrosService e ControleEditoraService simulam a camada de dados, gerenciando listas internas (livros e editoras).

    • ControleLivros: Implementa obterLivros(), incluir() (com auto-incremento de código) e excluir() (usando findIndex e splice).

    • ControleEditora: Implementa getEditoras() e getNomeEditora() para resolver a editora pelo ID.

2. Interface e Navegação (Componentes)

    • Navegação: Roteamento configurado para as rotas /lista (Catálogo) e /dados (Inclusão).

    • Tema Mobile First: A barra de navegação superior é dividida:

    • Título: Fixo no topo e centralizado.

    • Abas de Navegação: Rola junto com o conteúdo (scrollable).

    • Componente Lista (/lista): Exibe o catálogo em uma tabela com estilo Vermelho/Preto, e permite a exclusão de itens.

    • Componente Dados (/dados): Implementa um formulário de inclusão, usando o FormsModule para two-way binding ([(ngModel)]), incluindo a lógica de processar múltiplos autores separados por linha (split('\n')).

⚙️ Guia de Execução

Este projeto foi gerado usando [Angular CLI](https://github.com/angular/angular-cli) version 20.3.3.

## Development server

Development server

Para iniciar um servidor de desenvolvimento local, certifique-se de que está no diretório livros-angular e execute:

```bash
ng serve
```

Uma vez que o servidor esteja rodando, abra seu navegador e navegue para http://localhost:4200/. A aplicação recarregará automaticamente quando você modificar qualquer um dos arquivos fonte.

## Code scaffolding

Angular CLI inclui poderosas ferramentas de code scaffolding. Para gerar um novo componente, execute:

```bash
ng generate component component-name
```

Para uma lista completa de schematics disponíveis (como `components`, `directives`, ou `pipes`), execute:

```bash
ng generate --help
```

## Building

Para construir o projeto para produção, execute:

```bash
ng build
```

Isso compilará seu projeto e armazenará os artefatos de build no diretório dist/. Por padrão, o build de produção otimiza sua aplicação para performance e velocidade.

## Running unit tests

Para executar testes de unidade com [Karma](https://karma-runner.github.io) test runner, use o seguinte comando:

```bash
ng test
```

## Running end-to-end tests

Para testes end-to-end (e2e), execute:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

📄 Conteúdo do Componente Principal (app.component.html)

Abaixo está o código HTML do componente principal da aplicação, que configura a navegação e a responsividade (Mobile First) conforme ajustado:

```bash
<!-- TÍTULO FIXO NO TOPO (Primeira Barra) -->
<nav class="navbar navbar-dark bg-dark fixed-top" style="height: 56px;">
  <div class="container-fluid justify-content-center">
    <!-- Título centralizado e sempre visível -->
    <a class="navbar-brand text-white mx-auto fw-bold" routerLink="/">
      Catálogo de Livros
    </a>
  </div>
</nav>

<!-- MENU DE NAVEGAÇÃO SCROLLÁVEL (Segunda Barra) -->
<!-- Esta div usa padding-top para começar abaixo da barra fixa -->
<div class="bg-light" style="padding-top: 56px;">
  <nav class="navbar navbar-expand-lg navbar-light bg-light py-2">
    <div class="container-fluid justify-content-center">
      <ul class="navbar-nav flex-row">
        <!-- Rota para a lista de livros (Aba/Botão) -->
        <li class="nav-item me-3">
          <a class="nav-link" routerLink="/lista">Lista de Livros</a>
        </li>
        <!-- Rota para o cadastro de livros (Aba/Botão) -->
        <li class="nav-item">
          <a class="nav-link" routerLink="/dados">Cadastro de Livros</a>
        </li>
      </ul>
    </div>
  </nav>

  <!-- Ponto onde os componentes de rota (LivroLista/LivroDados) serão injetados -->
  <router-outlet></router-outlet>
</div>

```