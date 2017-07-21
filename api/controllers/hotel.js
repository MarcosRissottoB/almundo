'use strict';

const mongoose = require('mongoose'),
      Hotel    = require('./../models/hotel');


const getHotels = (req, res) => {
  // res.status(200).send({message: 'Hola desde el controlador hotel...'});
  Hotel.find().sort('name')
    .then((hotels) => {
      return res.status(200).send({hotels: hotels});
    })
    .catch((err) => {
      if(err){
        console.log(`Error al consultar hoteles: ${err}`);
        return res.status(500).send(err);
      }
    })
};



module.exports = {getHotels};
