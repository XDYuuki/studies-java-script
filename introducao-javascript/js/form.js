var botaoAdicionar = document.querySelector("#adicionar-paciente");

// Ouvindo o evento de click no botão ---------------------------
botaoAdicionar.addEventListener("click", function(event){  //Função anônima
	event.preventDefault();
	
	var form = document.querySelector("#form-add");

    var paciente = obtemPacienteDoFormulario(form);

	adicionaPacienteNaTabela(paciente);

	//Validação de parâmetros
	var erros = validaPaciente(paciente);

	if(erros.length > 0){
		exibeMensagensDeErro(erros);
		return;
	}

	//reseta campos do formulário
	form.reset();
	var ulErros = document.querySelector("#mensagem-erro");
	ulErros.innerHTML = "";
});

// Funções ------------------------------------------------------
function adicionaPacienteNaTabela(paciente){
	var pacienteTr = montaTr(paciente);
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);
}

function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

    pacienteTr.appendChild( montaTd(paciente.nome, "info-nome") );
    pacienteTr.appendChild( montaTd(paciente.peso, "info-peso") );
	pacienteTr.appendChild( montaTd(paciente.altura, "info-altura") );	
	pacienteTr.appendChild( montaTd(paciente.gordura, "info-gordura") );
	pacienteTr.appendChild( montaTd(paciente.imc, "info-imc") );

	return pacienteTr;
}

function montaTd(valor, classe){
	var RetTd = document.createElement("td");
	RetTd.classList.add("classe");
	RetTd.textContent = valor;

	return RetTd;
}

function validaPaciente(paciente){
	var erros = [];
	if (paciente.nome.length == 0) erros.push("* O nome não pode ser em branco");
	if (!validacaoDePeso(paciente.peso)) erros.push("* O Peso é inválido");
	if (paciente.peso.length == 0) erros.push("* O peso não pode ser em branco");
	if (!validacaoDeAltura(paciente.altura)) erros.push("* A Altura é inválida");
	if (paciente.altura.length == 0) erros.push("* A altura não pode ser em branco");
	if (paciente.gordura.length == 0) erros.push("* A gordrua não pode ser em branco");

	return erros;
}

function exibeMensagensDeErro(erros){
	var ul = document.querySelector("#mensagem-erro");
	ul.innerHTML = "";
	erros.forEach(function(erro) {
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}