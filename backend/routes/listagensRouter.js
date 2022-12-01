import { Router } from "express";
import { listaDezMaisQtd, listaSexo, listaConsumoTotal, listaMaisSexo, listaDezMenos, listaCincoMaisValor} from "../controllers/listagemController.js";

const router = Router();

    // 1. Listagem dos 10 clientes que mais consumiram produtos ou serviços em quantidade.
router.get('/listagemQtd', listaDezMaisQtd);

    // 2. Listagem de todos os clientes por gênero.
router.get('/listagemByGenero/:genero', listaSexo);

    // 3. Listagem geral dos serviços ou produtos mais consumidos.
router.get('/listagemProdServ', listaConsumoTotal);

    // 4. Listagem dos serviços ou produtos mais consumidos por gênero.
router.get('/listagemSexoConsumo', listaMaisSexo);

    // 5. Listagem dos 10 clientes que menos consumiram produtos ou serviços.
router.get('/listagemMenorConsumo', listaDezMenos);

    //6. Listagem dos 5 clientes que mais consumiram em valor, não em quantidade.
router.get('/listagemConsumoValor', listaCincoMaisValor)



export default router;