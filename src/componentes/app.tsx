import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from "./home";
import ListaCliente from "./clientes/listaCliente";




import ListaPedidos from './pedidos/listaPedidos';
import Pedidos from './pedidos/pedidos';
import AlterarPedido from './pedidos/alterarPedidos';
import AlterarProduto from './produtos/alterarProdutos';
import ListaSevicos from './servicos/listaServicos';
import Listagens from './Listagens';
import ListaProdutos from './produtos/listaProduto';
import Produto from './produtos/produto';
import Servico from './servicos/servico';
import CadastroProduto from './produtos/cadastroProduto';
import CadastroServico from './servicos/cadastroServico';
import AlterarCliente from './clientes/alterarCliente';
import Cliente from './clientes/cliente';
import CadastroCliente from './clientes/cadastroCliente';
import CadastroPedido from './pedidos/cadastroPedido';
import AlterarServico from './servicos/alterarServicos';
import { Component } from 'react';

type props = {
  tema: string
}

export default class App extends Component<any, props> {

  // function App() {
    render() {
    return (
      <BrowserRouter>
      <Routes>
      <Route index element={<Home/>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
      <Route path="/Listagens" element={<Listagens/>}/>
      <Route path="/listaClientes" element={<ListaCliente/>}/>
      <Route path="/listaProdutos" element={<ListaProdutos/>}/>
      <Route path="/listaPedidos" element={<ListaPedidos/>}/>
      <Route path="/listaServicos" element={<ListaSevicos/>}/>
      <Route path="/produto" element={<Produto/>}/>
      <Route path="/servico" element={<Servico/>}/>
      <Route path="/cliente" element={<Cliente/>}/>
      <Route path="/pedido" element={<Pedidos/>}/>
      <Route path="/alterarCliente" element={<AlterarCliente/>}/>
      <Route path="/alterarPedidos" element={<AlterarPedido/>}/>
      <Route path="/alterarProdutos" element={<AlterarProduto/>}/>
      <Route path="/alterarServicos" element={<AlterarServico/>}/>
      <Route path="/cadastroCliente" element={<CadastroCliente/>}/>
      <Route path="/cadastroProduto" element={<CadastroProduto/>}/>
      <Route path="/cadastroServico" element={<CadastroServico/>}/>
      <Route path="/cadastroPedido" element={<CadastroPedido/>}/>


  
      </Routes>
      </BrowserRouter>
      
    );
  }
}

// export default App;

