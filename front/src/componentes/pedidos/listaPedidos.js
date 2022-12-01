import NavBar from "../barraNavegacao";
import { useEffect, useState } from "react";
import M from "materialize-css";
import axios from 'axios';
import { Link } from "react-router-dom";
import './pedidos.css';


function ListaPedidos() {

    const [pedidos, setPedidos] = useState([])


    const handlelistarPedidos = () => {
        axios.get('http://localhost:4000/pedido/listarPedidos').then((res) => {
            console.log(res.data)
            setPedidos(res.data)

        }).catch((erro) => {
            console.error('Erro', erro.response)
        })
    }


    useEffect(() => {
        M.AutoInit()
        handlelistarPedidos()
    }, [])



    return (
        <div>
            <NavBar></NavBar>
            <div className='container center'>
                <h4> <strong> Pedidos </strong> </h4>


                {pedidos.map(ped => (

                    <ul className="collapsible">
                        <Link id="testecor" key={ped.ped_id} to={`/pedido/${ped.ped_id}`}>
                            <li>
                                <div className="collapsible-header " ><i className="material-icons" href=""></i><div className="collection-item pointer ">Pedido de Id : {ped.ped_id} </div></div>
                                <div className="collapsible-body">

                                </div>
                            </li>
                        </Link>
                    </ul>
                ))}



                <div className="fixed-action-btn">

                    <a className="btn-floating btn-large waves-effect waves-light red lighten-2" href="/cadastroPedido"><i className="material-icons">add</i></a>


                </div>

            </div>
        </div>
    )


} export default ListaPedidos;