import NavBar from "../barraNavegacao";
import { useEffect, useState } from "react";
import M from "materialize-css";
import axios from 'axios'

function CadastroCliente(){

    const [nome, setNome] = useState('');
    const [nome_social, setNomeSocial] = useState('');
    const [sexo, setSexo] = useState('');
    const [cpf, setCpf] = useState('');
    const [data_cpf, setData_cpf] = useState('');
    const [rg, setRg] = useState('');
    const [data_rg, setData_rg] = useState('');
    const [telefone, setTelefone] = useState('');

    const handleCadastroCliente = () => {
        let url = 'http://localhost:4000/cliente/cadastrarCliente'
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
                <NavBar></NavBar>
                <div className='container center'>
                    <h4> <strong>Cadastro de Cliente </strong> </h4>
                </div>
                <div className='container'>
                    <div className="row">
                        <form className="col s12">

                            <div className="input-field col s6">
                                <input value={nome} id="nome_cliente" type="text" className="validate" onChange={e=>setNome(e.target.value)}/>
                                <label className="active" htmlFor="nome_cliente">Nome:</label>
                            </div>

                            <div className="input-field col s6">
                                <input value={nome_social} id="nome_social" type="text" className="validate" onChange={e=>setNomeSocial(e.target.value)}/>
                                <label className="active" htmlFor="nome_social">Nome social:</label>
                            </div>

                            <div className="input-field col s6">
                                <input value={cpf}id="cpf_cliente" type="text" className="validate" onChange={e=>setCpf(e.target.value)}/>
                                <label className="active" htmlFor="cpf_cliente">CPF:</label>
                            </div>
                            <div className="input-field col s6">
                                <input value={data_cpf} id="data_cpf" type="date" className="date" onChange={e=>setData_cpf(e.target.value)}/>
                                <label className="active" htmlFor="data_cpf">Data de cadastro do CPF:</label>
                            </div>
                            <div className="input-field col s6">
                                <input value={rg} id="rg_cliente" type="text" className="validate" onChange={e=>setRg(e.target.value)}/>
                                <label className="active" htmlFor="rg_cliente">RG:</label>
                            </div>
                            <div className="input-field col s6">
                                <input value={data_rg} id="data_rg" type="date" className="data" onChange={e=>setData_rg(e.target.value)}/>
                                <label className="active" htmlFor="data_rg">Data de cadastro do RG:</label>
                            </div>

                            <div className="input-field col s6">
                                <input value={telefone} id="telefone_cliente" type="text" className="validate" onChange={e=>setTelefone(e.target.value)}/>
                                <label className="active" htmlFor="telefone_cliente">Telefone:</label>
                            </div>

                            <div className="input-field col s6">
                                <select onChange={e=>setSexo(e.target.value)}>
                                    <option value=" " disabled selected >Sexo</option>
                                    <option value="M">Masculino</option>
                                    <option value="F">Feminino</option>
                                    <option value="O">Outros</option>
                                </select>
                                <label>Sexo</label>
                            </div>

                                <a className="waves-effect waves-light btn red lighten-2" href="/listaClientes" onClick={handleCadastroCliente} >Cadastrar Cliente<i className="material-icons left">add</i></a>

                                
    
                        </form>
                    </div>
                </div>
            </div>
        )
    
}export default CadastroCliente;