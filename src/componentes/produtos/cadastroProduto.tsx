import { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../barraNavegacao";


type props = {
    tema: string
}

export default class CadastroProduto extends Component<any, props> {

    render() {

        return (
            <div>

                <>
                    <NavBar></NavBar>
                </>
                <br />
                <div className='container center'>
                    <h4> <strong>Cadastro de Produto </strong> </h4>
                </div>
                <div className='container center'>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="nome_produto" type="text" className="validate" />
                                    <label htmlFor="nome_produto">Nome</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="preco_produto" type="text" className="validate" />
                                    <label htmlFor="preco_produto">Preço</label>
                                </div>

                                <Link to='/listaProdutos'>
                                    <button className="waves-effect waves-light btn red lighten-2" type="submit" name="action">Cadastrar Produto
                                        <i className="material-icons left">add</i></button>
                                </Link>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}