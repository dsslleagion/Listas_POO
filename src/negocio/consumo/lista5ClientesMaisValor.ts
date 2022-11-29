import Cliente from "../../modelo/cliente"
import Listagem from "../listagem"

export default class Lista5ClientesMaisValor extends Listagem{
    private clientes: Array<Cliente>
    constructor( clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }
    listar(): void {
        let consumidoQtd: any = []
        this.clientes.forEach( cliente => {
            let cpf = cliente.getCpf.getValor;
            let nome = cliente.nome
            let nomeSocial = cliente.nomeSocial
            let consumoT : number=0      
            cliente.getProdutosConsumidos.forEach((produto)=>{
                consumoT = consumoT + produto.getPrecoP
            })
            cliente.getServicosConsumidos.forEach((servico)=>{
                consumoT = consumoT + servico.getPrecoS
            })
            consumidoQtd.push({
                nome: nome,
                cpf: cpf,
                nomeSocial: nomeSocial,
                quantidade: consumoT
            })
        })
        consumidoQtd = consumidoQtd.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
            return b.quantidade - a.quantidade;
          });
          consumidoQtd = consumidoQtd.slice(0, 5);
            console.log("Os 5 clientes que mais consumiram em valor: ");
            console.log("\n-------------------------------------------------------\n");
            consumidoQtd.forEach((cliente: { cpf: string; nome: string; nomeSocial: string; quantidade: any }) => {
                console.log(`CPF:`+ cliente.cpf);
                console.log(`Nome do cliente:`+cliente.nome);
                console.log(`Nome social:`+cliente.nomeSocial);
                console.log(`Valor consumido:R$`+cliente.quantidade);
                console.log(`-----------------------------------`);
            })
    }
    

    
}