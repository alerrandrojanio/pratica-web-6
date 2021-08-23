module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "posts",
    {
      nome: {
        type: DataTypes.TEXT,
      },
      data: {
        type: DataTypes.TEXT,
      },
      hora: {
        type: DataTypes.TEXT,
      },
      imagem: {
        type: DataTypes.TEXT,
      },
    },
    { timestamps: false }
  );

  return Post;
};