import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf"
import RG from "../../modelo/rg"
import Telefone from "../../modelo/telefone"
import Cadastro from "../cadastro"


export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `);
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `);
        let genero = this.entrada.receberTexto(`Por favor informe o seu genero (F-Feminino) (M-Masculino): `)
        let valorcpf = this.entrada.receberTexto(`Por favor informe o número do CPF: `); 
        let datacpf = this.entrada.receberTexto(`Por favor informe a data de emissão do CPF, no padrão dd/mm/yyyy: `);
        let valorrg = this.entrada.receberTexto(`Por favor informe o número do RG: `); 
        let datarg = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
        let ddd = this.entrada.receberTexto(`Por favor informe o DDD do telefone:`);
        let numero = this.entrada.receberTexto(`Por favor informe o número do telefone:`);

        let partesData = datacpf.split('/')
        let anocpf = new Number(partesData[2].valueOf()).valueOf()
        let mescpf = new Number(partesData[1].valueOf()).valueOf()
        let diacpf = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissaocpf = (diacpf + '/' + mescpf + '/' + anocpf);
        let cpf = new CPF(valorcpf, dataEmissaocpf);

        partesData = datarg.split('/')
        let anorg = new Number(partesData[2].valueOf()).valueOf()
        let mesrg = new Number(partesData[1].valueOf()).valueOf()
        let diarg = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissaorg = (diarg + '/' + mesrg + '/' + anorg);
        let rg = new RG(valorrg, dataEmissaorg);
        
        let cliente = new Cliente(nome, nomeSocial,genero, cpf);
        let tele = new Telefone(ddd, numero)
        cliente.addRgs(rg)
        cliente.addTelefones(tele)

        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);

    }
}