module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "posts",
    {
      nome: {
        type: DataTypes.STRING,
      },
      data: {
        type: DataTypes.STRING,
      },
      hora: {
        type: DataTypes.STRING,
      },
      imagem: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );

  return Post;
};