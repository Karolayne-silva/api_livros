const { DataTypes } = require("sequelize");
//datatype dá acesso a todos os tipos de dados no bd

const sequelize = require("../db/conn");

const Books = sequelize.define("Books", {
  //definição de tipos
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
  },
  review: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  reading_year: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Books;
