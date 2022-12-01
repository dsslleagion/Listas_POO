import 'materialize-css/dist/css/materialize.min.css'
import { useEffect } from "react";
import M from "materialize-css";
import { useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import NavBar from '../barraNavegacao';



function Pedido() {

    const [id_cliente, setIdCliente] = useState('');
    const [nome, setNomeCliente] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');


    const [id_produto, setIdProduto] = useState('');
    const [nome_produto, setNomeProduto] = useState('');
    const [valor_produto, setValorProduto] = useState('');


    const [id_servico, setIdServico] = useState('');
    const [nome_servico, setNomeServico] = useState('');
    const [valor_servico, setValorServico] = useState('');



    const { id } = useParams()


    const handlelistarPedido = () => {
        axios.get(`http://localhost:4000/pedido/listarPedido/${id}`).then((res) => {

            console.log(id)

            setIdCliente(res.data.cliente?.id);
            setNomeCliente(res.data.cliente?.nome);
            setCpf(res.data.cliente?.cpf);
            setTelefone(res.data.cliente?.telefone);



            setIdProduto(res.data.produto?.id);
            setNomeProduto(res.data.produto?.nome_produto);
            setValorProduto(res.data.produto?.valor_produto);


            setIdServico(res.data.servico?.id);
            setNomeServico(res.data.servico?.nome_servico);
            setValorServico(res.data.servico?.valor_servico);



        }).catch((erro) => {
            console.error('Erro', erro.response)

        })
    }

    const handledeletarPedido = () => {
        axios.delete(`http://localhost:4000/pedido/deletarPedido/${id}`).then((res) => {


        }).catch((erro) => {
            console.error('Erro', erro.response);
        })
    }

    useEffect(() => {
        M.AutoInit()
        handlelistarPedido()

    }, [])



    return (
        <div>
            <NavBar></NavBar>
            <div className='container center'>





                <div>
                    <h4 className='pedFont'><strong>Cliente do Pedido</strong></h4>
                    {id_cliente ? (<table className='responsive-table centered espacamento-tabela'>
                        <thead>
                            <tr>
                                {id_cliente ? (<th>Id do Cliente</th>) : (<></>)}
                                {id_cliente ? (<th>Nome do Cliente</th>) : (<></>)}
                                {id_cliente ? (<th>CPF</th>) : (<></>)}
                                {id_cliente ? (<th>Telefone</th>) : (<></>)}
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                {id_cliente ? (<td><strong>{id_cliente}</strong></td>) : (<></>)}
                                {id_cliente ? (<td>{nome}</td>) : (<></>)}
                                {id_cliente ? (<td>{cpf}</td>) : (<></>)}
                                {id_cliente ? (<td>{telefone}</td>) : (<></>)}
                            </tr>

                        </tbody>
                    </table>) : (<></>)}
                </div>


                <div>
                    {id_produto ? (<h4 className='pedFont'><strong>Produto</strong></h4>) : (<></>)}
                    {id_produto ? (<table className='responsive-table centered espacamento-tabela'>
                        <thead>
                            <tr>
                                {id_produto ? (<th>Id do Pedido</th>) : (<></>)}
                                {id_produto ? (<th>Id do Produto</th>) : (<></>)}
                                {id_produto ? (<th>Nome do Produto</th>) : (<></>)}
                                {id_produto ? (<th>Valor do Produto</th>) : (<></>)}

                            </tr>
                        </thead>
                        <tbody>


                            <tr>
                                {id_produto ? (<td><strong>{id}</strong></td>) : (<></>)}
                                {id_produto ? (<td><strong>{id_produto}</strong></td>) : (<></>)}
                                {id_produto ? (<td>{nome_produto}</td>) : (<></>)}
                                {id_produto ? (<td>{valor_produto}</td>) : (<></>)}
                            </tr>

                        </tbody>
                    </table>) : (<></>)}
                </div>


                <div>
                    {id_servico ? (<h4 className='pedFont'><strong>Serviço</strong></h4>) : (<></>)}
                    {id_servico ? (<table className='responsive-table centered espacamento-tabela'>
                        <thead>
                            <tr>
                                {id_servico ? (<th>Id do Pedido</th>) : (<></>)}
                                {id_servico ? (<th>Id do Serviço</th>) : (<></>)}
                                {id_servico ? (<th>Nome do Serviço</th>) : (<></>)}
                                {id_servico ? (<th>Valor do Serviço</th>) : (<></>)}
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                {id_servico ? (<td><strong>{id}</strong></td>) : (<></>)}
                                {id_servico ? (<td><strong>{id_servico}</strong></td>) : (<></>)}
                                {id_servico ? (<td>{nome_servico}</td>) : (<></>)}
                                {id_servico ? (<td>{valor_servico}</td>) : (<></>)}
                            </tr>

                        </tbody>
                    </table>) : (<></>)}
                </div>

                <div className="fixed-action-btn">

                    <a className="btn-floating btn-large waves-effect waves-light red lighten-2" href="/listaPedidos" onClick={() =>handledeletarPedido(id) }><i className="material-icons">close</i></a>
                  
                </div>


            </div>



            {/* <h2>Pedido de Id </h2> */}



        </div>
    )


} export default Pedido;