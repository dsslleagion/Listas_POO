import Produto from "../../modelo/produto";
import Listagem from "../listagem";


export default class ListagemProduto extends Listagem{
    private produtos:Array<Produto>
    constructor(produtos:Array<Produto>){
        super()
        this.produtos = produtos
    }
    listar(): void {
        console.log(`\nListar de todos os produtos: `);
        console.log(`--------------------------------------`);
        this.produtos.forEach(produto =>{
            console.log(`Nome:` + produto.nome);
            console.log(`Preço R$:` + produto.preco) 

            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
        
    }
}
