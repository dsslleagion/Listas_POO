import Cliente from "../models/cliente.js";
import Pedido from "../models/pedido.js";
import Produto from "../models/produto.js";
import Servico from "../models/servico.js";
import { Op } from "sequelize";


export const cadastroCliente = async (req, res) => {
    try{
        const cliente = await Cliente.create({
            nome: req.body.nome,
            nome_social: req.body.nome_social,
            sexo: req.body.sexo,
            cpf: req.body.cpf,
            data_cpf: req.body.data_cpf,
            rg: req.body.rg,
            data_rg: req.body.data_rg,
            data_cadastro: new Date().toISOString().slice(0,10),
            telefone: req.body.telefone
        })
        res.status(201).json(cliente)

    }catch(error){
        res.status(500).json({ message:error })
    }
}


export const listaTodosCliente = async (req,res) => {
    try{
        const clientes = await Cliente.findAll()
        res.status(201).json(clientes)

    }catch(error){
        res.status(500).json({ message:error })
    }
}


export const atualizarCliente = async (req,res) => {
    try{
        const cliente = Cliente.update({
            nome: req.body.nome,
            nome_social: req.body.nome_social,
            sexo: req.body.sexo,
            cpf: req.body.cpf,
            data_cpf: req.body.data_cpf,
            rg: req.body.rg,
            data_rg: req.body.data_rg,
            telefone: req.body.telefone

        },
        {
            where:{
                id:req.params.id
            }
        })
        res.status(201).json("Os Dados do Cliente Foram Atualizados com Sucesso.")

    }catch(error){
        console.log(error)
        res.status(500).json({ message:error })
    }
}


export const deletarCliente = async (req,res) => {
    try{
        const cliente = await Cliente.destroy({
            where:{
                id:req.params.id
            }
        })
        res.status(201).json({ message:'Cliente Removido' })

    }catch(error){
        res.status(500).json({ message:error })
    }
}


export const listaClienteId = async (req,res) => {
    try{
        const cliente = await Cliente.findOne({
            where:{
                id:req.params.id
            },
            include:{
                model:Pedido,
                attributes:['ped_id'],
                include:[{
                    model:Produto,
                    attributes:['id', 'nome_produto', 'valor_produto']
                },{
                    model:Servico,
                    attributes:['id','nome_servico','valor_servico']
                }]
            }
        })
        res.status(201).json(cliente)

    }catch(error){
        console.log(error);
        res.status(500).json({ message:error })
    }
}

export const getClienteCpf = async(req,res) => {
    try{
        const cliente = await Cliente.findOne({
            where:{
                cpf:{ [Op.like]: `%${req.query.cpf}%` }
            },
            attributes:['id','nome','cpf']
        })

        res.json(cliente)

    }catch(error){
        res.status(500).json({ message:error })
    }
}