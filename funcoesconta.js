$(function () {
	var operacaoConta = "A"; //"A"=Adição; "E"=Edição
	var indice_selecionadoConta = -1;
	var tbClientesConta = localStorage.getItem("tbClientesConta");// Recupera os dados armazenados
	tbClientesConta = JSON.parse(tbClientesConta); // Converte string para objeto

	if (tbClientesConta == null) // Caso não haja conteúdo, iniciamos um vetor vazio
	tbClientesConta = [];

	function AdicionarConta() {
		var clicon = GetClienteConta("Codigo", $("#txtCodigoConta").val());

		if (clicon != null) {
			alert("Código já cadastrado.");
			return;
		}

		var clientecon = JSON.stringify({
			Codigo: $("#txtCodigoConta").val(),
			Email: $("#txtEmailConta").val(),
			Senha: $("#txtSenhaConta").val()
		});

		tbClientesConta.push(clientecon);

		localStorage.setItem("tbClientesConta", JSON.stringify(tbClientesConta));

		alert("Registro adicionado.");
		return true;
	}

	function EditarConta() {
		tbClientesConta[indice_selecionadoConta] = JSON.stringify({
			Codigo: $("#txtCodigoConta").val(),
			Email: $("#txtEmailConta").val(),
			Senha: $("#txtSenhaConta").val()
		});

		localStorage.setItem("tbClientesConta", JSON.stringify(tbClientesConta));
		alert("Informações editadas.")
		operacaoConta = "A";
		return true;
	}

	function ListarConta() {
		$("#tblListarConta").html("");
		$("#tblListarConta").html(
			"<thead>" +
			"	<tr>" +
			"<th></th>" +
			"	<th>Código</th>" +
			"	<th>Email</th>" +
			"	<th>Senha</th>" +
			"	</tr>" +
			"</thead>" +
			"<tbody>" +
			"</tbody>"
		);

		for (var i in tbClientesConta) {
			var clicon = JSON.parse(tbClientesConta[i]);
			$("#tblListarConta tbody").append("<tr>" +
				"	<td><img src='edit.png' alt='" + i + "' class='btnEditar'/><img src='delete.png' alt='" + i + "' class='btnExcluir'/></td>" +
				"	<td>" + clicon.Codigo + "</td>" +
				"	<td>" + clicon.Email + "</td>" +
				"	<td>" + clicon.Senha + "</td>" +
				"</tr>");
		}
	}

	function ExcluirConta() {
		tbClientesConta.splice(indice_selecionadoConta, 1);
		localStorage.setItem("tbClientesConta", JSON.stringify(tbClientesConta));
		alert("Registro excluído.");
	}

	function GetClienteConta(propriedade, valor) {
		var clicon = null;
		for (var item in tbClientesConta) {
			var i = JSON.parse(tbClientesConta[item]);
			if (i[propriedade] == valor)
			clicon = i;
		}
		return clicon;
	}

	ListarConta();

	$("#frmCadastroConta").on("submit", function () {
		if (operacaoConta == "A")
			return AdicionarConta();
		else
			return EditarConta();
	});

	$("#tblListarConta").on("click", ".btnEditar", function () {
		operacaoConta = "E";
		indice_selecionadoConta = parseInt($(this).attr("alt"));
		var clicon = JSON.parse(tbClientesConta[indice_selecionadoConta]);
		$("#txtCodigoConta").val(clicon.Codigo);
		$("#txtEmailConta").val(clicon.Email);
		$("#txtSenhaConta").val(clicon.Senha);
		$("#txtCodigoConta").attr("readonly", "readonly");
		$("#txtEmailConta").focus();
	});

	$("#tblListarConta").on("click", ".btnExcluir", function () {
		indice_selecionadoConta = parseInt($(this).attr("alt"));
		ExcluirConta();
		ListarConta();
	});
});
