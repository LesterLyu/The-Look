'use strict'
const mongo = require('mongoose');
const Schema = mongo.Schema;


let suitSchema = new Schema({
    suitId: {type: String,require: true},
    items:[], // List of item Id.
    bodyShape:{type:String},
});

module.exports = mongo.model('Suit',suitSchema);