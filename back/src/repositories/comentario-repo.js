const db = require("../models");
const Comentario = db.comentarios;

exports.save = async (postId, comentario) => {
  return Comentario.create({
    comentario: comentario.Comentario,
    postId: postId,
  })
    .then((result) => {
      console.log("Created comentario: " + JSON.stringify(result));
      return result;
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

exports.findAll = async () => {
  const result = await Comentario.findAll();
  return result;
};

exports.findOne = async (id) => {
  const result = await Comentario.findOne({
    where: {
      id: id,
    },
  });
  return result;
};

exports.update = async (id, comentario) => {
  return await Comentario.update(
    {
      comentario: comentario.comentario
    },
    {
      where: {
        id: id,
      },
      returning: true,
    }
  )
    .then((result) => {
      console.log("Update comentario: " + JSON.stringify(result));
      return result[1][0]; // Only Postgres, 1 is number of affect records, 0 is first element
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

exports.delete = async (id) => {
  await Comentario.destroy({
    where: {
      id: id,
    },
  });
};
