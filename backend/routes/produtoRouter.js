import { Router } from "express";
import { cadastroProduto, listaTodosProduto, atualizarProduto, deletarProduto, listaProdutoId } from "../controllers/produtoController.js";

const router = Router();

router.post ('/cadastrarProduto', cadastroProduto);
router.get ('/listarProdutos', listaTodosProduto);
router.put ('/atualizarProduto/:id', atualizarProduto);
router.delete ('/deletarProduto/:id', deletarProduto);
router.get ('/listarProduto/:id', listaProdutoId);


export default router;