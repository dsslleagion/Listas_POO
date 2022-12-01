import { Link } from "react-router-dom";
import NavBar from "../barraNavegacao";
import { useEffect, useState } from "react";
import M from "materialize-css";
import axios from 'axios'
import { useParams } from "react-router-dom";


function AlterarCliente() {

    const [nome, setNome] = useState('');
    const [nome_social, setNomesocial] = useState('');
    const [sexo, setSexo] = useState('');
    const [cpf, setCpf] = useState('');
    const [data_cpf, setDatacpf] = useState('');
    const [rg, setRg] = useState('');
    const [data_rg, setDatarg] = useState('');
    const [telefone, setTelefone] = useState('');
    const { id } = useParams();

    const handlelistarCliente = () => {
        axios.get(`http://localhost:4000/cliente/listarCliente/${id}`).then((res) => {
            setNome(res.data.nome);
            setNomesocial(res.data.nome_social);
            setSexo(res.data.sexo);
            setCpf(res.data.cpf);
            setDatacpf(res.data.data_cpf);
            setRg(res.data.rg);
            setDatarg(res.data.data_rg);
            setTelefone(res.data.telefone);
            console.log(id)
        }).catch((erro) => {
            console.error('Erro', erro.response);
        })
    };

    const handleatualizarCliente = () => {
        let obj = {
            nome,
            nome_social,
            sexo,
            cpf,
            data_cpf,
            rg,
            data_rg,
            telefone
        }
        axios.put(`http://localhost:4000/cliente/atualizarCliente/${id}`, obj).then((res) => {
            setNome(null)
            setNomesocial(null)
            setSexo(null)
            setCpf(null)
            setDatacpf(null)
            setRg(null)
            setDatarg(null)
            setTelefone(null)



        }).catch((erro) => {
            console.error('Erro', erro.response)
        })
    };


    useEffect(() => {
        M.AutoInit();
        handlelistarCliente();
    }, []);

    return (
        <div className=" ">


            <div>
                <NavBar></NavBar>
                <div className='container center'>
                    <h4> <strong>Atualizar Cliente </strong> </h4>
                </div>
                <div className='container'>
                    <div className="row">
                        <form className="col s12">


                            <div className="input-field col s6">
                                <input value={nome} id="nome_cliente" type="text" className="validate" onChange={e => setNome(e.target.value)} />
                                <label className="active" htmlFor="nome_cliente">Nome:</label>
                            </div>

                            <div className="input-field col s6">
                                <input value={nome_social} id="nome_social" type="text" className="validate" onChange={e => setNomesocial(e.target.value)} />
                                <label className="active" htmlFor="nome_social">Nome social:</label>
                            </div>

                            <div className="input-field col s6">
                                <input value={cpf} id="cpf_cliente" type="text" className="validate" onChange={e => setCpf(e.target.value)} />
                                <label className="active" htmlFor="cpf_cliente">CPF:</label>
                            </div>

                            <div className="input-field col s6">
                                <input value={data_cpf} id="data_cpf" type="date" className="validate" onChange={e => setDatacpf(e.target.value)} />
                                <label className="active" htmlFor="data_cpf">Data de cadastro do CPF:</label>
                            </div>

                            <div className="input-field col s6">
                                <input value={rg} id="rg_cliente" type="text" className="validate" onChange={e => setRg(e.target.value)} />
                                <label className="active" htmlFor="rg_cliente">RG:</label>
                            </div>

                            <div className="input-field col s6">
                                <input value={data_rg} id="data_rg" type="date" className="validate" onChange={e => setDatarg(e.target.value)} />
                                <label className="active" htmlFor="data_rg">Data de cadastro do RG:</label>
                            </div>

                            <div className="input-field col s6">
                                <input value={telefone} id="telefone_cliente" type="text" className="validate" onChange={e => setTelefone(e.target.value)} />
                                <label className="active" htmlFor="telefone_cliente">Telefone:</label>
                            </div>






                        </form>

                        <Link to='/listaClientes'>
                            <button className="waves-effect waves-light btn red lighten-2" type="submit" name="action" onClick={handleatualizarCliente} >Atualizar Produto
                                <i className="material-icons left">send</i></button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* ))} */}
        </div>
    )

} export default AlterarCliente;