const router = require('express').Router();
const Promise = require('bluebird');
const Hotel = require('../models').Hotel;
const Activity = require('../models').Activity;
const Restaurant = require('../models').Restaurant;

router.get('/', function(req, res, next) {
	var allHotels = Hotel.findAll();
	var allRestaurants = Restaurant.findAll();
	var allActivities = Activity.findAll();
	var num = Math.floor(Math.random() * 5);
	Promise.all([allHotels,allRestaurants,allActivities]).spread(function(hotels,restaurants,activities){
		res.render('index', {hotels: hotels, restaurants: restaurants, activities: activities, hotelEx: hotels[num], activityEx: activities[num], foodEx: restaurants[num]});


	}).catch(next);

 });

router.get('/error', function(req,res,next){
	res.render('error')
})

// router.use(function(req, res, next) {
//     if(req.accepts('html') && res.status(404)) {
//         res.render('404');
//         return;
//     }
// });

module.exports = router;