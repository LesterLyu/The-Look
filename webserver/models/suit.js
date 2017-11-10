'use strict'
const mongo = require('mongoose');
const Schema = mongo.Schema;


let suitSchema = new Schema({
    name: {type:String},
    img: {type:String},
    items:[String], // List of item Id.
    bodyShapeIdRange:{type:String},
});

module.exports = mongo.model('Suit',suitSchema);