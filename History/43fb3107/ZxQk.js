// requires
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const router = require("./routes/router")
const hbs = require("hbs");
const path = require("path");


// mongo connecton run
require("./mongoose/connectDB/connectDB")()


// paths
const viewsPath = path.join(__dirname, "../template/views")
const partialsPath = path.join(__dirname, "../template/partials")


// setup static file
app.use("/public", express.static("public"))


// middleware 
app.use("/", router)


// veiw engine
app.set("view engine", "hbs")
app.set("views" , viewsPath)
app.set("veiws", viewsPath)


// partials set
hbs.registerPartials(partialsPath)



app.listen(port, () => {
    console.log(`app running on port ${port}`)
})