// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Patricia Albuquerque",
            "idade": "35",
            "email": "patricia@gogo.net",
            "dataNascimento": "23/04/1985",
            "sexo": "Feminino",
            "endereço": "Rua Tijucas do sul",
            "numero": "70",
            "complemento": "Casa",
            "registroProfissional": "CRM-MG 32.000"
        },
        {
            "id": 2,
            "nome": "Marcos Mariano",
            "idade": "68",
            "email": "marcos@april.biz",
            "dataNascimento": "19/02/1950",
            "sexo": "Masculino",
            "endereço": "Rua Augusto Freitas",
            "numero": "367",
            "complemento": "Casa",
            "registroProfissional": "CRM-PR 03.333"

        },
        {
            "id": 3,
            "nome": "Clementina de Jesus",
            "idade": "27",
            "email": "clementina@oioi.net",
            "dataNascimento": "14/08/1994",
            "sexo": "Feminino",
            "endereço": "Rua Ramiro Freitas",
            "numero": "85",
            "complemento": "Apto 202 bloco A",
            "registroProfissional": "CRM-PR 02.000"

        },
        {
            "id": 4,
            "nome": "Patricia dos Santos",
            "idade": "30",
            "email": "patricia@yesenia.net",
            "dataNascimento": "14/08/1992",
            "sexo": "Feminino",
            "endereço": "Rua José Francisco",
            "numero": "120",
            "complemento": "Apto 106 bloco C",
            "registroProfissional": "CRM-RJ 14.000"

        },
        {
            "id": 5,
            "nome": "Aparecida Siva",
            "idade": "30",
            "email": "aparecida.silva@gogo.net",
            "dataNascimento": "14/08/1992",
            "sexo": "Feminino",
            "endereço": "Rua José Francisco",
            "numero": "120",
            "complemento": "Apto 106 bloco C",
            "registroProfissional": "CRM-RJ 14.000"
        },
        {
            "id": 6,
            "nome": "Eneias de Paula",
            "idade": "48",
            "email": "eneias@popois.net",
            "dataNascimento": "20/02/1973",
            "sexo": "Masculino",
            "endereço": "Rua José Francisco",
            "numero": "120",
            "complemento": "Apto 106 bloco C",
            "registroProfissional": "CRM-RJ 14.000"
        },
        {
            "id": 7,
            "nome": "Carlos da Silva",
            "idade": "50",
            "email": "carlos@soul.net",
            "dataNascimento": "04/04/1971",
            "sexo": "Masculino",
            "endereço": "Rua Joséfina Reis",
            "numero": "200",
            "complemento": "Casa",
            "registroProfissional": "CRM-RJ 14.000"
        },
        {
            "id": 8,
            "nome": "Roberto dos Santos",
            "idade": "30",
            "email": "roberto@hore.net",
            "dataNascimento": "14/08/1992",
            "sexo": "Masculino",
            "endereço": "Rua José Francisco",
            "numero": "850",
            "complemento": "Casa",
            "registroProfissional": "CRM-RJ 15.028"
        },
        {
            "id": 9,
            "nome": "Silvia de Almeida",
            "idade": "40",
            "email": "silvia@oioi.net",
            "dataNascimento": "14/08/1980",
            "sexo": "Feminino",
            "endereço": "Rua Itatiaia",
            "numero": "50",
            "complemento": "Casa",
            "registroProfissional": "CRM-SP 40.030"
        },
        {
            "id": 10,
            "nome": "Debora Fonseca",
            "idade": "35",
            "email": "debora@yesenia.net",
            "dataNascimento": "14/09/1985",
            "sexo": "Feminino",
            "endereço": "Rua José Francisco",
            "numero": "120",
            "complemento": "Apto 205 bloco C",
            "registroProfissional": "CRM-RJ 14.001"
        }
    ]
}

$('td').click(function () {
    var col = $(this).index(),
        row = $(this).parent().index();

    console.log("row index:" + row + ", col index :" + col);
});

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));

if (!db) {
    db = db_contatos_inicial
    // Atualiza dados LocalStorge
    localStorage.setItem('db_contato', JSON.stringify(db));
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function OnInit() {

    this.insert(db)
}

function filtrar() {
    input = document.getElementById("nome").value;

    var contatos = db.data.filter(function (i, n) {
        return n.nome.includes(input);
    })

    this.insert(contatos)
}

function insert() {

    // limpa a lista de contatos apresentados
    $("#table-contatos").empty();

    // Popula a tabela com os registros do banco de dados
    for (let index = 0; index < db.data.length; index++) {
        const contato = db.data[index];


        // Inclui o contato na tabela    
        $("#table-contatos").append(`<tr><td scope="row">${contato.id}</td>
                                        <td>${contato.nome}</td>
                                        <td>${contato.idade}</td>
                                        <td>${contato.email}</td>
                                        <td>${contato.dataNascimento}</td>
                                        <td>${contato.sexo}</td>
                                        <td>${contato.registroProfissional}</td>
                                    </tr>`);
    }
}
