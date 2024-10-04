const { Sequelize } = require("sequelize");
const dotenv = require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  }
);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Tabelas sincronizadas com sucesso!");
  })
  .catch((err) => {
    console.error("Erro ao sincronizar tabelas: ", err);
  });

module.exports = sequelize;
