class NegociacoesView extends View{

    constructor(elemento){  //Elemento do DOM que vai receber o template
        super(elemento); //Envia o parametro recebido no contrutor para a classe superior (super), a classe Pai
    }

    template(model){
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${model.negociacoes.map( n => {
                        return `
                            <tr>
                                <td>${DateHelper.dateToString(n.data)}</td>
                                <td>${n.quantidade}</td>
                                <td>${n.valor}</td>
                                <td>${n.volume}</td>
                            </tr>
                        `
                    }).join('')}
                </tbody>
                
                <tfoot>
                    <td colspan="3">TOTAL</td>
                    <td>
                    ${model.negociacoes.reduce((total, n) => total + n.volume, 0.0)}                    
                    </td>
                </tfoot>
            </table>
        `;
    }// O join concatena todos os itens de um array em uma string
/*
    update(model){  // Este método será herdado da classe Pai (View)
        this._elemento.innerHTML = this._template(model);
    }
    */
}

// ${model.negociacoes.reduce((total, n) => total + n.volume, 0.0)} primeiro parametro do reduce é a arrow function, ou função anônima e o segundo é o valor inicial de total
/*  Conteúdo da td de total
(function(){
    let total = 0;
    model.negociacoes.forEach(element => total += element.volume);
    return total;
})() //IIFE
*/