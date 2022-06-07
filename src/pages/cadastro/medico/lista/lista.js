// declara um conjunto inicial de contatos
var db = {
    "data": [
        {
            "id": 1,
            "nome": "Leanne Graham",
            "idade": "35",
            "email": "Sincere@april.biz",
            "dataNascimento": "23/04/1985",
            "sexo": "Femenino",
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
            "nome": "Clementine Bauch",
            "idade": "27",
            "email": "Nathan@yesenia.net",
            "dataNascimento": "14/08/1994",
            "sexo": "Femenino",
            "endereço": "Rua Ramiro Freitas",
            "numero": "85",
            "complemento": "Apto 202 bloco A",
            "registroProfissional": "CRM-PR 02.000"

        },
        {
            "id": 4,
            "nome": "Patricia Lebsack",
            "idade": "30",
            "email": "patricia@yesenia.net",
            "dataNascimento": "14/08/1992",
            "sexo": "Femenino",
            "endereço": "Rua José Francisco",
            "numero": "120",
            "complemento": "Apto 106 bloco C",
            "registroProfissional": "CRM-RJ 14.000"

        },
        {
            "id": 5,
            "nome": "Chelsey Dietrich",
            "idade": "30",
            "email": "chelsey.dietrich@gogo.net",
            "dataNascimento": "14/08/1992",
            "sexo": "Femenino",
            "endereço": "Rua José Francisco",
            "numero": "120",
            "complemento": "Apto 106 bloco C",
            "registroProfissional": "CRM-RJ 14.000"
        },
        {
            "id": 6,
            "nome": "Dennis Schulist",
            "idade": "48",
            "email": "dennis@popois.net",
            "dataNascimento": "20/02/1973",
            "sexo": "Masculino",
            "endereço": "Rua José Francisco",
            "numero": "120",
            "complemento": "Apto 106 bloco C",
            "registroProfissional": "CRM-RJ 14.000"
        },
        {
            "id": 7,
            "nome": "Kurtis Weissnat",
            "idade": "50",
            "email": "patricia@yesenia.net",
            "dataNascimento": "04/04/1971",
            "sexo": "Masculino",
            "endereço": "Rua Joséfina Reis",
            "numero": "200",
            "complemento": "Casa",
            "registroProfissional": "CRM-RJ 14.000"
        },
        {
            "id": 8,
            "nome": "Nicholas Runolfsdottir",
            "idade": "30",
            "email": "nicholasra@yesenia.net",
            "dataNascimento": "14/08/1992",
            "sexo": "Masculino",
            "endereço": "Rua José Francisco",
            "numero": "850",
            "complemento": "Casa",
            "registroProfissional": "CRM-RJ 15.028"
        },
        {
            "id": 9,
            "nome": "Glenna Reichert",
            "idade": "40",
            "email": "glenna@yessy.net",
            "dataNascimento": "14/08/1980",
            "sexo": "Femenino",
            "endereço": "Rua Itatiaia",
            "numero": "50",
            "complemento": "Casa",
            "registroProfissional": "CRM-SP 40.030"
        },
        {
            "id": 10,
            "nome": "Clementina DuBuque",
            "idade": "35",
            "email": "clemendua@yesenia.net",
            "dataNascimento": "14/09/1985",
            "sexo": "Femenino",
            "endereço": "Rua José Francisco",
            "numero": "120",
            "complemento": "Apto 205 bloco C",
            "registroProfissional": "CRM-RJ 14.001"
        }
    ]
}


function OnInit() {

    this.insert(db)
}

function filtrar() {
    input = document.getElementById("nome").value;

    var contatos = db.data.filter(function (i,n){
        return n.nome.includes(input);
    })
   
    this.insert(contatos)
}

function insert(dados) {

    // limpa a lista de contatos apresentados
    $("#table-contatos").empty();

    // Popula a tabela com os registros do banco de dados
    for (let index = 0; index < dados.data.length; index++) {
        const contato = dados.data[index];


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
