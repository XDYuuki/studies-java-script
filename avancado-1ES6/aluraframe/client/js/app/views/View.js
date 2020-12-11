class View{
    constructor(element){
        this._elemento = element;
    }

    template(){
        throw new Error("O método _template deve ser implementado."); //Quando não tem um _template criado na classe que herda de View este método será chamado
    }

    update(model){
        this._elemento.innerHTML = this.template(model);
    }
}