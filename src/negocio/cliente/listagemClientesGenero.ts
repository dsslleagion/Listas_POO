import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemClientesGenero extends Listagem{
    private clientes: Array<Cliente>
    constructor(cliente: Array<Cliente>){
        super()
        this.clientes = cliente
    } 
    listar(): void {
        let feminino: Cliente[] = [];
        let masculino: Cliente[] = [];
       

        this.clientes.forEach(clientes => {
            if(clientes.genero === "M"){
                masculino.push(clientes)
            }
            if(clientes.genero === "F"){
                feminino.push(clientes)
            }
        })

    console.log("Listagem de clientes por gênero");
    console.log('      ');
    console.log('Clientes do gênero feminino:');
    console.log('      ');

        feminino.forEach(fem => {
            console.log(`Nome: ` + fem.nome);
            console.log(`Nome social: ` + fem.nomeSocial);
            console.log(`CPF: ` + fem.getCpf.getValor);
            console.log(`------------------`);
            console.log('      ');
          });

    console.log('Clientes do gênero masculino:');
    console.log('      ');

        masculino.forEach(mas => {
            console.log(`Nome: ` + mas.nome);
            console.log(`Nome social: ` + mas.nomeSocial);
            console.log(`CPF: ` + mas.getCpf.getValor);
            console.log(`-------------------`);
            console.log('      ');
          });
        
    }
}