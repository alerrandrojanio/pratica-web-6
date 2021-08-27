module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define(
        'usuarios',
        {
            email: {
                type: DataTypes.STRING,
            },
            usuario: {
                type: DataTypes.STRING,
            },
            senha:{
                type: DataTypes.STRING,
            }
        },
        {
            timestamps: true
        }
    );
    return Usuario;
}