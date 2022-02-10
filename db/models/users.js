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

    atk: {
    type: DataTypes.INTEGER,
    allowNull: false
    },

    def: {
    type: DataTypes.INTEGER,
    allowNull: false
    },

    vida: {
    type: DataTypes.INTEGER,
    allowNull: false
    },

    vidaMax: {
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