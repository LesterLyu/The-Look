'use strict'
const mongo = require('mongoose');
const Schema = mongo.Schema;


let cartSchema = new Schema({
    cartId:{type:String, require:true},
    orderLineIds:[String]
});

module.exports = mongo.model('Cart',cartSchema);