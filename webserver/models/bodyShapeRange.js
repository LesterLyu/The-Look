'use strict'
const mongo = require('mongoose');
const Schema = mongo.Schema;


let bodyShapeRangeSchema = new Schema({
    height:{
        max: Number,
        min: Number
    },
    weight:{
        max: Number,
        min: Number
    },
    skinColor:[String],
    belly:[String],
    shoulderShape:[String],
    legShape:[String],
    legTorsoRatio:{
        max: Number,
        min: Number
    },
    bodyShape:[String],
    atLength:{
        max: Number,
        min: Number
    },
    neckType:[String],
    gender:[String]
});

module.exports = mongo.model('BodyShapeRange',bodyShapeRangeSchema);