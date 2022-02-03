const Sequelize = require('sequelize');

/**********************KauanByItachi123@******************************************/

const sequelize = new Sequelize('Bot', 'root', 'KauanByItachi123@', {
dialect: 'mysql', 
host: 'localhost',
port: '3306'
});

/*
const sequelize = new Sequelize('bot', 'root', '', {
    dialect: 'mysql', 
    host: '0.0.0.0',
    port: '3306'
    });
*/    

/****************************************************************/

module.exports = sequelize;