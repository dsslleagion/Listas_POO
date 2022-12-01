import 'materialize-css/dist/css/materialize.min.css'
import { useEffect , useState} from "react";
import M from "materialize-css";
import NavBar from "../barraNavegacao";
import axios from 'axios'

function CadastroPedido(){

    const [servicos,setServicos] = useState([]);
    const [produtos,setProdutos] = useState([]);
    const [clientes,setClientes] = useState([]);
    const [idCliente,setIdCliente] = useState();
    const [idProduto,setIdProduto] = useState();
    const [idServico,setIdServico] = useState();

    const ExeMaterializeSelect = () => {
        var elems = document.querySelectorAll("select");
        var instances = M.FormSelect.init(elems, Option);
    };

    // -- Lista de Produtos --
    const listarProdutos = () =>{
        axios.get(`http://localhost:4000/produto/listarProdutos`).then((res)=>{
            setProdutos(res.data); 
            ExeMaterializeSelect()

        }).catch((erro)=>{
            console.error('Erro', erro.response)
        }) 
    }

    // -- Lista de Servicos --
    const listarServicos = () =>{
        axios.get(`http://localhost:4000/servico/listarServicos`).then((res)=>{
            setServicos(res.data);
            ExeMaterializeSelect()

        }).catch((erro)=>{
            console.error('Erro', erro.response)
        }) 
    }

    // -- FIltrar Cliente por DI

    const getCliente = () => {
        axios.get(`http://localhost:4000/cliente/listarClientes`).then((res)=>{
            setClientes(res.data);
            ExeMaterializeSelect()

        }).catch((erro)=>{
            console.error('Erro', erro.response)
        }) 
    }

    const cadastraPedido = () => {
        let url = 'http://localhost:4000/pedido/cadastrarPedido'
        let obj = {
            cli_id:idCliente,
            prod_id:idProduto,
            serv_id:idServico
        }

        axios.post(url,obj).then((res)=>{
            setIdCliente("");
            setIdProduto("");
            setIdServico("");

        }).catch((erro)=>{
            console.error('Erro', erro.response)
        }) 
    }

    useEffect(() => { 
        M.AutoInit()
        listarProdutos()
        listarServicos()
        getCliente()
    }, [])

 
    useEffect(() => {
        M.AutoInit();
    });
 
        return (
        <div>                    
            <NavBar></NavBar>

            
            <div className='container'>
            <h4 className="center-align">Cadastrar Pedido</h4>
                <form className="col s12 formCli">
                    <div className="row">
                         <div className="input-field col s12 opcoes">     
                            <select defaultValue={0} onChange={e =>setIdCliente(e.target.value)}>
                                <option value="0" disabled>Selecione o Cliente</option>


                                {clientes.map(cli =>(
                                    <option key={cli.id} value={cli.id}>{cli.nome}</option>
                                ))}
                            </select>
                        </div> 
                    
                         <div className="input-field col s12 opcoes">     
                            <select defaultValue={0} onChange={ e =>setIdServico(e.target.value)}>
                                <option value="0" disabled>Selecione o Serviço</option>
                                {servicos.map(serv =>(
                            <option key={serv.id} value={serv.id}>{serv.nome_servico}</option>
                        ))}
                            </select>
                        </div> 

                        <div className="input-field col s12 opcoes">     
                            <select defaultValue={0} onChange={ e =>setIdProduto(e.target.value)}>
                                <option value="0" disabled>Selecione o Produto</option>
                                {produtos.map(prod => (
                                <option key={prod.id} value={prod.id}>{prod.nome_produto}</option>
                            ))}
                            </select>
                        </div>
                    </div>


                        <div className="row">
                        <div className="col s12">

                        <a className="waves-effect waves-light btn red lighten-2"  href="/listaPedidos" onClick={cadastraPedido} >Cadastrar Produto<i className="material-icons left">add</i></a>

                        </div>
                    </div>
                </form> 
            </div> 
        </div>
        
        )
    
}export default CadastroPedido;