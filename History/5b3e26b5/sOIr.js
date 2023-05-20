const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
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
        required :[true, "lsjflasdjf"],
        unique : true 
    }

})


module.exports = new mongoose.model("loginData" ,loginSchema)