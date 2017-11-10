'use strict'
const mongo = require('mongoose');
const Schema = mongo.Schema;


let bodyShapeSchema = new Schema({
    bodyShapeId:{type:String, require:true},
    height:{type: Number},
    weight:{type: Number},
    skinColor:{type: String},
    belly:{type: String},
    shoulderShape:{type: String},
    legShape:{type: String},
    legTorsoRatio:{type: Number},
    bodyShape:{type: String},
    atLength:{type: Number},
    neckType:{type: String},
    gender:{type: String},
});

module.exports = mongo.model('BodyShape',bodyShapeSchema);