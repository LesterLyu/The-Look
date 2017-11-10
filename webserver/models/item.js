'use strict'
const mongo = require('mongoose');
const Schema = mongo.Schema;


let itemSchema = new Schema({
    itemId: {type: String,require: true},
    name: {type:String},
    bodyShapeIdMax:{type:String},
    bodyShapeIdMin:{type:String},
    price:{type:Number},
    img: {type:String},
    url:{type:String},
    type:{type:String}, // this is tags
    season:{type:String},
    brand:{type:String},
    allSizes:[],
    color:{type:String}
});

module.exports = mongo.model('Item',itemSchema);