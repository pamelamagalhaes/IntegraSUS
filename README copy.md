# :computer: Sistema de atendimento
Projeto front-end para sistema de atendimento.

## Conteúdo

* [Requisitos](#requirements)

<div id='requirements'/> &nbsp;

## :pushpin: Requisitos

>*Requisitos para padronização das telas do sistema*

- Os arquivos `HTML`, `CSS` e `JavaScript` de cada tela deverão estar dentro da pasta `pages`;
- O template de cada tela deve seguir sempre o mesmo padrão, sendo:
    - Dentro do cabeçalho da página (tag `head`), deve-se importar a folha de estilos global do template do sistema:
        - `<link rel="stylesheet" href="../../template/template.css">`
    - Dentro do `body`, deve estar contida a seguinte estrutura:
        - tag `header` com o id `main-header` (terá o conteúdo preenchido através do javascript)
        - tag `main` contendo duas sub-tags:
            - tag `aside` com o id `main-sidebar` (será carregada a sidebar do sistema através do javascript)
            - tag `section` com o id `main-section` (o código HTML do conteúdo da página deve estar dentro desta tag)
    - Ao fim do arquivo, antes de fechar a tag `body`, importar o javascript global do template:
        - `<script src="../../template/template.js"></script>`

> Quanto a ordem de importação de arquivos CSS e JavaScript:
> * Importar primeiramente os arquivos globais, referentes ao template do sistema;
> * Depois dos imports globais, importar as folhas de estilo / scripts da própria tela.
  
- Sugestão de IDE / Editor de texto - [Visual Studio Code](https://code.visualstudio.com/)
> No caso da utilização do VSCode, recomenda-se a utilização das seguintes extensões:
> * Live Server - Atualiza o layout no navegador ao salvar o arquivo
> * Material Icon Theme - Melhor identificação dos arquivos e pastas do projeto
