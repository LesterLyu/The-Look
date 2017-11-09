'use strict'
const mongo = require('mongoose');
const Schema = mongo.Schema;


let itemSchema = new Schema({
    ItemId: {type: String,require: true},
    bodyShape:{type:String},
    price:{type:Number},
    url:{type:String},
    type:{type:String},
    season:{type:String},
    brand:{type:String},
    allSizes:[],
    color:{type:String}
});

module.exports = mongo.model('Item',itemSchema);