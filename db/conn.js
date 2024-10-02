//fazer conexao com mysql
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("biblioteca", "root", "root", {
  host: "localhost",
  //qual banco quero integrar
  dialect: "mysql",
});


//sequelize.sync() garante que todas as tabelas definidas nos seus modelos sejam criadas no banco de dados, caso não existam.
sequelize.sync({ force: false }) 
  .then(() => {
    console.log("Tabelas sincronizadas com sucesso!");
  })
  .catch((err) => {
    console.error("Erro ao sincronizar tabelas: ", err);
  });

module.exports = sequelize;
