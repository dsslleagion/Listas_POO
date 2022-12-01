import { Sequelize } from "sequelize";
import db from "../config/conexao.js";
import Pedido from "./pedido.js";

const Produto = db.define('produtos',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    nome_produto:{
        type:Sequelize.STRING,
        allowNull:true,        
    },
    valor_produto:{
        type: Sequelize.FLOAT,
        allowNull: true
    }
})

Pedido.belongsTo(Produto,{foreignKey: 'prod_id'});
Produto.Pedido = Produto.hasMany(Pedido,{foreignKey:'prod_id'});

export default Produto