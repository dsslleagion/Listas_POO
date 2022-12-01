import { Router } from "express";
import { cadastroServico, listaTodosServico, atualizarServico, deletarServico, listaServicoId} from "../controllers/servicoController.js"

const router = Router();

router.post ('/cadastrarServico', cadastroServico);
router.get ('/listarServicos', listaTodosServico);
router.put ('/atualizarServico/:id', atualizarServico);
router.delete ('/removerServico/:id', deletarServico);
router.get ('/listarServico/:id', listaServicoId);


export default router;

