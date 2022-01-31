const { Model , DataTypes } = require('sequelize');
const sequelize = require("../../config/conexao");

/****************************************************************/

class Users extends Model {}

/****************************************************************/



Users.init({
    id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER, 
    allowNull: false
    },

    nome: {
    type: DataTypes.STRING,
    allowNull: false
    },

    tel: {
    type: DataTypes.STRING,
    allowNull: false
    },

    idade: {
    type: DataTypes.INTEGER,
    allowNull: false
    },

    nivel: {
    type: DataTypes.INTEGER,
    allowNull: false
    },

    xp: {
    type: DataTypes.INTEGER,
    allowNull: false
    },

    comandos: {
    type: DataTypes.INTEGER,
    allowNull: false
    },

    mensagens: {
    type: DataTypes.INTEGER,
    allowNull: false
    }
},{
    sequelize,
    modelName: 'Users'

    })
    
/****************************************************************/

module.exports = Users;