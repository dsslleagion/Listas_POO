import 'materialize-css/dist/css/materialize.min.css'
import { useEffect } from "react";
import M from "materialize-css";
import NavBar from "../barraNavegacao";

function CadastroPedido(){
 
    useEffect(() => {
        M.AutoInit();
    });
 
        return (
        <div>                    
            <NavBar></NavBar>

            
            <div className='container'>
            <h4 className="center-align">Cadastrar Pedido</h4>
                <form className="col s12 formCli">
                    <div className="row">
                         <div className="input-field col s12 opcoes">     
                            <select>
                                <option value="0">Selecione o Cliente</option>
                            </select>
                        </div> 
                    
                         <div className="input-field col s12 opcoes">     
                            <select>
                                <option value="1">Selecione o Serviço</option>
                            </select>
                        </div> 

                        <div className="input-field col s12 opcoes">     
                            <select>
                                <option value="2">Selecione o Produto</option>
                            </select>
                        </div>
                    </div>
                        <div className="row">
                        <div className="col s12">

                        <a className="waves-effect waves-light btn red lighten-2" href="/listaPedidos" >Cadastrar Produto<i className="material-icons left">add</i></a>

                        </div>
                    </div>
                </form> 
            </div> 
        </div>
        
        )
    
}export default CadastroPedido;