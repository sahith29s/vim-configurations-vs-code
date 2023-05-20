const express = require("express");
port = process.env.PORT || 3000;
const app = express();




app.get("/", (req, res) => {
    res.send("Hi");
});


app.listen(port, () => {
    console.log(`app running on port ${port}`)
})