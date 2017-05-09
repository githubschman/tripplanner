const Sequelize = require('sequelize');
const dbConnection = require('./db');

const Activity = dbConnection.define('activity', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age_range: {
  	type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Activity;

