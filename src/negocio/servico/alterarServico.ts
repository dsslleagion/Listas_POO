import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Alterar from "../alterar";

export default class AlterarServico extends Alterar{
    private servico:Array<Servico>
    private entrada: Entrada
    constructor(servico:Array<Servico>){
        super();
        this.servico = servico
        this.entrada = new Entrada()
    }
    alterar(): void {
        let nome = this.entrada.receberTexto(`Serviço que deseja alterar:`)
        let serup = this.servico.findIndex(ser => ser.nome == nome)
        let exe = true

        while (exe){
            console.log(`\nOpções:`)
            console.log(`1- Nome do serviço`)
            console.log(`2- Preço do serviço`)
            console.log(`0- Voltar`)
            let opcao = this.entrada.receberNumero(`Digite uma das opções para atualizar o serviço: `);
            switch (opcao) {
                case 1:
                    let nome = this.entrada.receberTexto(`Digite o novo nome do serviço: `);
                    this.servico[serup].nome = nome
                    break;
                case 2:
                    let preco = this.entrada.receberNumero(`Digite o novo preço do serviço: `);
                    this.servico[serup].preco = preco
                    break;                    
                case 0:
                    exe = false
                    console.log(`Obrigado.`);
                    break;
                default:
                    console.log(`Digite uma opção válida.`);
            }
        }
    }

}