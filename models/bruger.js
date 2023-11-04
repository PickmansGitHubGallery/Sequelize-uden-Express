
const Sequelize= require('sequelize');
const sequelize = require("../util/database");

const Bruger = sequelize.define('Bruger', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});


sequelize.sync().then(() => {
  console.log('Bruger model synchronized with the database.');
}).catch((err) => {
  console.error('Error synchronizing Bruger model:', err);
});

module.exports = Bruger;