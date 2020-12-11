class ListaNegociacoes{
    constructor(/*contexto, */trap){
        this._negociacoes = [];
        this._trap        = trap;
        //this._contexto    = contexto;
    }

    adiciona(negociacoes){
        this._negociacoes.push(negociacoes);
        this._trap(this);
        //Reflect.apply(this._trap, this._contexto, [this]); //troca o contexto em que a função será executada. Troca o this. (função, contexto, [parametros])
    }

    get negociacoes(){
        return [].concat(this._negociacoes); //programação defensiva para evitar que a lista seja alterada enviando uma cópia dela
    }

    esvazia(){
        this._negociacoes = [];
        this._trap(this);
        //Reflect.apply(this._trap, this._contexto, [this]);
    }
}