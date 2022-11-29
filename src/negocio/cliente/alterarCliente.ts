import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import Telefone from "../../modelo/telefone"
import Alterar from "../alterar"

export default class AlterarCliente extends Alterar {
    private cliente: Array<Cliente>
    private entrada: Entrada
    constructor(cliente: Array<Cliente>) {
        super()
        this.cliente = cliente
        this.entrada = new Entrada()
    }
    alterar(): void {
        let nome = this.entrada.receberTexto(`Cliente que deseja alterar:`)
        let cliup = this.cliente.findIndex(cli => cli.nome == nome)
        let exe = true

        while (exe) {
            console.log(`\nOpções:`)
            console.log(`1- Nome do cliente`)
            console.log(`2- Nome social do ciente`)
            console.log(`3- Telefone do cliente`)
            console.log(`0- Voltar`)
            let opcao = this.entrada.receberNumero(`Digite uma das opções para atualizar o cliente: `);
            switch (opcao) {
                case 1:
                    let nome = this.entrada.receberTexto(`Digite o nome do cliente: `);
                    this.cliente[cliup].nome = nome
                    break;
                case 2:
                    let nomeSocial = this.entrada.receberTexto(`Digite o nome social do cliente: `);
                    this.cliente[cliup].nomeSocial = nomeSocial
                    break;
                case 3:
                    let ddd = this.entrada.receberTexto(`Digite o novo DDD: `);
                    let telefone = this.entrada.receberTexto(`Digite o novo número: `);
                    let tele = new Telefone(ddd, telefone)
                    this.cliente[cliup].addTelefones(tele);
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
