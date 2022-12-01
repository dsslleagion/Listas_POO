import { Sequelize } from "sequelize";

const conexao = new Sequelize('wb_banco', 'root','fatec' , {
    dialect: 'mysql',
    host: 'localhost'
  })

export default conexao;