import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import NavBar from "../barraNavegacao";
import { Link } from "react-router-dom";

type props = {
    tema: string
}


class ListaCliente extends Component<any, props> {
    componentDidMount() {

        document.addEventListener('DOMContentLoaded', function () {
            var elemsS = document.querySelectorAll('select')
            M.FormSelect.init(elemsS)

            var elems = document.querySelectorAll('.collapsible')
            M.Collapsible.init(elems)
        })
    }

    render() {
        return (
            <div>
                <NavBar></NavBar>
                <div className='container center'>
                    <h4> <strong> Clientes </strong> </h4>

                    <ul className="collapsible">
                        <li>
                            <div className="collapsible-header "><i className="material-icons"></i>Cliente 1</div>
                            <div className="collapsible-body">

                                <div className="input-field col s6">
                                    <input disabled id="email" type="text" value="" className="validate" />
                                    <label className="active" htmlFor="email">Email:</label>
                                </div>

                                <div className="input-field col s6">
                                    <input disabled id="nome_cliente" type="text" className="validate" />
                                    <label className="active" htmlFor="nome_cliente">Nome:</label>
                                </div>

                                <div className="input-field col s6">
                                    <input disabled id="nome_social" type="text" className="validate" />
                                    <label className="active" htmlFor="nome_social">Nome social:</label>
                                </div>

                                <div className="input-field col s6">
                                    <input disabled id="cpf_cliente" type="text" className="validate" />
                                    <label className="active" htmlFor="cpf_cliente">CPF:</label>
                                </div>
                                <div className="input-field col s6">
                                    <input disabled id="data_cpf" type="text" className="validate" />
                                    <label className="active" htmlFor="data_cpf">Data de cadastro do CPF:</label>
                                </div>
                                <div className="input-field col s6">
                                    <input disabled id="rg_cliente" type="text" className="validate" />
                                    <label className="active" htmlFor="rg_cliente">RG:</label>
                                </div>
                                <div className="input-field col s6">
                                    <input disabled id="data_rg" type="text" className="validate" />
                                    <label className="active" htmlFor="data_rg">Data de cadastro do RG:</label>
                                </div>
                                <div className="input-field col s6">
                                    <input disabled id="ddd_tel" type="text" className="validate" />
                                    <label className="active" htmlFor="ddd_tel">DDD do telefone:</label>
                                </div>
                                <div className="input-field col s6">
                                    <input disabled id="telefone_cliente" type="text" className="validate" />
                                    <label className="active" htmlFor="telefone_cliente">Telefone:</label>
                                </div>
                                <div className="input-field col s6">
                                    <input disabled id="sexo_cliente" type="text" className="validate" />
                                    <label className="active" htmlFor="sexo_cliente">Sexo:</label>
                                </div>

                                <div className="row">

                                    <button className="btn-floating btn-large waves-effect waves-light red lighten-2 right" type="submit" name="action"><i className="material-icons">delete</i></button>
                                    <a className="btn-floating btn-large waves-effect waves-light red lighten-2 right" href="/alterarCliente"><i className="material-icons">mode_edit</i></a>

                                </div>

                            </div>
                        </li>

                        <li>
                            <div className="collapsible-header "><i className="material-icons"></i>Cliente 2</div>
                            <div className="collapsible-body">

                                <div className="input-field col s6">
                                    <input disabled id="email" type="text" className="validate" />
                                    <label className="active" htmlFor="email">Email:</label>
                                </div>

                                <div className="input-field col s6">
                                    <input disabled id="nome_cliente" type="text" className="validate" />
                                    <label className="active" htmlFor="nome_cliente">Nome:</label>
                                </div>

                                <div className="input-field col s6">
                                    <input disabled id="nome_social" type="text" className="validate" />
                                    <label className="active" htmlFor="nome_social">Nome social:</label>
                                </div>

                                <div className="input-field col s6">
                                    <input disabled id="cpf_cliente" type="text" className="validate" />
                                    <label className="active" htmlFor="cpf_cliente">CPF:</label>
                                </div>
                                <div className="input-field col s6">
                                    <input disabled id="data_cpf" type="text" className="validate" />
                                    <label className="active" htmlFor="data_cpf">Data de cadastro do CPF:</label>
                                </div>
                                <div className="input-field col s6">
                                    <input disabled id="rg_cliente" type="text" className="validate" />
                                    <label className="active" htmlFor="rg_cliente">RG:</label>
                                </div>
                                <div className="input-field col s6">
                                    <input disabled id="data_rg" type="text" className="validate" />
                                    <label className="active" htmlFor="data_rg">Data de cadastro do RG:</label>
                                </div>
                                <div className="input-field col s6">
                                    <input disabled id="ddd_tel" type="text" className="validate" />
                                    <label className="active" htmlFor="ddd_tel">DDD do telefone:</label>
                                </div>
                                <div className="input-field col s6">
                                    <input disabled id="telefone_cliente" type="text" className="validate" />
                                    <label className="active" htmlFor="telefone_cliente">Telefone:</label>
                                </div>
                                <div className="input-field col s6">
                                    <input disabled id="sexo_cliente" type="text" className="validate" />
                                    <label className="active" htmlFor="sexo_cliente">Sexo:</label>
                                </div>

                                <div className="row">

                                    <button className="btn-floating btn-large waves-effect waves-light red lighten-2 right" type="submit" name="action"><i className="material-icons">delete</i></button>
                                    <a className="btn-floating btn-large waves-effect waves-light red lighten-2 right" href="/alterarCliente"><i className="material-icons">mode_edit</i></a>

                                </div>

                            </div>
                        </li>

                        <li>
                            <div className="collapsible-header "><i className="material-icons"></i>Cliente 3</div>
                            <div className="collapsible-body">

                                <div className="input-field col s6">
                                    <input disabled id="email" type="text" className="validate" />
                                    <label className="active" htmlFor="email">Email:</label>
                                </div>

                                <div className="input-field col s6">
                                    <input disabled id="nome_cliente" type="text" className="validate" />
                                    <label className="active" htmlFor="nome_cliente">Nome:</label>
                                </div>

                                <div className="input-field col s6">
                                    <input disabled id="nome_social" type="text" className="validate" />
                                    <label className="active" htmlFor="nome_social">Nome social:</label>
                                </div>

                                <div className="input-field col s6">
                                    <input disabled id="cpf_cliente" type="text" className="validate" />
                                    <label className="active" htmlFor="cpf_cliente">CPF:</label>
                                </div>
                                <div className="input-field col s6">
                                    <input disabled id="data_cpf" type="text" className="validate" />
                                    <label className="active" htmlFor="data_cpf">Data de cadastro do CPF:</label>
                                </div>
                                <div className="input-field col s6">
                                    <input disabled id="rg_cliente" type="text" className="validate" />
                                    <label className="active" htmlFor="rg_cliente">RG:</label>
                                </div>
                                <div className="input-field col s6">
                                    <input disabled id="data_rg" type="text" className="validate" />
                                    <label className="active" htmlFor="data_rg">Data de cadastro do RG:</label>
                                </div>
                                <div className="input-field col s6">
                                    <input disabled id="ddd_tel" type="text" className="validate" />
                                    <label className="active" htmlFor="ddd_tel">DDD do telefone:</label>
                                </div>
                                <div className="input-field col s6">
                                    <input disabled id="telefone_cliente" type="text" className="validate" />
                                    <label className="active" htmlFor="telefone_cliente">Telefone:</label>
                                </div>
                                <div className="input-field col s6">
                                    <input disabled id="sexo_cliente" type="text" className="validate" />
                                    <label className="active" htmlFor="sexo_cliente">Sexo:</label>
                                </div>

                                <div className="row">

                                    <button className="btn-floating btn-large waves-effect waves-light red lighten-2 right" type="submit" name="action"><i className="material-icons">delete</i></button>
                                    <a className="btn-floating btn-large waves-effect waves-light red lighten-2 right" href="/alterarCliente"><i className="material-icons">mode_edit</i></a>

                                </div>

                            </div>
                        </li>


                        <li>
                            <div className="collapsible-header "><i className="material-icons"></i>Cliente 4</div>
                            <div className="collapsible-body">

                                <div className="input-field col s6">
                                    <input disabled id="email" type="text" className="validate" />
                                    <label className="active" htmlFor="email">Email:</label>
                                </div>

                                <div className="input-field col s6">
                                    <input disabled id="nome_cliente" type="text" className="validate" />
                                    <label className="active" htmlFor="nome_cliente">Nome:</label>
                                </div>

                                <div className="input-field col s6">
                                    <input disabled id="nome_social" type="text" className="validate" />
                                    <label className="active" htmlFor="nome_social">Nome social:</label>
                                </div>

                                <div className="input-field col s6">
                                    <input disabled id="cpf_cliente" type="text" className="validate" />
                                    <label className="active" htmlFor="cpf_cliente">CPF:</label>
                                </div>
                                <div className="input-field col s6">
                                    <input disabled id="data_cpf" type="text" className="validate" />
                                    <label className="active" htmlFor="data_cpf">Data de cadastro do CPF:</label>
                                </div>
                                <div className="input-field col s6">
                                    <input disabled id="rg_cliente" type="text" className="validate" />
                                    <label className="active" htmlFor="rg_cliente">RG:</label>
                                </div>
                                <div className="input-field col s6">
                                    <input disabled id="data_rg" type="text" className="validate" />
                                    <label className="active" htmlFor="data_rg">Data de cadastro do RG:</label>
                                </div>
                                <div className="input-field col s6">
                                    <input disabled id="ddd_tel" type="text" className="validate" />
                                    <label className="active" htmlFor="ddd_tel">DDD do telefone:</label>
                                </div>
                                <div className="input-field col s6">
                                    <input disabled id="telefone_cliente" type="text" className="validate" />
                                    <label className="active" htmlFor="telefone_cliente">Telefone:</label>
                                </div>
                                <div className="input-field col s6">
                                    <input disabled id="sexo_cliente" type="text" className="validate" />
                                    <label className="active" htmlFor="sexo_cliente">Sexo:</label>
                                </div>

                                <div className="row">

                                    <button className="btn-floating btn-large waves-effect waves-light red lighten-2 right" type="submit" name="action"><i className="material-icons">delete</i></button>
                                    <a className="btn-floating btn-large waves-effect waves-light red lighten-2 right" href="/alterarCliente"><i className="material-icons">mode_edit</i></a>

                                </div>

                            </div>
                        </li>

                    </ul>



                    <div className="fixed-action-btn">


                        <a className="btn-floating btn-large waves-effect waves-light red lighten-2" href="/cadastroCliente"><i className="material-icons">add</i></a>
                        <a className="col s4"> </a>

                    </div>

                </div>
            </div>
        )

    }
}
export default ListaCliente;