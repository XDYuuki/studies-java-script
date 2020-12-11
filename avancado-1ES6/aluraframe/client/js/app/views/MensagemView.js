class MensagemView extends View{  //MensagemView herda da classe View funções e contrutor
    constructor(elemento){
        super(elemento); //Envia o parametro recebido no contrutor para a classe superior (super), a classe Pai
    }

    template(model){
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>`: '<p></p>';
    }
}
