import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import { Link } from "react-router-dom";


type props = {
    tema: string
}


class Produto extends Component<any, props> {
    componentDidMount() {
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);

        var elemsModal = document.querySelectorAll('.modal');
        M.Modal.init(elemsModal);

    }
    render() {

        return (
            <div>

                <div className='container center'>


                    <ul className="collapsible">

                        <li>
                            <div className="collapsible-header "><i className="material-icons"></i>Produto</div>
                            <div className="collapsible-body">

                                <div className="input-field col s6">
                                    <input disabled id="id_produto" type="text" className="validate" />
                                    <label className="active" htmlFor="id_produto">Id:</label>
                                </div>

                                <div className="input-field col s6">
                                    <input disabled id="nome_produto" type="text" className="validate" />
                                    <label className="active" htmlFor="nome_produto">Nome do produto:</label>
                                </div>

                                <div className="input-field col s6">
                                    <input disabled id="preco_produto" type="text" className="validate" />
                                    <label className="active" htmlFor="preco_produto">Preço do produto:</label>
                                </div>

                                <div className="row">

                                    <button className="btn-floating btn-large waves-effect waves-light red lighten-2 right" type="submit" name="action"><i className="material-icons">delete</i></button>
                                    <a className="btn-floating btn-large waves-effect waves-light red lighten-2 right" href="/alterarProdutos"><i className="material-icons">mode_edit</i></a>

                                </div>

                            </div>
                        </li>

                    </ul>

                </div>
            </div>
        )

    }
}
export default Produto