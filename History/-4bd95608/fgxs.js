const mongoose = require("mongoose");

const sinUpSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },

    email : { 
        type : String,
        required : true
    },

    password : { 
        type : String, 
        required : true
    }, 

    confirm
})