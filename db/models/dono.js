const { Model , DataTypes } = require('sequelize');
const sequelize = require("../../config/conexao");

/****************************************************************/

class Donos extends Model {}

/****************************************************************/



Donos.init({
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

    idade: {
    type: DataTypes.STRING,
    allowNull: false
    },    
    
    tel: {
    type: DataTypes.STRING,
    allowNull: false
    }
},{
    sequelize,
    modelName: 'Donos'
})
        
    /****************************************************************/
    
    module.exports = Donos;