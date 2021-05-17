const mongoose = require('mongoose')

const Plan = require('./Plan');

const Schema = mongoose.Schema

const subscSchema = new Schema({
    dateSubscribe : {type:Date,required:true},
    validateTo : {type:Date,required:true},
    dateUnsubscribe : {type:Date,required:true},
    plan:Plan,
    userId : {type:Schema.Types.ObjectId,required:true},


    

},{timestamps:true});


const Subsc = mongoose.model('Subsc',subscSchema);
module.exports = Subsc
