'use strict'
const mongo = require('mongoose');
const Schema = mongo.Schema;


let orderSchema = new Schema({
    orderId:{type:String,require: true},
    orderLineIds:[String],
    userId:{type:String},
    status:{type:String},
    date:{type:String},
    address:{type:String}
});

module.exports = mongo.model('Order',orderSchema);