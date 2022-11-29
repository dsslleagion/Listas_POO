import { Component } from "react";

type props = {
    tema: string
}

export default class NavBar extends Component<any, props> {

    render() {
        return (

            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="/Home" className="brand-logo">World Beauty</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">

                            <li><a href="/listaClientes">Clientes</a></li>
                            <li><a href="/listaProdutos">Produtos</a></li>
                            <li><a href="/listaServicos">Serviços</a></li>
                            <li><a href="/listaPedidos">Pedidos</a></li>
                            <li><a href="/Listagens">Listagens</a></li>
                            
                            {/* <li><a href="/produto">Produto</a></li>
                            <li><a href="/servico">Servico</a></li>
                            <li><a href="/cliente">Cliente</a></li>
                            <li><a href="/pedido">Pedido</a></li> */}
                            
                        </ul>
                    </div>
                </nav>
            </div>
  
        )
    }
}

