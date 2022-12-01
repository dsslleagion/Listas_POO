import 'materialize-css/dist/css/materialize.min.css'
import NavBar from "../barraNavegacao";
import { useEffect, useState} from "react";
import M from "materialize-css";
import axios from 'axios';
import { Link  } from 'react-router-dom';

function ListaProduto(props) {

    const [produtos, setProdutos] = useState([])

    const handlelistarProdutos = () => {
        axios.get('http://localhost:4000/produto/listarProdutos').then((res) => {
            setProdutos(res.data)
        }).catch((erro) => {
            console.error('Erro', erro.response)
        })
    }


    useEffect(() => {
        M.AutoInit();
        handlelistarProdutos()
    });

    const handledeletarProduto = (id) =>{
        console.log(id)
        axios.delete(`http://localhost:4000/produto/deletarProduto/${id}`).then((res)=>{


        }).catch((erro)=>{
            console.error('Erro', erro.response);
        }) 

    }

    return (
        <div>
            <NavBar></NavBar>
            <div className='container center'>
                <h4> <strong> Produtos </strong> </h4>

                {produtos.map(pro => (

                    <div>

                        <ul className="collapsible">

                            <li>
                                <div className="collapsible-header"><i className="material-icons"></i>{pro.nome_produto}</div>
                                <div className="collapsible-body">

                                    <div className="input-field col s6">
                                        <input disabled id="id_produto" type="text" className="validate" value={pro.id} />
                                        <label className="active" htmlFor="id_produto">Id:</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input disabled id="nome_servico" type="text" className="validate" value={pro.nome_produto} />
                                        <label className="active" htmlFor="nome_servico">Nome do Produto:</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input disabled id="valor_produto" type="text" className="validate" value={pro.valor_produto} />
                                        <label className="active" htmlFor="valor_produto">Preço:</label>
                                    </div>


                                    <div className="row">

                                        <button className="btn-floating btn-large waves-effect waves-light red lighten-2 right" type="submit" name="action" onClick={() => handledeletarProduto(pro.id)}><i className="material-icons">delete</i></button>
                                                                  
                                        
                                        <Link to={`/alterarProdutos/${pro.id}`}>
                                            <button className="btn-floating btn-large waves-effect waves-light red lighten-2 right" type="submit" name="action"><i className="material-icons">mode_edit</i></button>
                                        </Link>
                                    </div>

                                </div>
                            </li>

                        </ul>

                    </div>

                ))}

            </div>
            <div className="fixed-action-btn">

                <a className="btn-floating btn-large waves-effect waves-light red lighten-2" href="/cadastroProduto"><i className="material-icons">add</i></a>
              

            </div>

        </div>

    )
   

} export default ListaProduto;