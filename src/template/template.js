// ------------------------------------------------------------------------
// => Menus da sidebar do sistema
// ------------------------------------------------------------------------

const menus = [
    {
        nome: 'Médicos',
        url: '../cadastro/medico/lista/lista.html',
        ativo: window.location.href.includes('lista.html')
    },
    {
        nome: 'Fila Atendimento',
        url: '../fila-atendimento/fila-atendimento.html',
        ativo: window.location.href.includes('fila-atendimento.html')
    },
    {
        nome: 'Triagem',
        url: '../triagem/triagem.html',
        ativo: window.location.href.includes('triagem.html')
    },
    {
        nome: 'Prontuário',
        url: '../prontuario/prontuario.html',
        ativo: window.location.href.includes('prontuario.html')
    },
    {
        nome: 'Mapa',
        url: '../map/map.html',
        ativo: window.location.href.includes('map.html')
    },
    {
        nome: 'Exames',
        url: '../exame/exame.html',
        ativo: window.location.href.includes('exame.html')
    },
    {
        nome: 'Atendimento',
        url: '../atendimento/atendimento.html',
        ativo: window.location.href.includes('atendimento.html')
    },
    {
        nome: 'Dados de cadastro',
        url: '../dados-cadastro/dados-cadastro.html',
        ativo: window.location.href.includes('dados-cadastro.html')
    }
];

// ------------------------------------------------------------------------
// => Cabeçalho do sistema
// ------------------------------------------------------------------------

let header = document.getElementById('main-header');

// Elemento que carregará o cabeçalho da página foi encontrado
if (header != null) {

    // Texto contido dentro do cabeçalho
    header.innerText = 'Sistema de atendimento';

}

// ------------------------------------------------------------------------
// => Sidebar do sistema
// ------------------------------------------------------------------------

let sidebar = document.getElementById('main-sidebar');

// Elemento que carregará o sidebar do sistema foi encontrado
if (sidebar) {
    // Lista que agrupará os menus
    let htmlMenuList = document.createElement("ul");

    for (let menu of menus) {

        let htmlListItem = document.createElement("li");
        let htmlAnchor = document.createElement("a");

        htmlAnchor.innerText = menu.nome;
        htmlAnchor.href = menu.url;

        console.log(htmlAnchor.href)

        // Insere o elemento de link (tag <a> - anchor) dentro do item que será inserido na lista (<li>)
        htmlListItem.appendChild(htmlAnchor);

        // Se o item estiver ativo (menu da página atual)
        if (menu.ativo) {

            // Aplicar um estilo personalizado (aplicado através do css)
            htmlListItem.className = 'menu-item-selecionado';
        }

        // Insere o elemento de lista dentro do agrupador de itens do menu
        htmlMenuList.appendChild(htmlListItem);
    }

    // Insere o agrupamento de menus na sidebar
    sidebar.appendChild(htmlMenuList);

}