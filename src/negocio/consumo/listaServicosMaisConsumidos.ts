import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListaServicosMaisConsumidos extends Listagem{
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }
    listar(): void {
        let cliServico: any = [];
        this.clientes.map(cli =>{
            cli.getServicosConsumidos.forEach(ser =>{
                let nome = ser.getNomeS
                let qtd = cliServico[ser.getNomeS] = (cliServico[ser.getNomeS] || 0) + 1
                cliServico.push({
                    nome:nome,
                    quantidade:qtd
                })
            })
        })
        let ordenado = cliServico.sort( (x: { quantidade: number; }, y: { quantidade: number; })  => {
            return y.quantidade - x.quantidade }).slice(0, 1)
            console.log(`\nServiço mais consumido`);
            console.log("-------------------------------------------------------")
            ordenado.forEach((consumidos: { nome: string, quantidade: string}) => {
            console.log(`Nome:`+consumidos.nome);
            console.log(`Quantidade consumida:`+consumidos.quantidade);
        })

    }
}