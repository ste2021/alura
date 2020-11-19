class Negociacao {

    constructor(data, quantidade, valor){

        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        
        Object.freeze(this);
    }
    //funcção dentro de classe é chamada de método
         get volume(){
         return this._quantidade * this._valor;
    }
///esses métodos podem acessar os atributos privados __*
         get data(){
             return new Date(this._data.getTime());
         }
         get quantidade(){
             return this._quantidade;
         }
         get valor(){
             return this._valor;
         }
}