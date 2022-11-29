import 'materialize-css/dist/css/materialize.min.css'
import { Component } from "react";
import NavBar from './barraNavegacao';



type props = {
    tema: string
}


class Home extends Component<any, props> {
    render() {
        return (
            <div>
   <NavBar></NavBar>
                
                <div className='container'>
                    <div className="center-align">
                        <div className="card">
                            <span className="card-title">Cadastros</span>
                            <div className="card-content">
                                <a className="waves-effect waves-light btn red lighten-2" href="/cadastroCliente">Cadastrar clientes</a>
                                <a className="col s4"> </a>
                                <a className="waves-effect waves-light btn red lighten-2" href="/cadastroProduto">Cadastrar produtos</a>
                                <a className="col s4"> </a>
                                <a className="waves-effect waves-light btn red lighten-2" href="/cadastroServico">Cadastrar Servico</a>
                                <a className="col s4"> </a>
                                <a className="waves-effect waves-light btn red lighten-2" href="/cadastroPedido">Cadastrar Pedidos</a>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
            
        )
    }
}
export default Home;