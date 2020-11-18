class Negociacao {

    constructor(data, quantidade, valor){

        this._data = data;
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
             return this._data;
         }
         get quantidade(){
             return this._quantidade;
         }
         get valor(){
             return this._valor;
         }
}