'use strict';

const express         = require('express'),
      HotelController = require('../controllers/hotel'),
      api             = express.Router();


api.get('/hotel:?', HotelController.getHotels);


module.exports = api;
