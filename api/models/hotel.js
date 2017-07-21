'use strict';

const mongoose = require('mongoose'),
      Schema   = mongoose.Schema;

const HotelSchema = new Schema({
    name: String,
    starts: Number,
    price: Number
});


module.exports = mongoose.model('Hotel', HotelSchema);
