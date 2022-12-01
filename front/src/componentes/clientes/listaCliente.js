import 'materialize-css/dist/css/materialize.min.css'
import NavBar from "../barraNavegacao";
import { useEffect, useState } from "react";
import M from "materialize-css";
import axios from 'axios';
import { Link } from 'react-router-dom';

function ListaCliente(props) {


    const [clientes, setClientes] = useState([])

    const handlelistarClientes = () => {
        axios.get('http://localhost:4000/cliente/listarClientes').then((res) => {
            setClientes(res.data)
        }).catch((erro) => {
            console.error('Erro', erro.response)
        })
    }


    useEffect(() => {
        M.AutoInit();
        handlelistarClientes()
    });

    const handledeletarCliente = (id) =>{
        console.log(id)
        axios.delete(`http://localhost:4000/cliente/deletarCliente/${id}`).then((res)=>{


        }).catch((erro)=>{
            console.log("Vai Brasil")
            console.error('Erro', erro.response);
        }) 

    }


    return (
        <div>
            <NavBar></NavBar>
            <div className='container center'>
                <h4> <strong> Clientes </strong> </h4>

               
                    {clientes.map(cli => (


                        <div>


                            <ul className="collapsible">

                                <li>
                                    <div className="collapsible-header "><i className="material-icons"></i>{cli.nome}</div>
                                    <div className="collapsible-body">

                                        <div className="input-field col s6">
                                            <input disabled id="id_servico" type="text" className="validate" value={cli.id} />
                                            <label className="active" htmlFor="id_servico">Id:</label>
                                        </div>

                                        <div className="input-field col s6">
                                            <input disabled id="nome_servico" type="text" className="validate" value={cli.nome_social} />
                                            <label className="active" htmlFor="nome_servico">Nome social:</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input disabled id="nome_servico" type="text" className="validate" value={cli.sexo} />
                                            <label className="active" htmlFor="nome_servico">Sexo:</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input disabled id="nome_servico" type="text" className="validate" value={cli.cpf} />
                                            <label className="active" htmlFor="nome_servico">CPF:</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input disabled id="nome_servico" type="text" className="validate" value={cli.rg} />
                                            <label className="active" htmlFor="nome_servico">RG:</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input disabled id="nome_servico" type="text" className="validate" value={cli.telefone} />
                                            <label className="active" htmlFor="nome_servico">Telefone:</label>
                                        </div>


                                        <div className="row">

                                            <button className="btn-floating btn-large waves-effect waves-light red lighten-2 right" type="submit" name="action"  onClick={() => handledeletarCliente(cli.id)}><i className="material-icons">delete</i></button>

                                            <Link to={`/alterarCliente/${cli.id}`}>
                                                <button className="btn-floating btn-large waves-effect waves-light red lighten-2 right" type="submit" name="action"><i className="material-icons">mode_edit</i></button>
                                            </Link>


                                        </div>
                                      
                                    </div>
                                </li>

                            </ul>
                        </div>





                    ))}


                


            </div>

            <div className="fixed-action-btn">

                <a className="btn-floating btn-large waves-effect waves-light red lighten-2" href="/cadastroCliente"><i className="material-icons">add</i></a>
              

            </div>
        </div>


    )

} export default ListaCliente;