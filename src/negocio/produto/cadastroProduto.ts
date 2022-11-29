import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto"
import Cadastro from "../cadastro"


export default class CadastroProduto extends Cadastro{
    private produto:Array<Produto>
    private entrada:Entrada
    constructor(produto:Array<Produto>){
        super()
        this.produto = produto
        this.entrada = new Entrada()
    }
    cadastrar(): void {
        console.log(`\nInício do cadastro de produto`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto:`);
        let preco = this.entrada.receberNumero(`Por favor informar o preço do produto:`)
        let produto = new Produto(nome,preco);
        this.produto.push(produto)
        console.log(`\nCadastro concluído :\n`);
        
    }
}