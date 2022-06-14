
// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = []
};

// Emite mensagem informando que o formulátio não está completo 
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function inserir() {

    // Verfica se o formulário está preenchido corretamente
    if (!$('#form-contato')[0].checkValidity()) {
        displayMessage("Preencha o formulário corretamente.");
        return;
    }

    // Obtem os valores dos campos do formulário
    let nome = $("#inputNome").val();
    let idade = $("#inputIdade").val();
    let email = $("#inputEmail").val();
    let dataNascimento = $("#inputData").val();
    let sexo = $("#inputSexo").val();
    let endereço = $("#inputEndereço").val();
    let numero = $("#inputNumero").val();
    let complemento = $("#inputComplemento").val();
    let registroProfissional = $("#inputregistroProfissional").val();

    let contato = {
        id: 0,
        nome: nome,
        idade: idade,
        email: email,
        dataNascimento: dataNascimento,
        sexo: sexo,
        endereço: endereço,
        numero: numero,
        complemento: complemento,
        registroProfissional: registroProfissional
    };

    inserirContatos(contato);

}

function inserirContatos(contato) {

    let novoId = 1;

    if (db.data.length != 0)
        novoId = db.data[db.data.length - 1].id + 1;
        
    let novo = {
        "id": novoId,
        "nome": contato.nome,
        "idade": contato.idade,
        "email": contato.email,
        "dataNascimento": contato.dataNascimento,
        "sexo": contato.sexo,
        "endereço": contato.endereço,
        "numero": contato.numero,
        "complemento": contato.complemento,
        "registroProfissional": contato.registroProfissional
    };

    // Insere o novo objeto no array
    db.data.push(novo);
    displayMessage("Contato inserido com sucesso");

    // Atualiza dados LocalStorge
    localStorage.setItem('db_contato', JSON.stringify(db));

    
    // Limpa o formulario
    $("#form-contato")[0].reset();

    window.location.href = "../lista/lista.html";
}

