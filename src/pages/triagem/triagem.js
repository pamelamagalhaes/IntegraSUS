let buttonTriagemSubmit = document.getElementById('button-triagem-submit');

var tbTriagem = localStorage.getItem("tbTriagem");// Recupera os dados armazenados
tbTriagem = JSON.parse(tbTriagem); // Converte string para objeto

if (tbTriagem == null) // Caso não haja conteúdo, iniciamos um vetor vazio
    tbTriagem = [];

// Executa funcao ao clicar no botao de enviar
buttonTriagemSubmit.onclick = function() {

    let resposta = confirm('Deseja finalizar a triagem?');
    var triagemNome = document.getElementById("Triagem-nome");
    

    if (resposta) {
        localStorage.triagemNome = triagemNome.value;
        var current_time = new Date().toLocaleString("pt-Br",{
            dateStyle: "short",
            timeStyle: "short",
            timeZone: "America/Sao_Paulo"
          })

        var ele = document.getElementsByName('Situacao');
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
            localStorage.triagemSituacao = ele[i].value;
        }

        var paciente = JSON.stringify({
            Nome: localStorage.triagemNome,
            Status: localStorage.triagemSituacao,
            Time: current_time
        });

        tbTriagem.push(paciente);

		localStorage.setItem("tbTriagem", JSON.stringify(tbTriagem));

        window.location.href = "../../pages/fila-atendimento/fila-atendimento.html";
    }

}
