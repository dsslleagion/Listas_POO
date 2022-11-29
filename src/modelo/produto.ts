export default class Produto {
    nome: string
    preco:number
    constructor(nome:string,preco:number){
        this.nome = nome 
        this.preco = preco
    }
    public get getNomeP():string{
        return this.nome
    }
    public get getPrecoP():number{
        return this.preco
    }
}