module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "posts",
    {
      corpo: {
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