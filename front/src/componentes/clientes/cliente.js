import 'materialize-css/dist/css/materialize.min.css'
import M from "materialize-css";
import NavBar from "../barraNavegacao";
import { useEffect, useState, useParams, useNavigate, Link} from "react";
import axios from 'axios';


function Cliente(){

    const [nome, setNome] = useState('');
    const [nome_social, setNomeSocial] = useState('');
    const [sexo, setSexo] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [telefone, setTelefone] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

    const handleCliente = () => {
        axios.get(`http://localhost:4000/cliente/listarCliente/${id}`).then((res) => {
            setNome(res.data.nome);
            setNomeSocial(res.data.nome_social);
            setSexo(res.data.sexo);
            setCpf(res.data.cpf);
            setRg(res.data.rg);
            setTelefone(res.data.telefone);
      

        }).catch((erro) => {
            console.error('Erro', erro.response)
        })
    }
    const handledeletarCliente = () =>{
        axios.delete(`http://localhost:4000/cliente/removerCliente/${id}`).then((res)=>{
            navigate('/Clientes')

        }).catch((erro)=>{
            console.error('Erro', erro.response);
        }) 
    }


    useEffect(() => {
        M.AutoInit();
        handleCliente ();
    });

    return (
        <div>
            <NavBar></NavBar>
            <div className='container center'>
                <h4> <strong> Clientes </strong> </h4>

                <ul className="collapsible">

                    <div>
                        <div className="row home">
                            <div className="input-field col s12">
                                <input disabled id="nome_cliente" type="text" value={nome} onChange={() => setNome(nome)} className="validate" />
                                <label className="active" htmlFor="nome_cliente">Nome</label>
                            </div>

                            <div className="input-field col s12">
                                <input value={nome_social} disabled id="nome_social" type="text"  onChange={() => setNomeSocial(nome_social)} className="validate" />
                                <label className="active" htmlFor="nome_social">Nome Social</label>
                            </div>

                            <div className="input-field col s12">
                                <input value={sexo} disabled id="sexo_cliente" type="text"  onChange={() => setSexo(sexo)} className="validate" />
                                <label className="active" htmlFor="sexo_cliente">Sexo:</label>
                            </div>

                            <div className="input-field col s12">
                                <input disabled id="cpf_cliente" type="text" value={cpf} onChange={() => setCpf(cpf)} className="validate" />
                                <label className="active" htmlFor="cpf_cliente">CPF</label>
                            </div>

                            <div className="input-field col s12">
                                <input disabled id="rg_cliente" type="text" value={rg} onChange={() => setRg(rg)} className="validate" />
                                <label className="active" htmlFor="rg_cliente">RG:</label>
                            </div>

                            <div className="input-field col s12">
                                <input disabled id="telefone" type="text" value={telefone} onChange={() => setTelefone(telefone)} className="validate" />
                                <label className="active" htmlFor="telefone">Telefone</label>
                            </div>

                        </div>
                    </div>

            </ul>
                                  
            <div className="row">
                        <div className="col s12 center">
                            <Link to={`/AtualizaCliente/${id}`}>
                            <button className="btn waves-effect  black lighten-2 button botaoAtualiza" type="submit" name="action">Atualizar
                            </button>
                            </Link>
                            <button className="btn waves-effect  black lighten-2 button" type="submit" name="action" onClick={handledeletarCliente}>Remover Cliente
                            </button>
                        </div>
                    </div>     
       

            <div className="fixed-action-btn">

                <a className="btn-floating btn-large waves-effect waves-light red lighten-2" href="/cadastroCliente"><i className="material-icons">add</i></a><a className="col s4"> </a>

            </div>

        </div>
        </div >
        
    )
    
}export default Cliente;