import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import Empresa from "../../modelo/empresa"
import Servico from "../../modelo/servico"
import Cadastro from "../cadastro"

export default class ConsumoCliente extends Cadastro {
    private entrada: Entrada
    public selC?: Cliente
    public empresa: Empresa
    public selO?: Servico
    constructor(empresa: Empresa) {
        super()
        this.entrada = new Entrada()
        this.empresa = empresa

    }
    cadastrar(): void {
        const nome = this.entrada.receberTexto('Informe o nome do cliente: ')
        this.selC = this.empresa.getClientes.find(cli => cli.nome === nome)        
        let execucao = true;
        while(execucao){
            console.log("----------------------");
            console.log(`Opeção de consumo.`);
            console.log(`1 - Produto`);
            console.log(`2 - Serviço`);
            console.log(`0 - Sair`);           
            let opcao = this.entrada.receberNumero('Insira a opção:  ')
            switch(opcao){
                case 1:
                    let nomeProduto = this.entrada.receberTexto('Informe o nome do produto: ');
                    let produto = this.empresa.getProdutos.find(pro =>pro.nome  === nomeProduto)
                    this.selC?.addProduto(produto)
                    break;
                case 2:
                    const nomeServico = this.entrada.receberTexto('Informe o nome do serviço:  ')
                    this.selO = this.empresa.getServicos.find(ser => ser.nome === nomeServico)
                    console.log(this.selO?.nome);
                    this.selC?.addServicos(this.selO)
                    break;
                case 0:
                    execucao = false
                    console.log(`Obrigado!`)
                    break;
                default:
                    console.log(`Digite uma opção válida!`);    
            }       
        }
        console.log(`\nAdicionado com sucesso`);

    }
}