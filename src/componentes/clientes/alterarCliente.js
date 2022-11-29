import NavBar from "../barraNavegacao";
import { useEffect } from "react";
import M from "materialize-css";


function AlterarCliente() {

    useEffect(() => {
        M.AutoInit();
    });


    return (

        <div>
            <NavBar></NavBar>
            <div className='container center'>
                <h4> <strong>Atualizar Cliente </strong> </h4>
            </div>
            <div className='container'>
                <div className="row">
                    <form className="col s12">


                        <div className="input-field col s6">
                            <input disabled id="email" type="text" className="validate" />
                            <label className="active" htmlFor="email">Email:</label>
                        </div>

                        <div className="input-field col s6">
                            <input id="nome_cliente" type="text" className="validate" />
                            <label className="active" htmlFor="nome_cliente">Nome:</label>
                        </div>

                        <div className="input-field col s6">
                            <input id="nome_social" type="text" className="validate" />
                            <label className="active" htmlFor="nome_social">Nome social:</label>
                        </div>

                        <div className="input-field col s6">
                            <input id="cpf_cliente" type="text" className="validate" />
                            <label className="active" htmlFor="cpf_cliente">CPF:</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="data_cpf" type="text" className="validate" />
                            <label className="active" htmlFor="data_cpf">Data de cadastro do CPF:</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="rg_cliente" type="text" className="validate" />
                            <label className="active" htmlFor="rg_cliente">RG:</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="data_rg" type="text" className="validate" />
                            <label className="active" htmlFor="data_rg">Data de cadastro do RG:</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="ddd_tel" type="text" className="validate" />
                            <label className="active" htmlFor="ddd_tel">DDD do telefone:</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="telefone_cliente" type="text" className="validate" />
                            <label className="active" htmlFor="telefone_cliente">Telefone:</label>
                        </div>

                        <div className="input-field col s6">
                            <select>
                                <option value=" " disabled selected>Sexo</option>
                                <option value="M">Masculino</option>
                                <option value="F">Feminino</option>
                                <option value="O">Outros</option>
                            </select>
                            <label>Sexo</label>
                        </div>

                        <a className="waves-effect waves-light btn red lighten-2" href="/listaClientes" >Atualizar Cliente<i className="material-icons left">send</i></a>


                    </form>
                </div>
            </div>
        </div>
    )

} export default AlterarCliente;