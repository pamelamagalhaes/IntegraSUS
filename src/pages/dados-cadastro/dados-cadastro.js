let buttonConsultarCep = document.getElementById('button-consultar-cep');

window.onload = () => {

    alert('Nesta tela, definimos um CEP padrão para testes!');

    // Inicializar CEP
    let campoCep = document.getElementById('campo-cep');
    campoCep.value = '80240210';
}

// Executa funcao ao clicar no botao de consultar
buttonConsultarCep.onclick = function() {

    let resposta = confirm('Deseja realizar a busca do endereço do paciente?');

    if (resposta) {

        let campoCep = document.getElementById('campo-cep');
        let valorCep = `${campoCep.value}`;

        const API_CEP = 'http://viacep.com.br/ws/' + valorCep + '/json/';
    
        fetch(API_CEP, { mode: 'cors', method: 'GET' })
            .then(dados => dados.json())
            .then(dados => {
    
                let divDadosCadastro = document.getElementById('dados-cadastro');
                let divNaoEncontrado = document.getElementById('dados-nao-encontrados');

                // Mostrar div dados cadastro
                divDadosCadastro.style.display = 'block';
                // Escoder div erro caso esteja sendo exibida
                divNaoEncontrado.style.display = 'none';

                let cep = document.getElementById('cep');
                let rua = document.getElementById('rua');
                let bairro = document.getElementById('bairro');
                let localidade = document.getElementById('localidade');
                let uf = document.getElementById('uf');

                cep.innerText = dados['cep'];
                rua.innerText = dados['logradouro'];
                bairro.innerText = dados['bairro'];
                localidade.innerText = dados['localidade'];
                uf.innerText = dados['uf'];
            })
            .catch(err => {

                let divDadosCadastro = document.getElementById('dados-cadastro');
                let divNaoEncontrado = document.getElementById('dados-nao-encontrados');

                divDadosCadastro.style.display = 'none';
                divNaoEncontrado.style.display = 'block';
            });
    }

    return;
}