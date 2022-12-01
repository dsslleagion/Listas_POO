import { Link } from "react-router-dom";
import NavBar from "../barraNavegacao";
import { useEffect, useState } from "react";
import M from "materialize-css";
import axios from 'axios'
import { useParams } from "react-router-dom";

function AlterarProduto() {

    const [nome_produto, setNomeProduto] = useState('');
    const [valor_produto, setValorProduto] = useState('');

    const { id } = useParams();

    const handlelistarProduto = () => {
        axios.get(`http://localhost:4000/produto/listarProduto/${id}`).then((res) => {
            setNomeProduto(res.data.nome_produto);
            setValorProduto(res.data.valor_produto);
            console.log(id)
        }).catch((erro) => {
            console.error('Erro', erro.response);
        })
    };

    const handleatualizaProduto = () => {
        let obj = {
            nome_produto,
            valor_produto

        }
        axios.put(`http://localhost:4000/produto/atualizarProduto/${id}`, obj).then((res) => {
            setNomeProduto(null)
            setValorProduto(null)


        }).catch((erro) => {
            console.error('Erro', erro.response)
        })
    };


    useEffect(() => {
        M.AutoInit();
        handlelistarProduto();

    }, []);

    return (
        <div>

            <>
                <NavBar></NavBar>
            </>
            <br />

            <div className='container center'>
                <h4> <strong>Atualizar Produto {id} </strong> </h4>
            </div>

            <div className='container center'>
                <div className="row">
                    <form className="col s12">


                        <div className="row">
                            <div className="input-field col s6">
                                <input value={nome_produto} id="nome_produto" type="text" className="validate" onChange={e => setNomeProduto(e.target.value)} />
                                <label className="active" htmlFor="nome_produto">Nome</label>
                            </div>
                            <div className="input-field col s6">
                                <input value={valor_produto} id="preco_produto" type="text" className="validate" onChange={e => setValorProduto(e.target.value)} />
                                <label className="active" htmlFor="preco_produto">Preço</label>
                            </div>

                            <Link to='/listaProdutos'>
                                <button className="waves-effect waves-light btn red lighten-2" type="submit" name="action" onClick={handleatualizaProduto} >Atualizar Produto
                                    <i className="material-icons left">send</i></button>
                            </Link>

                        </div>

                    </form>
                </div>
            </div>

        </div>
    )

} export default AlterarProduto;