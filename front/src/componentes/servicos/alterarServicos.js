import { Link, useParams } from "react-router-dom";
import NavBar from "../barraNavegacao";
import { useEffect, useState } from "react";
import M from "materialize-css";
import axios from 'axios'


function AlterarServico() {

    const [nome_servico, setNomeServico] = useState('');
    const [valor_servico, setValorServico] = useState('');

    const {id} = useParams();
    const handlelistarServico = () => {
        axios.get(`http://localhost:4000/servico/listarServico/${id}`).then((res) => {
            setNomeServico(res.data.nome_servico);
            setValorServico(res.data.valor_servico);
            console.log(id)
        }).catch((erro) => {
            console.error('Erro', erro.response);
        })
    };



    const handleatualizaServico = () => {
        let obj = {
            nome_servico,
            valor_servico

        }
        axios.put(`http://localhost:4000/servico/atualizarServico/${id}`, obj).then((res) => {
            setNomeServico(null)
            setValorServico(null)
           
            
        }).catch((erro) => {
            console.error('Erro', erro.response)
        })
    };
    useEffect(() => {
        M.AutoInit();
        handlelistarServico();
    }, []);


    return (
        <div>

            <>
                <NavBar></NavBar>
            </>
            <br />
            <div className='container center'>
                <h4> <strong>Atualizar Serviço </strong> </h4>
            </div>
            <div className='container center'>


                <div className="row">
                    <form className="col s12">
                        <div className="row">

                            <div className="input-field col s6">
                                <input value={nome_servico} id="nome_servico" type="text" className="validate" onChange={e => setNomeServico(e.target.value)} />
                                <label className="active" htmlFor="nome_servico">Nome</label>
                            </div>
                            <div className="input-field col s6">
                                <input value={valor_servico} id="preco_servico" type="text" className="validate" onChange={e => setValorServico(e.target.value)} />
                                <label className="active" htmlFor="preco_servico">Preço</label>
                            </div>


                        </div>

                        <Link to='/listaServicos'>
                            <button className="waves-effect waves-light btn red lighten-2" type="submit" name="action" onClick={handleatualizaServico} >Atualizar Serviços
                                <i className="material-icons left">send</i></button>
                        </Link>
                    </form>
                </div>

            </div>
        </div>
    )

} export default AlterarServico;