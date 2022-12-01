import 'materialize-css/dist/css/materialize.min.css'
import NavBar from "../barraNavegacao";
import { useEffect, useState } from "react";
import M from "materialize-css";
import axios from 'axios';
import { Link } from 'react-router-dom';

function ListaSevicos() {

    const [servicos, setServico] = useState([])

    const handlelistarServicos = () => {
        axios.get('http://localhost:4000/servico/listarServicos').then((res) => {
            setServico(res.data)
        }).catch((erro) => {
            console.error('Erro', erro.response)
        })
    }


    useEffect(() => {
        M.AutoInit()
        handlelistarServicos()

    });

    const handledeletarservico = (id) =>{
        console.log(id)
        axios.delete(`http://localhost:4000/servico/removerServico/${id}`).then((res)=>{


        }).catch((erro)=>{
            console.log("Vai Brasil")
            console.error('Erro', erro.response);
        }) 

    }


    return (
        <div>
            <NavBar></NavBar>
            <div className='container center'>
                <h4> <strong> Serviços </strong> </h4>

                {servicos.map(ser => (

                    <ul className="collapsible">

                        <li>
                            <div className="collapsible-header "><i className="material-icons"></i>{ser.nome_servico}</div>
                            <div className="collapsible-body">

                                <div className="input-field col s6">
                                    <input disabled id="id_servico" type="text" className="validate" value={ser.id} />
                                    <label className="active" htmlFor="id_servico">Id:</label>
                                </div>

                                <div className="input-field col s6">
                                    <input disabled id="nome_servico" type="text" className="validate" value={ser.nome_servico} />
                                    <label className="active" htmlFor="nome_servico">Nome do Serviço:</label>
                                </div>
                                <div className="input-field col s6">
                                    <input disabled id="valor_servico" type="text" className="validate" value={ser.valor_servico} />
                                    <label className="active" htmlFor="valor_servico">valor do serviço:</label>
                                </div>


                                <div className="row">

                                    <button className="btn-floating btn-large waves-effect waves-light red lighten-2 right" type="submit" name="action" onClick={() => handledeletarservico(ser.id)}><i className="material-icons">delete</i></button>
                                

                                    <Link to={`/alterarServicos/${ser.id}`}>
                                        <button className="btn-floating btn-large waves-effect waves-light red lighten-2 right" type="submit" name="action"><i className="material-icons">mode_edit</i></button>
                                    </Link>

                                </div>

                            </div>
                        </li>

                    </ul>

                ))}       

            </div>
            <div className="fixed-action-btn">

                <a className="btn-floating btn-large waves-effect waves-light red lighten-2" href="/cadastroServico"><i className="material-icons">add</i></a>
              

            </div>

        </div>

    )


} export default ListaSevicos;