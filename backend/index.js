
import express from "express";
import cors from "cors";
import clienteRouter from "./routes/clienteRouter.js";
import produtoRouter from "./routes/produtoRouter.js";
import servicoRouter from "./routes/servicoRouter.js";
import pedidoRouter from "./routes/pedidoRouter.js";
import listagemRouter from "./routes/listagensRouter.js";
import conexao from "./config/conexao.js";


const app = express();

try {
    conexao.authenticate().then(()=>{
        conexao.sync()
        console.log('Banco de Dados Conectado.');
    });
    
} catch (error) {
    console.error('Connection error:', error);
}

app.use(cors());

app.use(express.json());

app.use('/cliente', clienteRouter);

app.use('/produto', produtoRouter);

app.use('/servico', servicoRouter);

app.use('/pedido', pedidoRouter);

app.use('/listagem', listagemRouter);

app.listen(4000, ()=> console.log(`Servidor rodando na ${4000}.`));