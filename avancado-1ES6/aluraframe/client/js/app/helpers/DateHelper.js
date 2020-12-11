class DateHelper{

    constructor(){
        throw new Error('DateHelper não pode ser instanciada');  //indica para o desenvolvedor quando tentar criar um objeto instanciado dessa casse.
    }

    static stringToDate(string){  //É declarado static para poder chamar o metodo direto da classe. Sem precisar criar um objeto instanciado para isso. Ex.: DateHelper.stringToDate();

        if( !/\d{4}-\d{2}-\d{2}/.test(string) ){ //expressão regular que garante que o texto tem um número de 4 dígitos seguido de hífen, seguido 2 digitos, hífen, 2 dígitos
            throw new Error('Deve estar no formato aaaa-mm-dd');
        }
        return new Date(...string.split('-').map((item, indice) => item - indice % 2));
    }

    static dateToString(date){
/*
        return date.getDate()       // Usando concatenação 
               + '/' + (date.getMonth()+1)
               + '/' + date.getFullYear();
*/
        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`; //Using Template String
    }
}