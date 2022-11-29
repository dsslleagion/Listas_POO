import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Excluir from "../excluir";

export default class ExcluirProduto extends Excluir{
    private produto: Array <Produto>
    private entrada: Entrada
    constructor(produto: Array <Produto>){
        super();
        this.produto = produto
        this.entrada = new Entrada()    
    }
    excluir(): void {
        console.log("\nExcluir produto");
        let nome = this.entrada.receberTexto(`Nome do produto que deseja excluir:`)
        let proEx = this.produto.find(pro => nome == pro.nome)
        if (proEx != undefined) {
            let index = this.produto.indexOf(proEx)
            this.produto.splice(index, 1);
            console.log("\nProduto excluido!");

        }
        else
            console.log("\nProduto não encontrado!");
    }
    
}