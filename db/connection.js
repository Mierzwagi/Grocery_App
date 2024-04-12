//Aplicaçã para utilizar bancos relacionais
const Sequelize = require('sequelize');

//Criando instancia do sequilize
const sequelize = new Sequelize('quitanda', 'root', 'root',{
    //Dialetq = qual banco utilizado e onde está
    dialect: 'mysql',

});



//Exportar o arquivo de configuraçã do banco
module.exports = sequelize
