'use strict'
const mongo = require('mongoose');
const Schema = mongo.Schema;


let orderlineSchema = new Schema({
    orderlineId:{type:String,require: true},
    itemId:{type:String},
    count:{type:Number}
});

module.exports = mongo.model('OrderLine',orderlineSchema);