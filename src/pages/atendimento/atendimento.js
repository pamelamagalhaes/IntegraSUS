let botaoNovoAtendimento = document.getElementById("novo-atendimento");

botaoNovoAtendimento.onclick = function() {

    let nomePaciente = prompt('Novo atendimento. Informe o nome do paciente:');

    let htmlNomePaciente = document.getElementById('nome-paciente');
    htmlNomePaciente.innerHTML = nomePaciente;

}