const db = require("../models");
const Comentario = db.comentarios;
const Usuario = db.usuarios;
const Postagem = db.postagens;
const { Op } = require("sequelize");

exports.save = async (post) => {
  return await Post.create({
    texto: post.texto,
    data: post.data,
    hora: post.hora,
    imagem: post.imagem,
  })
    .then((result) => {
      console.log("Created post: " + JSON.stringify(result));
      return result;
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

exports.findAll = async () => {
  const result = await Postagem.findAll();
  return result;
};


exports.findOne = async (id) => {
  const result = await Postagem.findOne({
    where: {
      id: id,
    },
  });
  return result;
};

exports.findOne = async (id) => {
  return await Postagem.findByPk(id, {
    include: [
      {
        model: Comentario,
        attributes: { exclude: ["postId"] },
      },
      {
        model: Usuario,
        attributes: { exclude: ["usuarioId"] },
      },
    ],
  })
    .then((post) => {
      return post;
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};


exports.update = async (id, post) => {
  return await Postagem.update(
    {
      texto: post.texto,
      data: post.data,
      data: post.hora,
      data: post.imagem,
    },
    {
      where: {
        id: id,
      },
      returning: true,
    }
  )
    .then((result) => {
      console.log("Update post: " + JSON.stringify(result));
      return result[1][0]; // Only Postgres, 1 is number of affect records, 0 is first element
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

exports.delete = async (id) => {
  await Postagem.destroy({
    where: {
      id: id,
    },
  });
};
