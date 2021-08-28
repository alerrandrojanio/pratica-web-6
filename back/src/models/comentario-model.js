module.exports = (sequelize, DataTypes) => {
    const Feedback = sequelize.define(
      "comentarios",
      {
        comentario: {
          type: DataTypes.STRING,
        },
        data: {
          type: DataTypes.STRING,
        },
        hora: {
          type: DataTypes.STRING,
        },
      },
      { timestamps: false }
    );
  
    return Feedback;
  };