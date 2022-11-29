import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto"
import Alterar from "../alterar"


export default class AlterarProduto extends Alterar{
    private produto:Array<Produto>
    private entrada:Entrada
    constructor(produto:Array<Produto>){
        super()
        this.produto = produto
        this.entrada = new Entrada()
    }
    alterar(): void {
        let nome = this.entrada.receberTexto(`Produto que deseja alterar:`)
        let proup = this.produto.findIndex(pro => pro.nome == nome)
        let exe = true

        while (exe){
            console.log(`\nOpções:`)
            console.log(`1- Nome do produto`)
            console.log(`2- Preço do produto`)
            console.log(`0- Voltar`)
            let opcao = this.entrada.receberNumero(`Digite uma das opções para atualizar o produto: `);
            switch (opcao) {
                case 1:
                    let nome = this.entrada.receberTexto(`Digite o novo nome do produto: `);
                    this.produto[proup].nome = nome
                    break;
                case 2:
                    let preco = this.entrada.receberNumero(`Digite o novo preço do produto: `);
                    this.produto[proup].preco = preco
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