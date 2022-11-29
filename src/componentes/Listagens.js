import { useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import NavBar from './barraNavegacao';
import M from "materialize-css";



function Listagens() {

    useEffect(() => {
        M.AutoInit();
    });

    return (
        <div>
            <>
                <NavBar></NavBar>
            </>
            <div className='container center'>
                <h4> <strong> Listagens de Consumo </strong> </h4>
                <br></br>
                <div className="row">
                    <div className="">
                        <ul className="tabs-swipe-demo tabs tabsConsumo ">
                            <li className="tab col s3"><a href="#1" style={{ color: 'black', fontSize: '10px' }}>Cliente Consumo Valor</a></li>
                            <li className="tab col s2"><a href="#2" style={{ color: 'black', fontSize: '10px' }}>Cliente Maior Qtd</a></li>
                            <li className="tab col s3"><a href="#3" style={{ color: 'black', fontSize: '10px' }}>Cliente Menor Consumo</a></li>
                            <li className="tab col s2"><a href="#4" style={{ color: 'black', fontSize: '10px' }}>Prod/Serv Consumo</a></li>
                            <li className="tab col s2"><a href="#5" style={{ color: 'black', fontSize: '10px' }}>Consumo Genero</a></li>
                        </ul>
                    </div>
                    <div id="1" className="col s12">
                        <form>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nome</th>
                                            <th>CPF</th>
                                            <th>Telefone</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Cliente 1</td>
                                            <td>000.000.000.00</td>
                                            <td>0,00</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Cliente 2</td>
                                            <td>000.000.000.00</td>
                                            <td>0,00</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Cliente 3</td>
                                            <td>000.000.000.00</td>
                                            <td>0,00</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Cliente 4</td>
                                            <td>000.000.000.00</td>
                                            <td>0,00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>


                    <div id="2" className="col s12">
                        <form>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nome</th>
                                            <th>CPF</th>
                                            <th>Total Consumido</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Cliente 1</td>
                                            <td>000.000.000.00</td>
                                            <td>0,00</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Cliente 2</td>
                                            <td>000.000.000.00</td>
                                            <td>0,00</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Cliente 3</td>
                                            <td>000.000.000.00</td>
                                            <td>0,00</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Cliente 4</td>
                                            <td>000.000.000.00</td>
                                            <td>0,00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>

                    </div>

                    <div id="3" className="col s12">
                        <form>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nome</th>
                                            <th>CPF</th>
                                            <th>Total consumido</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Cliente 1</td>
                                            <td>000.000.000.00</td>
                                            <td>0,00</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Cliente 2</td>
                                            <td>000.000.000.00</td>
                                            <td>0,00</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Cliente 3</td>
                                            <td>000.000.000.00</td>
                                            <td>0,00</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Cliente 4</td>
                                            <td>000.000.000.00</td>
                                            <td>0,00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>

                    </div>

                    <div id="4" className="col s12">
                        <form>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nome do Produto/Serviço</th>
                                            <th>Valor do Produto/Serviço</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Corte de Cabelo</td>
                                            <td>0,00</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Gel</td>
                                            <td>0,00</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Pente de cabelo</td>
                                            <td>0,00</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Condicionador</td>
                                            <td>0,00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>

                    </div>

                    <div id="5" className="col s12">
                        <form>
                            <h5 className='generoConsumoFont'>Feminino</h5>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nome do Produto/Serviço</th>
                                            <th>Valor do Produto/Serviço</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Corte de Cabelo</td>
                                            <td>0,00</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Gel</td>
                                            <td>0,00</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Pente de cabelo</td>
                                            <td>0,00</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Condicionador</td>
                                            <td>0,00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <br></br>
                            <h5 className='generoConsumoFont'>Masculino</h5>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nome do Produto/Serviço</th>
                                            <th>Valor do Produto/Serviço</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Corte de Cabelo</td>
                                            <td>0,00</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Gel</td>
                                            <td>0,00</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Pente de cabelo</td>
                                            <td>0,00</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Condicionador</td>
                                            <td>0,00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
} export default Listagens;
