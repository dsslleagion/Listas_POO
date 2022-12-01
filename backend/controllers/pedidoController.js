import Cliente from "../models/cliente.js";
import Pedido from "../models/pedido.js";
import Produto from "../models/produto.js";
import Servico from "../models/servico.js";

export const cadastroPedido = async (req,res) => {
    try{
        const pedido = Pedido.create({
            cli_id: req.body.cli_id,
            prod_id: req.body.prod_id,
            serv_id: req.body.serv_id,
            valorPedido: req.body.valorPedido
        })
        res.status(201).json(pedido)

    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const listaTodosPedido = async (req,res) => {
    try{
        const pedidos = await Pedido.findAll()
        res.status(201).json(pedidos)

    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const atualizarPedido = async (req,res) => {
    try{

    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const deletarPedido = async (req,res) => {
    try{
        const pedido = await Pedido.destroy({
            where:{
                ped_id:req.params.id
            }
        })
        const id = req.params.id
        res.status(201).json({message: `Pedido de id ${id} Deletado`})

    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const listaPedidoId = async (req,res) => {
    try{
        const pedido = await Pedido.findOne({
            where:{
                ped_id:req.params.id
            },
            attributes:['ped_id'],
            include:[{
                model:Produto,
                attributes:['id', 'nome_produto', 'valor_produto']
            },{
                model:Servico,
                attributes:['id','nome_servico', 'valor_servico']
            },{
                model:Cliente,
                attributes:['id','nome','cpf','telefone']
            }
        ]
        })
        res.status(201).json(pedido)

    }catch(error){
        console.log(error);
        res.status(500).json({ message:error })
    }
}