const mongoose = require("mongoose");

const mongooseStart = async () => {
    try {

        await mongoose.connect("mongodb://localhost:27017/olymics")
    } catch (error) {
        console.log(error);
    }
};

mongooseStart()