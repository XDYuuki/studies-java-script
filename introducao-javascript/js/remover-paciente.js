var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
//this é o dono do evento ( tabela nesse caso), event.target é quem sofreu o evento em si
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){                      //Seta um timer para chamar a função após o tempo definido
        event.target.parentNode.remove();
    },500);                                      // 500ms
});










