const Sequelize = require("sequelize");
require("dotenv/config");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

sequelize.sync({
  alter: true,
});

const db = {};
db.usuarios = require("./usuario-model")(sequelize, Sequelize);
db.postagens = require("./postagem-model")(sequelize, Sequelize);
db.comentarios = require("./comentario-model")(sequelize, Sequelize);

//Relations Users x Posts
db.usuarios.hasMany(db.postagens);
db.postagens.belongsTo(db.usuarios);

//Relations Posts x Comments
db.postagens.hasMany(db.comentarios);
db.comentarios.belongsTo(db.postagens);

module.exports = db;
