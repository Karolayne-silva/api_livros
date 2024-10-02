const { DataTypes } = require("sequelize");
//datatype dá acesso a todos os tipos de dados no bd

const sequelize = require("../db/conn");

const Books = sequelize.define("Books", {
  //definição de tipos
  title: {
    type: DataTypes.STRING,
    allowNull: false, //nao aceita falso
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false, //nao aceita vazio
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publication_year: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Books;
