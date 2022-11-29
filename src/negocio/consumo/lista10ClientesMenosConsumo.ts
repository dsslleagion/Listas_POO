import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";
export default class Lista10ClientesMenosConsumo extends Listagem{
    private clientes: Array <Cliente>
    constructor(clientes: Array <Cliente>){
        super()
        this.clientes = clientes
    }
    listar(): void {
        let nome, cpf, consumoT, ordenacao
        let consumidoQtd: any  = [];
        var i = 1
        this.clientes.forEach( cliente => {
            nome = cliente.nome;
            cpf = cliente.getCpf.getValor
            consumoT = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;
            consumidoQtd.push({
                nome: nome,
                cpf: cpf,
                quantidade: consumoT,
                posicao: i
            });
            i = i + 1 
        })
        ordenacao = consumidoQtd.sort((x, y) => {
            return y.quantidade - x.quantidade;
        })
        ordenacao.reverse()
        ordenacao = ordenacao.slice(0,10)
        console.log("Lista dos 10 clientes que menos consumiram produtos ou servicos em quantidade.");
        console.log(`\n--------------------------------------\n`);
        ordenacao.forEach( cliente => {
            console.log(`Nome do cliente:`+cliente.nome);
            console.log(`CPF do cliente:`+cliente.cpf );
            console.log(`Quantidade de produtos e servicos consumido pelo cliente:`+cliente.quantidade );
            console.log(`\n--------------------------------------\n`);
        })

    }
}