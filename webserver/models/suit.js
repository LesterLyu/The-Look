'use strict'
const mongo = require('mongoose');
const Schema = mongo.Schema;


let suitSchema = new Schema({
    suitId: {type: String,require: true},
    name: {type:String},
    img: {type:String},
    items:[], // List of item Id.
    bodyShapeIdRange:{type:String},
});

module.exports = mongo.model('Suit',suitSchema);