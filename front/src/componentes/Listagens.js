import { useEffect, useState } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import NavBar from './barraNavegacao';
import M from "materialize-css";
import axios from 'axios';


function Listagens(props) {

    const [listQuantidade, setListQuantidade] = useState([]);
    const [listConsumoTotal, setListConsumoTotal] = useState([]);
    const [listMenosConsum, setListMenosConsum] = useState([]);
    const [listConsumoValor, setListConsumoValor] = useState([]);
    const [ordenadoM, setOrdenadoM] = useState([]);
    const [ordenadoF, setOrdenadoF] = useState([]);


    // 1. Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor.
    const listagemQuantidade = () => {
        axios.get('http://localhost:4000/listagem/listagemQtd').then((res) => {
            setListQuantidade(res.data);

        }).catch((erro) => {
            console.error('Erro', erro.response);
        })
    }

    // 3. Listagem geral dos serviços ou produtos mais consumidos.
    const listagemConsumoTotal = () => {
        axios.get('http://localhost:4000/listagem/listagemProdServ').then((res) => {
            setListConsumoTotal(res.data);

        }).catch((erro) => {
            console.error('Erro', erro.response);
        })
    }

    // 4. Listagem dos serviços ou produtos mais consumidos por gênero.
    const listagemMostConsumSexo = () => {
        axios.get('http://localhost:4000/listagem/listagemSexoConsumo').then((res) => {
            setOrdenadoM(res.data.ordenadoM);
            setOrdenadoF(res.data.ordenadoF);


        }).catch((erro) => {
            console.error('Erro', erro.response);
        })
    }

    // 5. Listagem dos 10 clientes que menos consumiram produtos ou serviços.
    const listagemMenosConsum = () => {
        axios.get('http://localhost:4000/listagem/listagemMenorConsumo').then((res) => {
            setListMenosConsum(res.data);

        }).catch((erro) => {
            console.error('Erro', erro.response);
        })
    }


    //6. Listagem dos 5 clientes que mais consumiram em valor, não em quantidade.
    const listagemConsumoValor = () => {
        axios.get('http://localhost:4000/listagem/listagemConsumoValor').then((res) => {
            setListConsumoValor(res.data);

        }).catch((erro) => {
            console.error('Erro', erro.response);
        })
    }

    useEffect(() => {
        M.AutoInit();

      
        listagemConsumoTotal();


        listagemMenosConsum();
        listagemConsumoValor();
        listagemQuantidade();
        listagemMostConsumSexo();
    }, [])
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
                            <li className="tab col s2"><a href="#2" style={{ color: 'black', fontSize: '10px' }}>Cliente Mais consumiram Qtd</a></li>
                            <li className="tab col s3"><a href="#3" style={{ color: 'black', fontSize: '10px' }}>Cliente Menor Consumo Qtd</a></li>
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
                                            <th>Cliente</th>
                                            <th>CPF do Cliente</th>
                                            <th>Valor Gasto</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {listConsumoValor.map((consValor, index) =>
                                            <tr key={index}>
                                                <td>{consValor.id}</td>
                                                <td>{consValor.nome}</td>
                                                <td>{consValor.cpf}</td>
                                                <td>{consValor.total}</td>
                                            </tr>
                                        )}

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
                                            <th>Cliente</th>
                                            <th>CPF do Cliente</th>
                                            <th>Quantidade Consumida</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listQuantidade.map((Qtd, index) =>
                                            <tr key={index}>
                                                <td>{Qtd.id}</td>
                                                <td>{Qtd.nome}</td>
                                                <td>{Qtd.cpf}</td>
                                                <td>{Qtd.total}</td>
                                            </tr>
                                        )}

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
                                            <th>Cliente</th>
                                            <th>CPF do Cliente</th>
                                            <th>Quantidade Consumida</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listMenosConsum.map((consValor, index) =>
                                            <tr key={index}>
                                                <td>{consValor.id}</td>
                                                <td>{consValor.nome}</td>
                                                <td>{consValor.cpf}</td>
                                                <td>{consValor.total}</td>
                                            </tr>
                                        )}


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
                                            <th>Tipo</th>
                                            <th>Quantidade de Produto/Serviço</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listConsumoTotal.map((constot, index) =>
                                            <tr key={index}>
                                                {constot.nome_produto ? (<td>{constot.id}</td>) : (<td>{constot.id}</td>)}
                                                {constot.nome_produto ? (<td>{constot.nome_produto}</td>) : (<td>{constot.nome_servico}</td>)}
                                                {constot.nome_produto ? (<td>{constot.tipo}</td>) : (<td>{constot.tipo}</td>)}
                                                {constot.nome_produto ? (<td>{constot.qtd}</td>) : (<td>{constot.qtd}</td>)}
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </form>

                    </div>

                    <div id="5" className="col s12">
                        <form>
                            <h5 className=''>Masculino</h5>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nome do Produto/Serviço</th>
                                            <th>Tipo Produto/Serviço</th>
                                            <th>Valor do Produto/Serviço</th>
                                            <th>Quantidade de Produto/Serviço Pedidos</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ordenadoM?.map((m, index) => (
                                            <tr key={index} >
                                                <td>{m.id}</td>
                                                {m.nome_produto ? (<td>{m.nome_produto}</td>) : (<td>{m.nome_servico}</td>)}
                                                <td>{m.tipo}</td>
                                                {m.valor_produto ? (<td>{m.valor_produto}</td>) : (<td>{m.valor_servico}</td>)}
                                                <td>{m.qtd}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <br></br>
                            <h5 className=''>Feminino</h5>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nome do Produto/Serviço</th>
                                            <th>Tipo Produto/Serviço</th>
                                            <th>Valor do Produto/Serviço</th>
                                            <th>Quantidade de Produto/Serviço Pedidos</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ordenadoF?.map((f, index) =>
                                            <tr key={index}>
                                                <td>{f.id}</td>
                                                {f.nome_produto ? (<td>{f.nome_produto}</td>) : (<td>{f.nome_servico}</td>)}
                                                <td>{f.tipo}</td>
                                                {f.valor_produto ? (<td>{f.valor_produto}</td>) : (<td>{f.valor_servico}</td>)}
                                                <td>{f.qtd}</td>
                                            </tr>
                                        )}
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
