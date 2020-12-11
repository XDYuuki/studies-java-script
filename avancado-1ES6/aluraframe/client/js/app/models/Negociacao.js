//Programações defensivas para garantir que a classe é imutavel!
class Negociacao {

    constructor(data, quantidade, valor){ // Quando usar e quando não usar o "new"?
        this._data = new Date(data.getTime());  // Programação defensiva! Cria uma nova data baseada no valor recebido. Evita que o valor seja alterado caso o objeto recebido no construtor seja alterado fora da classe, pois ele vem como referência para a data do construtor.
        this._quantidade = quantidade;  //O underline (_) indica para o programador que esses valores ó pode ser acessado pelos metodos da classe
        this._valor = valor;
        Object.freeze(this); //Congela a instância congelada
    }

// Metodos de acesso ------------------------------------------------------------
//funções dentro de classes é tomado o nome "método"
    get volume(){                               // o metodo get permite acessar este metodo como se fosse um parametro. Ex.: variavel.data;
        return this._quantidade * this._valor;
    }

    get data(){
        //return this._data;
        return new Date(this._data.getTime()); //Programação defensiva para evitar acesso a variavel do construtor. Retorna o novo objeto Data que recebe o valor da data do construtor. Qualquer alteração fora será feita na cópia!
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }
}