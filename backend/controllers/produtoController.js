import Produto from "../models/produto.js";

export const cadastroProduto = async (req,res) =>{
    try{
        const produto = await Produto.create({
            nome_produto:req.body.nome_produto,
            valor_produto:req.body.valor_produto
        })
        res.status(201).json(produto)

    }catch(error){
        res.status(500).json({message:error})
    }
}

export const listaTodosProduto = async (req,res) =>{
    try{
        const produto = await Produto.findAll({})
        res.status(201).json(produto)

    }catch(error){
        res.status(500).json({message:error})
    }
}


export const atualizarProduto = async (req,res)=>{
    try{
        const produto = await Produto.update({
            nome_produto:req.body.nome_produto,
            valor_produto:req.body.valor_produto
        },{
            where:{
                id:req.params.id
            }
        })
       res.status(201).json("Os Dados do Produto Foram Atualizados com Sucesso.")

    }catch(error){
        console.log(error);
        res.status(500).json({message:error})
    }
}

export const deletarProduto = async (req,res)=>{
    try{ 
        const produto = await Produto.destroy({
        where:{
            id:req.params.id
         }
    })
    res.status(201).json({message: 'Produto Deletado'})

    }catch(error){
        console.log("Tricolor Campeão");
        console.log(error);
        res.status(500).json({message:error})
    }
}

export const listaProdutoId = async (req,res)=>{
    try{
        const produto = await Produto.findOne({
            where:{
                id:req.params.id
            }
        })
        res.status(201).json(produto)

    }catch(error){
        res.status(500).json({message:error})
    }
}