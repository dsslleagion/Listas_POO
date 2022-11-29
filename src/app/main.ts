import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa"
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import AlterarCliente from "../negocio/cliente/alterarCliente";
import CadastroCliente from "../negocio/cliente/cadastroCliente";
import ExcluirCliente from "../negocio/cliente/excluirCliente";
import ListagemClientes from "../negocio/cliente/listagemClientes";
import ListagemClientesGenero from "../negocio/cliente/listagemClientesGenero";
import ConsumoCliente from "../negocio/consumo/consumoCliente";
import Lista10ClientesMaisConsumo from "../negocio/consumo/lista10ClientesMaisConsumo";
import Lista10ClientesMenosConsumo from "../negocio/consumo/lista10ClientesMenosConsumo";
import Lista5ClientesMaisValor from "../negocio/consumo/lista5ClientesMaisValor";
import ListaGeneroConsumo from "../negocio/consumo/listaGeneroConsumo";
import ListaProdutosMaisConsumidos from "../negocio/consumo/listaProdutosMaisConsumidos";
import ListaServicosMaisConsumidos from "../negocio/consumo/listaServicosMaisConsumidos";
import AlterarProduto from "../negocio/produto/alterarProduto";
import CadastroProduto from "../negocio/produto/cadastroProduto";
import ExcluirProduto from "../negocio/produto/excluirProduto";
import ListagemProduto from "../negocio/produto/listagemProdutos";
import AlterarServico from "../negocio/servico/alterarServico";
import CadastroServiso from "../negocio/servico/cadastroServico";
import ExcluirServico from "../negocio/servico/excluirServico";
import ListagemServicos from "../negocio/servico/listagemServicos";

let empresa = new Empresa()
let execucao = true

let cliente1 = new Cliente(`Andre`,`Dede`,`M`, new CPF(`53452432`,`21/10/2002`))
let cliente2 = new Cliente(`Jose`,`Jo`,`M`, new CPF(`534525`,`22/11/2005`))
let cliente3 = new Cliente(`Gabriel`,`Coutinho`,`M`, new CPF(`63634`,`01/10/2003`))
let cliente4 = new Cliente(`Matheus`,`Matus`,`M`, new CPF(`534564536`,`25/02/2000`))
let cliente5 = new Cliente(`Pedro`,`Pedro`,`M`, new CPF(`86756734`,`11/11/1999`))
let cliente6 = new Cliente(`Marcelo`,`Antonio`,`M`, new CPF(`3241443`,`13/10/2001`))
let cliente7 = new Cliente(`Otaviano`,`Otavio`,`M`, new CPF(`412341`,`29/10/2004`))
let cliente8 = new Cliente(`Davi`,`Davi`,`M`, new CPF(`32313343`,`31/10/2002`))
let cliente9 = new Cliente(`Joao`,`Joao`,`M`, new CPF(`7567447`,`21/05/1998`))
let cliente10 = new Cliente(`Everton`,`Estilo`,`M`, new CPF(`365363`,`26/06/1990`))
let cliente11 = new Cliente(`Dionisio`,`Leao`,`M`, new CPF(`87658434`,`08/04/1992`))
let cliente12 = new Cliente(`Diego`,`Surucao`,`M`, new CPF(`00563563`,`09/11/2005`))
let cliente13 = new Cliente(`Diogo`,`Diego`,`M`, new CPF(`3634564`,`04/12/1986`))
let cliente14 = new Cliente(`Carlos`,`Carlos`,`M`, new CPF(`1342435`,`21/01/1995`))
let cliente15 = new Cliente(`Eduardo`,`Edu`,`M`, new CPF(`7456745`,`05/02/1993`))
let cliente16 = new Cliente(`Luzia`,`Lu`,`F`, new CPF(`636453654`,`06/03/1980`))
let cliente17 = new Cliente(`Lucia`,`Lu`,`F`, new CPF(`8768678`,`07/05/1970`))
let cliente18 = new Cliente(`Bruna`,`Bruna`,`F`, new CPF(`63634567`,`11/06/1976`))
let cliente19 = new Cliente(`Maria`,`Ma`,`F`, new CPF(`96879685`,`13/07/1989`))
let cliente20 = new Cliente(`Ana`,`Aninha`,`F`, new CPF(`52452540`,`17/08/1990`))
let cliente21 = new Cliente(`Clara`,`Clara`,`F`, new CPF(`59687967`,`28/10/1996`))
let cliente22 = new Cliente(`Julia`,`Ju`,`F`, new CPF(`00453453`,`19/09/1990`))
let cliente23 = new Cliente(`Carla`,`Carla`,`F`, new CPF(`58785876`,`29/02/2002`))
let cliente24 = new Cliente(`Amanda`,`Mandinha`,`F`, new CPF(`52352355`,`24/05/2002`))
let cliente25 = new Cliente(`Fernanda`,`Fe`,`F`, new CPF(`74567764`,`22/03/1990`))
let cliente26 = new Cliente(`Nathalia`,`Nat`,`F`, new CPF(`53452432`,`06/01/1980`))
let cliente27 = new Cliente(`Mariana`,`Mari`,`F`, new CPF(`76457654`,`07/03/1989`))
let cliente28 = new Cliente(`Vitoria`,`Vi`,`F`, new CPF(`98796987`,`10/04/2002`))
let cliente29 = new Cliente(`Samira`,`Samira`,`F`, new CPF(`00066645`,`14/09/1985`))
let cliente30 = new Cliente(`Ingrid`,`Ingrid`,`F`, new CPF(`35346565`,`03/08/2002`))

