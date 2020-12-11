class NegociacaoController {

    constructor() {
        let $                  = document.querySelector.bind(document);  // $ se torna a função querySelector. bind: associa o this do querySelector a ligação (bind) que e o document
        this._inputData        = $("#data");
        this._inputQuantidade  = $("#quantidade");
        this._inputValor       = $("#valor");
        this._listaNegociacoes = new ListaNegociacoes(/*this, */(model) => this._negociacaoView.update(model)); // o escopo do this de uma arrow function não muda de acordo com o contexto. Ecopo lexico
        this._negociacaoView   = new NegociacoesView($("#negociacoesView"));
        this._negociacaoView.update(this._listaNegociacoes) ; 
        this._mensagem         = new Mensagem();
        this._mensagemView     = new MensagemView($("#mensagemView"));
        this._mensagemView.update(this._mensagem);

        Object.freeze(this);
    }

    adiciona(event){
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = "Negociação adicionada com sucesso!";
        this._mensagemView.update(this._mensagem);
        //this._negociacaoView.update(this._listaNegociacoes) ; chamada como trap em List negociações
        this._limpaFormulario();
    }

    apaga(){
        this._listaNegociacoes.esvazia();
        //this._negociacaoView.update(this._listaNegociacoes);

        this._mensagem.texto = 'Negociações apagadas com sucesso!';
        this._mensagemView.update(this._mensagem);
    }

    _criaNegociacao(){
        return new Negociacao( DateHelper.stringToDate(this._inputData.value),
                               this._inputQuantidade.value,
                               this._inputValor.value);
    }

    _limpaFormulario(){
        this._inputData.value       = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value      = 0.0;

        this._inputData.focus();
    }
}