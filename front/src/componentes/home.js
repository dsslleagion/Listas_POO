import 'materialize-css/dist/css/materialize.min.css'
import NavBar from './barraNavegacao';

function Home() {

    return (
        <div>
            <NavBar></NavBar>

            <div className='container'>
                <div className="center-align">
                    <div className="card">
                    <h4> <strong>Cadastros </strong> </h4>
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
export default Home;