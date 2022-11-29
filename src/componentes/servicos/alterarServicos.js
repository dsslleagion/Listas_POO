import { Link } from "react-router-dom";
import NavBar from "../barraNavegacao";


function AlterarServico(){

        return (
            <div>

                <>
                    <NavBar></NavBar>
                </>
                <br />
                <div className='container center'>
                    <h4> <strong>Atualizar Serviço </strong> </h4>
                </div>
                <div className='container center'>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">

                                <div className="input-field col s6">
                                    <input id="nome_servico" type="text" className="validate" />
                                    <label htmlFor="nome_servico">Nome</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="preco_servico" type="text" className="validate" />
                                    <label htmlFor="preco_servico">Preço</label>
                                </div>

                                <Link to='/listaServicos'>
                                <button className="waves-effect waves-light btn red lighten-2" type="submit" name="action">Atualizar Serviços
                                    <i className="material-icons left">send</i></button>
                                    </Link>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    
}export default AlterarServico;