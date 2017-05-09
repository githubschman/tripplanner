const Sequelize = require('sequelize');
const dbConnection = require('./db');

const Hotel = dbConnection.define('hotel', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  num_stars: {
  	type: Sequelize.INTEGER,
  	validate:{
  		min:1,
  		max: 5

  	},
  	amenities:{
  		type: Sequelize.STRING
  	}
  }
});

module.exports = Hotel;

