export default class Servico {
    nome: string
    preco: number
    constructor(nome:string,preco:number){
        this.nome = nome
        this.preco = preco
    }
    public get getNomeS():string{
        return this.nome
    }
    public get getPrecoS():number{
        return this.preco
    }
}