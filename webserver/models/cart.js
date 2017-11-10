'use strict'
const mongo = require('mongoose');
const Schema = mongo.Schema;


let cartSchema = new Schema({
    orderLineIds:[]
});

module.exports = mongo.model('Cart',cartSchema);