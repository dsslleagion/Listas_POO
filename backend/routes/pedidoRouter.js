import { Router } from "express";
import { cadastroPedido, listaTodosPedido, atualizarPedido , deletarPedido, listaPedidoId  } from "../controllers/pedidoController.js";

const router = Router();

router.post('/cadastrarPedido', cadastroPedido);
router.get('/listarPedidos', listaTodosPedido);
router.put('/atualizarPedido/:id',atualizarPedido);
router.delete('/deletarPedido/:id', deletarPedido);
router.get('/listarPedido/:id', listaPedidoId);

export default router;