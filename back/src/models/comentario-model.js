module.exports = (sequelize, DataTypes) => {
    const Feedback = sequelize.define(
      "feedbacks",
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