const db = require("../models");
const Usuario = db.usuarios;
const Comentario = db.comentarios;
const Postagem = db.postagens;

exports.save = async (usuario) => {
    return await Usuario.create({
      email: usuario.email,
      usuario: usuario.usuario,
      senha: usuario.senha
    })
      .then((result) => {
        console.log("Created Usuario", + JSON.stringify(result));
        return result;
      })
      .catch((err) => {
        console.log("Erro" + err);
      })
    
  };

  exports.findAll = async () => {
    const result = await Usuario.findAll();
    return result;                                                                                                                
  };

  exports.update = async (id, usuario) => {
    return await Usuario.update(
      {
        email: usuario.email,
        usuario: usuario.usuario,
        senha: usuario.senha
      },
      {
        where: {
          id: id,
        },
        returning: true,
      }
    )
      .then((result) => {
        console.log("Update usuario: " + JSON.stringify(result));
        return result[1][0]; 
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
    
  };

  exports.delete = async (id) => {
    await Usuario.destroy({
      where: {
        id: id,
      },
    });
  }