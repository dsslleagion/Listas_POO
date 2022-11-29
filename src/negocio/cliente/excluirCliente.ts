import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Excluir from "../excluir";

export default class ExcluirCliente extends Excluir{
    private clientes: Array <Cliente>
    private entrada: Entrada
    constructor(clientes: Array <Cliente>){
        super();
        this.clientes = clientes
        this.entrada = new Entrada()    
    }
    excluir(): void {
        console.log("\nExcluir cliente");
        let nome = this.entrada.receberTexto(`Nome do cliente que deseja excluir:`)
        let cliEx = this.clientes.find(cli => nome == cli.nome)
        if (cliEx != undefined) {
            let index = this.clientes.indexOf(cliEx)
            this.clientes.splice(index, 1);
            console.log("\nCliente excluido!");

        }
        else
            console.log("\nCliente não encontrado!");
    }
    
}