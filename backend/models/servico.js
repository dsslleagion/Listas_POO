import { Sequelize } from "sequelize";
import conexao from "../config/conexao.js";
import Pedido from "./pedido.js";

const Servico = conexao.define('servicos',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    nome_servico:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    valor_servico:{
        type: Sequelize.FLOAT,
        allowNull: true,        
    }
})

Pedido.belongsTo(Servico,{foreignKey:"serv_id"});
Servico.Pedido = Servico.hasMany(Pedido,{foreignKey:"serv_id"})

export default Servico