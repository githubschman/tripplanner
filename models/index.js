const dbConnection = require('./db');
const HotelModel = require('./hotel');
const PlaceModel = require('./place')
const ActivityModel = require('./activity')
const RestaurantModel = require('./restaurant')



module.exports = {
  db: dbConnection,
  Hotel: HotelModel,
  Place: PlaceModel,
  Activity: ActivityModel,
  Restaurant: RestaurantModel
};


