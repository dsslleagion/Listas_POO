import Entrada from "../../io/entrada"
import Servico from "../../modelo/servico"
import Cadastro from "../cadastro"

export default class CadastroServiso extends Cadastro{
    private servico:Array<Servico>
    private entrada:Entrada
    constructor(servico:Array<Servico>){
        super()
        this.servico = servico
        this.entrada = new Entrada()

    }
    cadastrar(): void {
        console.log(`\nInício do cadastro do serviço`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `)
        let preco = this.entrada.receberNumero(`Por favor informe o preço do serviço: `)
        let servico = new Servico(nome,preco);
        this.servico.push(servico)
        console.log(`\nCadastro concluído:)\n`);
    }
}