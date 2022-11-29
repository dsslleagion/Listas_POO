import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Excluir from "../excluir";

export default class ExcluirServico extends Excluir{
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>){
        super();
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    excluir(): void {
        console.log("\nExcluir serviço:");

        let nome = this.entrada.receberTexto(`Serviço que deseja excluir:`)
        let serEx = this.servicos.find(ser => nome == ser.nome)
        if (serEx != undefined) {
            let index = this.servicos.indexOf(serEx)
            this.servicos.splice(index, 1);
            console.log("\nServiço excluido!");

        }
        else
            console.log("\nServiço não encontrado!");
    }
}