empresa.getClientes.push(cliente1)
empresa.getClientes.push(cliente2)
empresa.getClientes.push(cliente3)
empresa.getClientes.push(cliente4)
empresa.getClientes.push(cliente5)
empresa.getClientes.push(cliente6)
empresa.getClientes.push(cliente7)
empresa.getClientes.push(cliente8)
empresa.getClientes.push(cliente9)
empresa.getClientes.push(cliente10)
empresa.getClientes.push(cliente11)
empresa.getClientes.push(cliente12)
empresa.getClientes.push(cliente13)
empresa.getClientes.push(cliente14)
empresa.getClientes.push(cliente15)
empresa.getClientes.push(cliente16)
empresa.getClientes.push(cliente17)
empresa.getClientes.push(cliente18)
empresa.getClientes.push(cliente19)
empresa.getClientes.push(cliente20)
empresa.getClientes.push(cliente21)
empresa.getClientes.push(cliente22)
empresa.getClientes.push(cliente23)
empresa.getClientes.push(cliente24)
empresa.getClientes.push(cliente25)
empresa.getClientes.push(cliente26)
empresa.getClientes.push(cliente27)
empresa.getClientes.push(cliente28)
empresa.getClientes.push(cliente29)
empresa.getClientes.push(cliente30)


let produto1 = new Produto("Pomada", 20)
let produto2 = new Produto("Condicionador", 25)
let produto3 = new Produto("Acetona", 3)
let produto4  = new Produto("Esmalte", 5)
let produto5 = new Produto("Creme", 30)
let produto6 = new Produto("Gel", 15) 
let produto7 = new Produto("Lixa", 2)
let produto8 = new Produto("Shampoo", 12)
let produto9 = new Produto("Algodao", 5)
let produto10 = new Produto("Cilios postiços", 15)

empresa.getProdutos.push(produto1)
empresa.getProdutos.push(produto2)
empresa.getProdutos.push(produto3)
empresa.getProdutos.push(produto4)
empresa.getProdutos.push(produto5)
empresa.getProdutos.push(produto6)
empresa.getProdutos.push(produto7)
empresa.getProdutos.push(produto8)
empresa.getProdutos.push(produto9)
empresa.getProdutos.push(produto10)


let servico1 = new Servico("Corte", 20)
let servico2 = new Servico("Sobrancelha", 20)
let servico3 = new Servico("Busto", 15)
let servico4 = new Servico("Unha", 15)
let servico5 = new Servico("Axila", 20)
let servico6 = new Servico("Limpesa de pele", 35)
let servico7 = new Servico("Chapinha", 18)
let servico8 = new Servico("Progressiva", 200)
let servico9 = new Servico("Pintar o cabelo", 50)
let servico10 = new Servico("Ulha postiça", 35)

empresa.getServicos.push(servico1)
empresa.getServicos.push(servico2)
empresa.getServicos.push(servico3)
empresa.getServicos.push(servico4)
empresa.getServicos.push(servico5)
empresa.getServicos.push(servico6)
empresa.getServicos.push(servico7)
empresa.getServicos.push(servico8)
empresa.getServicos.push(servico9)
empresa.getServicos.push(servico10)

