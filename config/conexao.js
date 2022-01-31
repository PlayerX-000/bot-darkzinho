const { Sequelize } = require("sequelize");

/****************************************************************/

const sequelize = new Sequelize("DB_BOT_DARKZINHO" , "Darkzinho_Itachi" , "2022" ,{
dialect: 'sqlite',
host: './db/database/Bot.sqlite'
})

/****************************************************************/

module.exports = sequelize;