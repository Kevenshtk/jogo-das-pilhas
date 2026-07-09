# 🎮 Jogo das Pilhas

O projeto foi desenvolvido durante o curso de Análise e Desenvolvimento de Sistemas como parte de uma pesquisa voltada ao ensino de lógica de programação para adolescentes.

Além da implementação da aplicação web, o projeto serviu como ferramenta de pesquisa para um artigo científico, sendo utilizado para avaliar uma abordagem lúdica no processo de aprendizagem de conceitos fundamentais de programação.

🔗[Acessar aplicação](https://kevenshtk.github.io/jogo-das-pilhas/)

## 🎯 Objetivos

O objetivo do projeto foi desenvolver uma ferramenta educacional para apoiar o ensino de lógica de programação por meio da gamificação, aplicando conceitos como:

- Desenvolvimento Web com HTML, CSS e JavaScript;
- Manipulação do DOM;
- Eventos e Drag and Drop;
- Lógica de programação;
- Acessibilidade com HTML semântico e ARIA;
- Design de interfaces educacionais;
- Desenvolvimento de software voltado ao ensino.

## 📄 Artigo Científico

O desenvolvimento do Jogo das Pilhas serviu como base para uma pesquisa voltada ao ensino de lógica de programação, resultando na publicação de um artigo científico que apresenta a proposta da ferramenta, sua metodologia e os resultados obtidos durante sua utilização.

🔗[Artigo Publicado](https://kevenshtk.github.io/jogo-das-pilhas/public/assets/docs/artigo.pdf)

## 📷 Demonstração

### Tela Inicial
![Tela Inicial](https://kevenshtk.github.io/jogo-das-pilhas/public/assets/img/telas/telaInicial.png)

### Tela de Jogo
![Tela de Jogo](https://kevenshtk.github.io/jogo-das-pilhas/public/assets/img/telas/telaJogoDescubraPilha.png)

## ✨ Funcionalidades

### Descubra a Pilha

- Separação automática das figuras em duas pilhas.
- Geração de alternativas para identificação da regra lógica.
- Validação das respostas.
- Feedback imediato ao jogador.

### Monte a Pilha

- Organização manual das figuras utilizando drag and drop.
- Verificação automática da solução.
- Correção baseada na lógica selecionada.

### Sistema

- 344 combinações lógicas.
- Sistema de níveis de dificuldade.
- Interface responsiva.
- HTML semântico.
- Acessibilidade com ARIA.


## 🛠️ Tecnologias

<img align="center" src="https://skillicons.dev/icons?i=html,css,js" alt="icons"/>

## 📁 Estrutura

### 🏛️ Arquitetura
O projeto foi organizado seguindo o padrão arquitetural MVC (Model-View-Controller), separando as responsabilidades entre Model, View e Controller, o que torna o código mais organizado, facilita a manutenção e contribui para sua evolução.

```
public/
├── assets/
│   ├── docs/
│   ├── font/
│   ├── img/
│   ├── sounds/
│   └── videos/
├── css/
└── js/
    ├── controller/
    ├── model/
    ├── view/
    └── utils/
```

### 📦 assets/
Reúne os recursos estáticos utilizados pela aplicação.

- **docs/** → Documentação do projeto e artigo científico.
- **font/**  → Fontes utilizadas pela aplicação.
- **img/** → Imagens das telas, figuras do jogo e demais recursos visuais.
- **sounds/** → Efeitos sonoros utilizados durante a interação.
- **videos/** → Vídeos tutoriais integrados ao jogo.

### 🎨 css/
Arquivos responsáveis pela estilização da aplicação.

### ⚙️ js/
Agrupa os módulos JavaScript organizados conforme a arquitetura MVC.

- **controller/** → Controla o fluxo da aplicação, intermediando a comunicação entre a interface e a lógica de negócio.
- **model/** → Contém os dados e as regras de negócio do jogo.
- **view/** → Responsável pela manipulação da interface e atualização dos elementos da página.
- **utils/** → Reúne funções utilitárias compartilhadas entre os módulos da aplicação.

## ⭐ Destaques

- Ferramenta utilizada como base para uma pesquisa acadêmica, resultando na publicação de um artigo científico.
- Aplicação dos conceitos de gamificação para apoiar o ensino de lógica de programação.
- Organização do código utilizando a arquitetura MVC em JavaScript.
- 344 combinações lógicas para geração de desafios.
- Sistema com diferentes níveis de dificuldade.
- Interface acessível utilizando HTML semântico e atributos ARIA.
- Recurso de drag and drop para interação com as figuras.
- Vídeos tutoriais integrados para auxiliar os usuários durante a utilização do jogo.

## 🚀 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Kevenshtk/jogo-das-pilhas.git
   
2. Abra a pasta no VS Code e inicie com o Live Server:  
   > Atalho: Alt+L, depois Alt+O
