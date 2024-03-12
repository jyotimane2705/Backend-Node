const express = require('express');

const locationController = require("../Controller/location");
const restaurantController = require("../Controller/restaurant");
const mealtypeController = require("../Controller/mealtype");


const route = express.Router();

route.get('/location', locationController.getLocation);
route.get('/restaurant', restaurantController.getRestaurant);
route.get('/mealtype', mealtypeController.getMealtype);

route.get('/:cityname', restaurantController.getRestaurantByCity);


module.exports = route;