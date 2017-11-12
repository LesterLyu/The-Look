'use strict'
const mongo = require('mongoose');
const Schema = mongo.Schema;


let bodyShapeSchema = new Schema({
    height:{type: Number},
    weight:{type: Number},
    skinColor:{type: String},
    belly:{type: Boolean},  //
    shoulderShape:{type: String},
    legShape:{type: String},
    legTorsoRatio:{type: Number},
    bodyShape:{type: String},
    atLength:{type: String}, // normal /
    neckType:{type: String}
});

module.exports = mongo.model('BodyShape',bodyShapeSchema);