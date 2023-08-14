const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const router = express.Router()
const signUpRouter = require("./routes/signUp")

app.use(express.urlencoded({extended : true}))

// sign up routes
app.use("/signup", signUpRouter)

router.get("/", (req, res) => {
    res.send("this is me inside the vim")
})

app.get("/", (req, res) => {
    res.send("Hi");
});



app.listen(port, () => {
    console.log(`app running on port port`)
})