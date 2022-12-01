import { Router } from "express";
import { cadastroCliente, listaTodosCliente, atualizarCliente , deletarCliente, listaClienteId, getClienteCpf } from "../controllers/clienteController.js";

const router = Router();

router.post('/cadastrarCliente', cadastroCliente);
router.get('/listarClientes', listaTodosCliente);
router.put('/atualizarCliente/:id', atualizarCliente);
router.delete('/deletarCliente/:id', deletarCliente);
router.get('/listarCliente/:id', listaClienteId);
router.get('/listarClienteCpf',getClienteCpf)

export default router;