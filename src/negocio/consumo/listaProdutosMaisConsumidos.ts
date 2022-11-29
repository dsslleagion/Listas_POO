import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListaProdutosMaisConsumidos extends Listagem{
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }
    listar(): void {
        let cliProduto: any = [];
        this.clientes.map(cli =>{
            cli.getProdutosConsumidos.forEach(ser =>{
                let nome = ser.getNomeP
                let qtd = cliProduto[ser.getNomeP] = (cliProduto[ser.getNomeP] || 0) + 1
                cliProduto.push({
                    nome:nome,
                    quantidade:qtd
                })
            })
        })
        let ordenado = cliProduto.sort( (x: { quantidade: number; }, y: { quantidade: number; })  => {
            return y.quantidade - x.quantidade }).slice(0, 1)
            console.log(`\nProdutos mais consumido`);
            console.log("-------------------------------------------------------")
            ordenado.forEach((consumidos: { nome: string, quantidade: string}) => {
            console.log(`Nome:`+consumidos.nome);
            console.log(`Quantidade consumida:`+consumidos.quantidade);
        })

    }
}