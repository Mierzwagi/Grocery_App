const Sequelize = require("sequelize");
const db = require("../db/connection");

const Favoritos = db.define("favoritos", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: true,
  }
});

//Categorias.belongsTo(Products, {foreignKey: 'categoria', allowNull: false})

//exportar para ser utilizado
module.exports = Favoritos;
