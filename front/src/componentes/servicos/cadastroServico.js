import { Link } from "react-router-dom";
import NavBar from "../barraNavegacao";
import { useEffect, useState } from "react";
import M from "materialize-css";
import axios from 'axios'

function CadastroServico() {

    const[nome_servico, setNomeservico] = useState("");
    const[valor_servico, setValorservico] = useState("");

    const handleCadastroServico = () => {
        let url = 'http://localhost:4000/servico/cadastrarServico'
        let obj = {
            nome_servico,
            valor_servico
        }
        axios.post(url, obj).then((res) => {

        }).catch((erro)=>{
                console.error('Erro', erro.response)
        }) 
    };

    useEffect(() => {
        M.AutoInit();
    });

    return (
        <div>

            <>
                <NavBar></NavBar>
            </>
            <br />
            <div className='container center'>
                <h4> <strong>Cadastro de Serviço </strong> </h4>
            </div>
            <div className='container center'>
                <div className="row">
                    <form className="col s12">
                        <div className="row">

                            <div className="input-field col s6">
                            <input value={nome_servico} id="nome_servico" type="text" className="validate" onChange={e=>setNomeservico(e.target.value)} />
                                <label className="active" htmlFor="nome_servico">Nome</label>
                            </div>
                            <div className="input-field col s6">
                            <input value={valor_servico} id="valor_servico" type="number" className="validate" onChange={e=>setValorservico(e.target.value)} />
                                <label className="active" htmlFor="valor_servico">Preço</label>
                            </div>

                            <Link to='/listaServicos'>
                                <button className="waves-effect waves-light btn red lighten-2" type="submit" name="action"  onClick={handleCadastroServico}>Cadastrar Serviços
                                    <i className="material-icons left">add</i></button>
                            </Link>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    )

} export default CadastroServico;