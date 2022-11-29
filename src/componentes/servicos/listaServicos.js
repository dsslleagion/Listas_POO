import 'materialize-css/dist/css/materialize.min.css'
import NavBar from "../barraNavegacao";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import M from "materialize-css";


function ListaSevicos(){

    useEffect(() => {
        M.AutoInit();
    });

        return (
            <div>
                <NavBar></NavBar>
                <div className='container center'>
                    <h4> <strong> Serviços </strong> </h4>

                    <ul className="collapsible">
                        <li>
                            <div className="collapsible-header "><i className="material-icons"></i>Serviço 1</div>
                            <div className="collapsible-body">

                                <div className="input-field col s6">
                                    <input disabled id="id_servico" type="text" className="validate" />
                                    <label className="active" htmlFor="id_servico">Id:</label>
                                </div>

                                <div className="input-field col s6">
                                    <input disabled id="nome_servico" type="text" className="validate" />
                                    <label className="active" htmlFor="nome_servico">Nome do serviço:</label>
                                </div>

                                <div className="input-field col s6">
                                    <input disabled id="preco_servico" type="text" className="validate" />
                                    <label className="active" htmlFor="preco_servico">Preço do serviço:</label>
                                </div>

                                <div className="row">

                                    <button className="btn-floating btn-large waves-effect waves-light red lighten-2 right" type="submit" name="action"><i className="material-icons">delete</i></button>
                                    <a className="btn-floating btn-large waves-effect waves-light red lighten-2 right" href="/alterarServicos"><i className="material-icons">mode_edit</i></a>

                                </div>

                            </div>
                        </li>

                        <li>
                            <div className="collapsible-header "><i className="material-icons"></i>Serviço 2</div>
                            <div className="collapsible-body">

                                <div className="input-field col s6">
                                    <input disabled id="id_servico" type="text" className="validate" />
                                    <label className="active" htmlFor="id_servico">Id:</label>
                                </div>

                                <div className="input-field col s6">
                                    <input disabled id="nome_servico" type="text" className="validate" />
                                    <label className="active" htmlFor="nome_servico">Nome do serviço:</label>
                                </div>

                                <div className="input-field col s6">
                                    <input disabled id="preco_servico" type="text" className="validate" />
                                    <label className="active" htmlFor="preco_servico">Preço do serviço:</label>
                                </div>

                                <div className="row">

                                    <button className="btn-floating btn-large waves-effect waves-light red lighten-2 right" type="submit" name="action"><i className="material-icons">delete</i></button>
                                    <a className="btn-floating btn-large waves-effect waves-light red lighten-2 right" href="/alterarServicos"><i className="material-icons">mode_edit</i></a>

                                </div>

                            </div>
                        </li>

                        <li>
                            <div className="collapsible-header "><i className="material-icons"></i>Serviço 3</div>
                            <div className="collapsible-body">

                                <div className="input-field col s6">
                                    <input disabled id="id_servico" type="text" className="validate" />
                                    <label className="active" htmlFor="id_servico">Id:</label>
                                </div>

                                <div className="input-field col s6">
                                    <input disabled id="nome_servico" type="text" className="validate" />
                                    <label className="active" htmlFor="nome_servico">Nome do serviço:</label>
                                </div>

                                <div className="input-field col s6">
                                    <input disabled id="preco_servico" type="text" className="validate" />
                                    <label className="active" htmlFor="preco_servico">Preço do serviço:</label>
                                </div>

                                <div className="row">

                                    <button className="btn-floating btn-large waves-effect waves-light red lighten-2 right" type="submit" name="action"><i className="material-icons">delete</i></button>
                                    <a className="btn-floating btn-large waves-effect waves-light red lighten-2 right" href="/alterarServicos"><i className="material-icons">mode_edit</i></a>

                                </div>

                            </div>
                        </li>

                        <li>
                            <div className="collapsible-header "><i className="material-icons"></i>Serviço 4</div>
                            <div className="collapsible-body">

                                <div className="input-field col s6">
                                    <input disabled id="id_servico" type="text" className="validate" />
                                    <label className="active" htmlFor="id_servico">Id:</label>
                                </div>

                                <div className="input-field col s6">
                                    <input disabled id="nome_servico" type="text" className="validate" />
                                    <label className="active" htmlFor="nome_servico">Nome do serviço:</label>
                                </div>

                                <div className="input-field col s6">
                                    <input disabled id="preco_servico" type="text" className="validate" />
                                    <label className="active" htmlFor="preco_servico">Preço do serviço:</label>
                                </div>

                                <div className="row">

                                    <button className="btn-floating btn-large waves-effect waves-light red lighten-2 right" type="submit" name="action"><i className="material-icons">delete</i></button>
                                    <a className="btn-floating btn-large waves-effect waves-light red lighten-2 right" href="/alterarServicos"><i className="material-icons">mode_edit</i></a>

                                </div>

                            </div>
                        </li>

                    </ul>

                    <div className="fixed-action-btn">
                        <Link to="/cadastroServico">
                            <button className="btn-floating btn-large waves-effect waves-light red lighten-2" type="submit" name="action"><i className="material-icons">add</i></button>
                        </Link>


                    </div>

                </div>
            </div>

        )

    
}export default ListaSevicos;