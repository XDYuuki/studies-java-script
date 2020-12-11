class Mensagem{

    constructor(texto = ''){ // Define um valor padrão para a entrada caso quando o objeto for criado o usuário não adicionar o texto
        this._texto = texto;
    }

    get texto(){
        return this._texto;
    }

    set texto(texto){
        this._texto = texto;
    }
}