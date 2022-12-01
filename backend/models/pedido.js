import { Sequelize } from "sequelize";
import conexao from "../config/conexao.js";
import Cliente from "./cliente.js"

const  Pedido = conexao.define('pedidos',{
    ped_id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    cli_id:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    prod_id:{
        type:Sequelize.INTEGER,
        allowNull:true
    },
    serv_id:{
        type:Sequelize.INTEGER,
        allowNull:true
    }
})

Pedido.belongsTo(Cliente,{foreignKey:'cli_id'});
Pedido.Cliente = Cliente.hasMany(Pedido,{foreignKey:'cli_id'});

export default Pedido