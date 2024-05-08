//Aplicação para utilizar bancos relacionais
require("dotenv").config();
const Sequelize = require('sequelize');

//Criando instancia do sequilize
const sequelize = new Sequelize('quitanda', process.env.DB_PASSWORD, 'root',{
    //Dialetq = qual banco utilizado e onde está
    dialect: 'mysql',

});



//Exportar o arquivo de configuração do banco
module.exports = sequelize
