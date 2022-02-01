const { Sequelize } = require("sequelize");

/***********************KauanByItachi123@*****************************************/

const sequelize = new Sequelize('epiz_30961222_bots', 'epiz_30961222', '12345678', {
    dialect: 'mysql',
    host: 'sql204.epizy.com'
  })

/****************************************************************/

module.exports = sequelize;

