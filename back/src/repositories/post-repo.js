const db = require("../models");
const Post = db.posts;
const Feedback = db.feedbacks;
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
  const result = await Post.findAll();
  return result;
};


exports.findOne = async (id) => {
  const result = await Post.findOne({
    where: {
      id: id,
    },
  });
  return result;
};

exports.findOne = async (id) => {
  return await Post.findByPk(id, {
    include: [
      {
        model: Feedback,
        attributes: { exclude: ["postId"] },
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
  return await Post.update(
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
  await Post.destroy({
    where: {
      id: id,
    },
  });
};
