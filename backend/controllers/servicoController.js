import Servico from "../models/servico.js"

export const cadastroServico = async (req,res) =>{
    try{
        const servico = await Servico.create({
            nome_servico:req.body.nome_servico,
            valor_servico:req.body.valor_servico
        })
        res.status(201).json(servico)

    }catch(error){
        res.status(500).json({ message:error })
    }
}

export const listaTodosServico = async  (req,res) =>{
    try{
        const servico = await Servico.findAll({})
        res.status(201).json(servico)

    }catch(error){
        res.status(500).json({ message:error })
    }
}


export const atualizarServico = async (req,res)=>{
    try{
        const servico = await Servico.update({
            nome_servico:req.body.nome_servico,
            valor_servico:req.body.valor_servico
        },{
            where:{
                id:req.params.id
            }
        })
        res.status(201).json("Os Dados do Serviço Foram Atualizados com Sucesso.")

    }catch(error){
        console.log(error);
        res.status(500).json({message:error})
    }
    
}

export const deletarServico = async (req,res) =>{
    try{
        const servico = await Servico.destroy({
            where:{
                id:req.params.id
            }
        })
        res.status(201).json({message:'Serviço Deletado'})

    }catch(error){
        console.log(error);
        res.json({message:error})
    }
}

export const listaServicoId = async (req, res) =>{
    try{
        const servico = await Servico.findOne({
            where:{
                id:req.params.id
            }
        })
        res.status(201).json(servico)

    }catch(error){
        res.status(500).json({message:error})
    }
}