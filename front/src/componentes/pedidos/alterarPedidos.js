import { Link } from "react-router-dom";
import NavBar from "../barraNavegacao";
import { useEffect, useState } from "react";
import M from "materialize-css";
import axios from 'axios'
import { useParams } from "react-router-dom";

function AlterarPedido() {

    // const [servicos,setServicos] = useState([]);
    // const [produtos,setProdutos] = useState([]);
    // const [clientes,setClientes] = useState([]);
    // const [idCliente,setIdCliente] = useState();
    // const [idProduto,setIdProduto] = useState();
    // const [idServico,setIdServico] = useState();

    // const ExeMaterializeSelect = () => {
    //     var elems = document.querySelectorAll("select");
    //     var instances = M.FormSelect.init(elems, Option);
    // };

    //  // -- Lista de Produtos --
    //  const listarProdutos = () =>{
    //     axios.get(`http://localhost:4000/produto/listarProdutos`).then((res)=>{
    //         setProdutos(res.data); 
    //         ExeMaterializeSelect()

    //     }).catch((erro)=>{
    //         console.error('Erro', erro.response)
    //     }) 
    // }

    // // -- Lista de Servicos --
    // const listarServicos = () =>{
    //     axios.get(`http://localhost:4000/servico/listarServicos`).then((res)=>{
    //         setServicos(res.data);
    //         ExeMaterializeSelect()

    //     }).catch((erro)=>{
    //         console.error('Erro', erro.response)
    //     }) 
    // }

    // // -- FIltrar Cliente por DI

    // const getCliente = () => {
    //     axios.get(`http://localhost:4000/cliente/listarClientes`).then((res)=>{
    //         setClientes(res.data);
    //         ExeMaterializeSelect()

    //     }).catch((erro)=>{
    //         console.error('Erro', erro.response)
    //     }) 
    // }


    // const handlelistarServicos = () => {
    //     axios.get('http://localhost:4000/servico/listarServicos').then((res) => {
    //         setServico(res.data)
    //     }).catch((erro) => {
    //         console.error('Erro', erro.response)
    //     })
    // }

    useEffect(() => {
        M.AutoInit();
    });

    return (
        <div>
            <NavBar></NavBar>

            <div className='container'>
                <h4 className="center-align">Atualizar Pedido</h4>
                <form className="col s12 formCli">
                    <div className="row">
                        <div className="input-field col s12 opcoes">
                            <select>
                                <option value="0">Selecione o Cliente</option>
                            </select>
                        </div>

                        <div className="input-field col s12 opcoes">
                            <select>
                                <option value="1">Selecione o Serviço</option>
                            </select>
                        </div>

                        <div className="input-field col s12 opcoes">
                            <select>
                                <option value="2">Selecione o Produto</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">

                            <a className="waves-effect waves-light btn red lighten-2" href="/listaPedidos" >Atualizar Pedido<i className="material-icons left">send</i></a>

                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}export default AlterarPedido;
