import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'



type props = {
    tema: string
}

class Pedido extends Component<any, props> {
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
                            <div className="collapsible-header "><i className="material-icons"></i>Pedido </div>
                            <div className="collapsible-body">

                                <div className="input-field col s6">
                                    <input disabled id="id_produto" type="text" className="validate" />
                                    <label className="active" htmlFor="id_produto">Id:</label>
                                </div>

                                <div className="input-field col s6">
                                    <input disabled id="nome_produto" type="text" className="validate" />
                                    <label className="active" htmlFor="nome_produto">Nome do cliente:</label>
                                </div>

                                <div className="input-field col s6">
                                    <input disabled id="preco_produto" type="text" className="validate" />
                                    <label className="active" htmlFor="preco_produto">Preço do produto/serviço:</label>
                                </div>

                                <div className="row">

                                    <button className="btn-floating btn-large waves-effect waves-light red lighten-2 right" type="submit" name="action"><i className="material-icons">delete</i></button>
                                    <a className="btn-floating btn-large waves-effect waves-light red lighten-2 right" href="/alterarPedidos"><i className="material-icons">mode_edit</i></a>

                                </div>

                            </div>
                        </li>



                    </ul>

                </div>
            </div>
        )

    }
}
export default Pedido