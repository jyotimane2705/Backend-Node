const Restaurant = require("../Model/restaurantDB");

exports.getRestaurant = (req, res) => {
    
    Restaurant.find()
        .then(response => {
            res.status(200).json({
                message: "Restaurant Fetched Successfully",
                restaurant: response
            })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.getRestaurantByCity = (req, res) => {

    const {cityname} = req.params;
    
    Restaurant.find({ city_name: cityname }, {})
        .then(response => {
            res.status(200).json({
                message: "Restaurant By city Fetched Successfully",
                RestaurantByCity: response
            })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

