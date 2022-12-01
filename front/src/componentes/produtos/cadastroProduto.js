import { Link } from "react-router-dom";
import NavBar from "../barraNavegacao";
import { useEffect, useState } from "react";
import M from "materialize-css";
import axios from 'axios'

function CadastroProduto(){

    
    const[nome_produto, setNomeproduto] = useState('');
    const[valor_produto, setValor] = useState('');

    const handleCadastroProduto = () =>{
        let url = 'http://localhost:4000/produto/cadastrarProduto'
        let obj = {
            nome_produto,
            valor_produto
        }
        
        axios.post(url, obj).then((res) => {

        }).catch((erro)=>{
                console.error('Erro', erro.response)
        }) 
  };

  useEffect(() => {
    M.AutoInit();
});
    


        return (
            <div>

                <>
                    <NavBar></NavBar>
                </>
                <br />
                <div className='container center'>
                    <h4> <strong>Cadastro de Produto </strong> </h4>
                </div>
                <div className='container center'>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input value={nome_produto} id="nome_produto" type="text" className="validate" onChange={e=>setNomeproduto(e.target.value)} />
                                    <label htmlFor="nome_produto">Nome</label>
                                </div>
                                <div className="input-field col s6">
                                    <input value={valor_produto} id="preco_produto" type="text" className="validate" onChange={e=>setValor(e.target.value)}/>
                                    <label htmlFor="preco_produto">Preço</label>
                                </div>

                                <Link to='/listaProdutos'>
                                    <button className="waves-effect waves-light btn red lighten-2" type="submit" name="action" onClick={handleCadastroProduto}>Cadastrar Produto
                                        <i className="material-icons left">add</i></button>
                                </Link>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    
}export default CadastroProduto;