cliente1.addProduto(produto1)
cliente3.addProduto(produto5)
cliente5.addProduto(produto6)
cliente7.addProduto(produto8)
cliente9.addProduto(produto1)
cliente6.addProduto(produto5)
cliente1.addProduto(produto5)
cliente16.addProduto(produto2)
cliente17.addProduto(produto10)
cliente22.addProduto(produto4)
cliente30.addProduto(produto9)



cliente1.addServicos(servico1)
cliente2.addServicos(servico1)
cliente6.addServicos(servico1)
cliente15.addServicos(servico9)
cliente16.addServicos(servico2)
cliente16.addServicos(servico4)
cliente19.addServicos(servico6)
cliente23.addServicos(servico7)
cliente24.addServicos(servico10)
cliente28.addServicos(servico5)
cliente30.addServicos(servico2)




console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Cadastrar serviço`);
    console.log(`3 - Cadastrar produto`);
    console.log(`4 - Listar todos os clientes`);
    console.log(`5 - Listar todos os serviços`);
    console.log(`6 - Listar todos os produtos`);
    console.log(`7 - Alterar cliente`);
    console.log(`8 - Alterar serviço`);
    console.log(`9 - Alterar produto`);
    console.log(`10 - Excluir cliente`);
    console.log(`11 - Excluir serviço`);
    console.log(`12 - Excluir produto`);
    console.log(`13 - Adicionar serviços/produtos`);
    console.log(`14 - Serviços mais consumido`);
    console.log(`15 - Produtos mais consumido`);
    console.log(`16 - Lista dos 10 clientes que mais consumiram em quantidade`);
    console.log(`17 - Lista dos 10 clientes que menos consumiram em quantidade`);
    console.log(`18 - Listagem dos 5 clientes que mais consumiram em valor`);
    console.log(`19 - Listagem de todos os clientes por gênero`);
    console.log(`20 - Listagem dos serviços ou produtos mais consumidos por gênero`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastroC = new CadastroCliente(empresa.getClientes)
            cadastroC.cadastrar()
            break;
        case 2:
            let cadastroS = new CadastroServiso(empresa.getServicos)
            cadastroS.cadastrar()
            break;
        case 3:
            let cadastroP = new CadastroProduto(empresa.getProdutos)
            cadastroP.cadastrar()
            break;

        case 4:
            let listagemC = new ListagemClientes(empresa.getClientes)
            listagemC.listar()
            break;
        case 5:
            let listagemS = new ListagemServicos(empresa.getServicos)
            listagemS.listar()
            break;
        case 6:
            let listagemP = new ListagemProduto(empresa.getProdutos)
            listagemP.listar()
            break;
        case 7:
            let alterarC = new AlterarCliente(empresa.getClientes)
            alterarC.alterar()
            break;
        case 8:
            let alterarS = new AlterarServico(empresa.getServicos)
            alterarS.alterar()
            break;
        case 9:
            let alterarP = new AlterarProduto(empresa.getProdutos)
            alterarP.alterar()
            break;
        case 10:
            let excluirC = new ExcluirCliente(empresa.getClientes)
            excluirC.excluir()
            break;
        case 11:
            let excluirS = new ExcluirServico(empresa.getServicos)
            excluirS.excluir()
            break;
        case 12:
            let excluirP = new ExcluirProduto(empresa.getProdutos)
            excluirP.excluir()
            break;
        case 13:
            let adicionar = new ConsumoCliente(empresa)
            adicionar.cadastrar()
            break;
        case 14:
            let listaServicos = new ListaServicosMaisConsumidos(empresa.getClientes)
            listaServicos.listar()
            break;
        case 15:
            let listaProdutos = new ListaProdutosMaisConsumidos(empresa.getClientes)
            listaProdutos.listar()
            break;
        case 16:
            let lista10Mais = new Lista10ClientesMaisConsumo(empresa.getClientes)
            lista10Mais.listar()
            break;
        case 17:
            let lista10Menos = new Lista10ClientesMenosConsumo(empresa.getClientes)
            lista10Menos.listar()
            break;
        case 18:
            let lista5MaisValor = new Lista5ClientesMaisValor(empresa.getClientes)
            lista5MaisValor.listar()
            break;
        case 19:
            let listaGenero = new ListagemClientesGenero(empresa.getClientes)
            listaGenero.listar()
            break;
        case 20:
            let listaGeneroConsumo = new ListaGeneroConsumo(empresa.getClientes)
            listaGeneroConsumo.listar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}