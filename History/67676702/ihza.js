const express = require("express");
const bodyParser = require("body-parser");
const Emp = require("../models/model")
const dbConnect = require("../dbConnect/dbConnect")
dbConnect()

const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Hi");
});

app.post("/about" , (req , res) =>{
    let newModel = Emp.create({
        empName : "sahith",
        empEmail : "honey.sahith29@gmail.com"
    })
    console.log(newModel);
})


app.listen(port, () => {
    console.log(`app running on port port`)
})