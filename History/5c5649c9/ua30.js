const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    password : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },

    date : {
        type : String,
        default : Date.now()
    },

})


module.exports = new mongoose.model("user" , UserSchem