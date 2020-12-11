/*alert("Olá Mundo");
console.log("Olá Mundo");
console.log(document);*/

var titulo = document.querySelector(".titulo");
//console.log(titulo.textContent);
//Altera  o nome do título da páginaa
titulo.textContent = "Aparecida Nutricionista";

// Requisitando as trs dos pacientes
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){
	var paciente = pacientes[i];

	// Recebendo os valores necessários para o cáculo do IMC
	var tdpeso   = paciente.querySelector(".info-peso");
	var tdaltura = paciente.querySelector(".info-altura");
	var peso     = tdpeso.textContent;
	var altura   = tdaltura.textContent;
	var tdimc    = paciente.querySelector(".info-imc");

	// Validação dos valores e cálculo do IMC
	var validaPeso = validacaoDePeso(peso);
	var validaAltura = validacaoDeAltura(altura);

	if (!validaPeso){
		console.log("Peso inválido!");
		tdimc.textContent = "Peso inválido!";
		/*
		paciente.style.color = "white";
		paciente.style.backgroundColor = "lightcoral";*/
		paciente.classList.add("paciente-invalido"); // Melhor prática adicionar um estilo de css do que alterar diretamente no javaScript
	}

	if (!validaAltura){
		console.log("Altura inválida!");
		tdimc.textContent = "Altura inválida!";
		paciente.classList.add("paciente-invalido");
	}

	if(validaPeso && validaAltura){
		var IMC = calculaImc(peso, altura);
		tdimc.textContent = IMC;
	}
}

function calculaImc(peso, altura){
	var imc = 0;
	imc = peso/(altura*altura);
	return imc.toFixed(2);
}

function validacaoDePeso(peso){
	if (peso >=0 && peso < 1000){
		return true;
	}else{
		return false;
	}
}

function validacaoDeAltura(altura){
	if (altura >=0 && altura < 3.0){
		return true;
	}else{
		return false;
	}
}