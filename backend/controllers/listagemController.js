import Cliente from "../models/cliente.js"
import Pedido from "../models/pedido.js"
import Produto from "../models/produto.js"
import Servico from "../models/servico.js"


// Listagem dos 10 clientes que mais consumiram produtos ou serviços em quantidade.
export const listaDezMaisQtd = async (req,res) => {
    try{
        const dados = await Cliente.findAll({
            attributes:['id','nome', 'cpf'],
            include:{
                model:Pedido,
                attributes:['ped_id','cli_id','prod_id','serv_id']
            }
        })

        const clientes = dados.map(c=>{
            let total = 0
            c.dataValues.pedidos.forEach(p=>{
                if(p.dataValues.serv_id) total++
                if(p.dataValues.prod_id) total++
            })
            delete c.dataValues.pedidos
            return { ...c.dataValues, total}
        }).sort((a,b)=>b.total-a.total).slice(0,10)

        res.status(201).json(clientes)

    }catch(error){
        res.status(500).json({ message:error })
    }
}

// Listagem de todos os clientes por gênero.
export const listaSexo = async (req,res) =>{
    try{
        const cliente = await Cliente.findAll({
            where:{
                sexo:req.params.sexo
            }
        })
        res.status(201).json({message: 'Listagem de Clientes por Gênero', cliente})

    }catch(error){
        console.log(error);
        res.status(500).json({ message:error })
    }
}

// Listagem geral dos serviços ou produtos mais consumidos.
export const listaConsumoTotal = async (req,res) => {
    try{
        const dados = await Pedido.findAll({
            attributes:['ped_id','prod_id','serv_id'],
            include:[{
                model:Produto,
                attributes:['id', 'nome_produto']
            },{
                model:Servico,
                attributes:['id','nome_servico']
            }]
        })

        const filtrado = dados.reduce((acc, cur)=>{

            if(cur.dataValues?.prod_id){
                if(acc[`produto_${cur.dataValues.prod_id}`]){
                    acc[`produto_${cur.dataValues.prod_id}`].qtd++
                }else{
                    acc[`produto_${cur.dataValues.prod_id}`] = {qtd:1, ...cur.dataValues.produto.dataValues, tipo:'Produto' }
                }
            }
                      
            if(cur.dataValues?.serv_id){
                if(acc[`servico_${cur.dataValues.serv_id}`]){
                    acc[`servico_${cur.dataValues.serv_id}`].qtd++
                }else{
                    acc[`servico_${cur.dataValues.serv_id}`] = {qtd:1, ...cur.dataValues.servico.dataValues, tipo:'Serviço'}                
                }
            }
            return acc
            
        },{})

        let ordenado = Object.keys(filtrado).map(k=>{
            return { ...filtrado[k] }
        }).sort((a, b) => b.qtd - a.qtd).slice(0, 100)


        res.status(201).json(ordenado)

    }catch(error){
        res.status(500).json({message:error})
    }
}


// Listagem dos serviços ou produtos mais consumidos por gênero.
export const listaMaisSexo = async (req,res) =>{
    try{

        const dados = await Pedido.findAll({
            include:[{
                model:Cliente,
                attributes:['id','nome','cpf','telefone','sexo']
            },{
                model:Produto,
                attributes:['id', 'nome_produto','valor_produto']
            },{
                model:Servico,
                attributes:['id','nome_servico','valor_servico']
            }]
        })

        const filtrado = dados.reduce((acc, cur)=>{

            if(cur.dataValues?.prod_id){
                if(acc[cur.dataValues.cliente.dataValues.sexo][`produto_${cur.dataValues.prod_id}`]){
                    acc[cur.dataValues.cliente.dataValues.sexo][`produto_${cur.dataValues.prod_id}`].qtd++
                }else{
                    acc[cur.dataValues.cliente.dataValues.sexo][`produto_${cur.dataValues.prod_id}`] = {qtd:1, ...cur.dataValues.produto.dataValues, tipo:'Produto' }
                }
            }

            if(cur.dataValues?.serv_id){
                if(acc[cur.dataValues.cliente.dataValues.sexo][`servico_${cur.dataValues.serv_id}`]){
                    acc[cur.dataValues.cliente.dataValues.sexo][`servico_${cur.dataValues.serv_id}`].qtd++
                }else{
                    acc[cur.dataValues.cliente.dataValues.sexo][`servico_${cur.dataValues.serv_id}`] = {qtd:1, ...cur.dataValues.servico.dataValues, tipo:'Serviço'}                
                }
            }
            return acc
            
        },{M:{}, F:{}, N:{}})

        let ordenadoM = Object.keys(filtrado.M).map(k=>{
            return {...filtrado.M[k]}
        }).sort((a, b) => b.qtd - a.qtd).slice(0, 3)

        let ordenadoF = Object.keys(filtrado.F).map( k => {
            return {...filtrado.F[k]}
        }).sort((a, b) => b.qtd - a.qtd).slice(0, 3)
        
        let ordenadoN = Object.keys(filtrado.N).map(k=>{
            return {...filtrado.N[k]}
        }).sort((a, b) => b.qtd - a.qtd).slice(0, 3)

        res.status(201).json({ordenadoM,ordenadoF,ordenadoN})

    }catch(error){
        res.status(500).json({ message:error })
    }
}

// Listagem dos 10 clientes que menos consumiram produtos ou serviços.
export const listaDezMenos = async (req, res) => {
    try{
        const dados = await Cliente.findAll({
            attributes:['id','nome', 'cpf'],
            include:{
                model:Pedido,
                attributes:['ped_id','cli_id','prod_id','serv_id']
            }
        })

        const clientes = dados.map(c=>{
            let total = 0
            c.dataValues.pedidos.forEach(p=>{
                if(p.dataValues.serv_id) total++
                if(p.dataValues.prod_id) total++
            })
            delete c.dataValues.pedidos
            return { ...c.dataValues, total}
        }).sort((a,b)=>a.total-b.total).slice(0,10)

        res.status(201).json(clientes)


    }catch(error){
        res.status(500).json({ message:error })
    }
}

// Listagem dos 5 clientes que mais consumiram em valor, não em quantidade.
export const listaCincoMaisValor = async (req, res) => {
    try{
        const dados = await Cliente.findAll({
            attributes:['id','nome','nome_social','cpf'],
            include:{
                model:Pedido,
                attributes:['ped_id','cli_id','prod_id','serv_id'],
                include:[{
                    model:Produto,
                    attributes:['id', 'valor_produto']
                },{
                    model:Servico,
                    attributes:['id','valor_servico']
                }]
            }
        })

        const clientes = dados.map(c=>{
            let total = 0
            c.dataValues.pedidos.forEach(p=>{
                if(p.dataValues.serv_id) {
                    total +=p.dataValues.servico.valor_servico
                }
                if(p.dataValues.prod_id) {
                    total +=p.dataValues.produto.valor_produto
                }
            })
            delete c.dataValues.pedidos
            return { ...c.dataValues, total}
        }).sort((a,b)=>b.total-a.total).slice(0,5)

        res.status(201).json(clientes)

    }catch(error){
        console.log(error);
        res.status(500).json({ message:error })
    }
}