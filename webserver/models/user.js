'use strict'
const mongo = require('mongoose');
const Schema = mongo.Schema;


let userSchema = new Schema({
    username: {type: String,require: true},
    password:{type: String, required: true},
    admin:{type: Boolean, required: true},
    contactId:{type:String},
    bodyShapeId:{type:String},
    cartId:{type:String},
    likeItemId:[String],
    likeSuitId:[String],
    dislikeItemId:[String],
    dislikeSuitId:[String],
    bookmarkItemId:[String],
    bookmarkSuitId:[String]
    // Thinking about combine item id and suit id together in bookmark/likes and dislikes.
    // ie. itemId: i0001 suitId: s0001
    // dislikes: [i001,s001,s002,i002]
});

module.exports = mongo.model('User',userSchema);