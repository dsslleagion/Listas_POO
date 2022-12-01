import { Sequelize } from "sequelize";
import conexao from "../config/conexao.js";


const Cliente = conexao.define('clientes',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    nome:{
        type:Sequelize.STRING
    },
    nome_social:{
        type:Sequelize.STRING
    },
    sexo:{
        type:Sequelize.STRING
    },
    cpf:{
        type:Sequelize.STRING
    },
    data_cpf:{
        type:Sequelize.DATE
    },
    rg:{
        type:Sequelize.STRING
    },
    data_rg:{
        type:Sequelize.DATE
    },
    data_cadastro:{
        type:Sequelize.DATE
    },
    telefone:{
        type:Sequelize.STRING
    }
})

export default Cliente