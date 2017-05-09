const Sequelize = require('sequelize');
const dbConnection = require('./db');
//place has many activities, hotels, and restaraunts...
const Hotel = require('./hotel');
const Activity = require('./activity');
const Restaurant = require('./restaurant');

const Place = dbConnection.define('place', {
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
  	type: Sequelize.STRING,
  	allowNull: false

  	},
  	state:{
  		type: Sequelize.STRING,
      allowNull: false
  	},
    phone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location:{
    type: Sequelize.ARRAY(Sequelize.FLOAT),
    allowNull: false
  }
});

// Place.hasMany(Hotel);
// Place.hasMany(Activity);
// Place.hasMany(Restaurant);

Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);

module.exports = Place;


