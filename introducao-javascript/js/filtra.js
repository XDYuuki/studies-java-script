var campoFiltro = document.querySelector('#filtrar-tabela');
campoFiltro.addEventListener("input", function(){
    var valueTyped = this.value;
    var pacientes = document.querySelectorAll(".paciente");
    if(valueTyped.length > 0){
        pacientes.forEach(function(paciente){ //this.value não referencia quem escuta o evento acima dentro do foreach
            var tdNome = paciente.querySelector(".info-nome");
            console.log(tdNome);
            var nome   = tdNome.textContent;
            console.log(nome);
            var exressao = new RegExp(valueTyped, "i")
//            if(tdNome.textContent != valueTyped){
            if(!exressao.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        })
    }else{
        pacientes.forEach(function(paciente){
            paciente.classList.remove("invisivel");
        })
    }
});

