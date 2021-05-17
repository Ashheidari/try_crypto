const mongoose = require('mongoose')

const Schema = mongoose.Schema

const planSchema = new Schema({
    planName : {type:String,required:true},
    currentPrice : {type:Number,required:true},
 


    

},{timestamps:true});



module.exports = planSchema
