const Sequelize = require("sequelize");
const db = require("../db/connection");

const User = db.define("user", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  admin: {
    type: Sequelize.BOOLEAN,
    autoIncrement: false
  },
});

//exportarpara ser utilizado
module.exports = User;
