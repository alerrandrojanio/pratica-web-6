const db = require("../models");
const Feedback = db.feedbacks;

exports.save = async (postId, feedback) => {
  return Feedback.create({
    id_post: feedback.id_post,
    comentario: feedback.comentario,
    data: feedback.data,
    hora: feedback.hora
  })
    .then((result) => {
      console.log("Created feedback: " + JSON.stringify(result));
      return result;
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

exports.findAll = async () => {
  const result = await Feedback.findAll();
  return result;
};

exports.findOne = async (id) => {
  const result = await Feedback.findOne({
    where: {
      id: id,
    },
  });
  return result;
};

exports.update = async (id, feedback) => {
  return await Feedback.update(
    {
      id_post: feedback.id_post,
      comentario: feedback.comentario,
      data: feedback.data,
      hora: feedback.hora
    },
    {
      where: {
        id: id,
      },
      returning: true,
    }
  )
    .then((result) => {
      console.log("Update feedback: " + JSON.stringify(result));
      return result[1][0]; // Only Postgres, 1 is number of affect records, 0 is first element
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

exports.delete = async (id) => {
  await Feedback.destroy({
    where: {
      id: id,
    },
  });
};
