var mongoose = require('mongoose')


const Schema = mongoose.Schema;
let Issue = new Schema({
    
     
    firstname: {
        type: String
    },
    lastname: {
        type: String 
    },
    adharno: {
        type: String
    },
    contactno: {
        type: String
    },
    symtomps: {
        type: String,
       
    },
    age: {
        type: String,
       
    },
    sex: {
        type: String,
       
    },
    status: {
        type: String
    },
    hospitalId:{
        type: String
    },
    timestamp:{
        type: String
    }
});
module.exports = mongoose.model('Issue',Issue)